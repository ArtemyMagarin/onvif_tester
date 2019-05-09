import time
import os
import utils
from core import Camera
from tests import CoreTests, EventsTests, AnalyticsTests, ImagingTests, Tests
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import json
from pprint import pprint
from utils.generate_report import *


from flask import (
    Flask, request, jsonify, redirect,
    send_from_directory, Response, render_template)


app = Flask(__name__,
 static_folder = 'templates/build/static',
 template_folder="templates/build")

app.config.from_object('config')
db = SQLAlchemy(app)
CORS(app)


@app.route('/info')
def index():
    return jsonify(api_avaliable_routes=[
        '/api/<test_type>_test/<method_name>',
        '/api/tests',
        '/api/devices',
        '/api/device',
        '/snapshots/<path:filename>',
        '/livestream'
    ])


@app.route('/api/<test_type>_test/<method_name>', methods=['POST'])
@utils.cam_required
def run_test(*args, **kwargs):
    cam = kwargs['ctx']['cam']
    test_type = kwargs['test_type']
    method_name = kwargs['method_name']
    test = Tests(cam)
    return jsonify(test.service_test(test_type, method_name))


@app.route('/api/tests')
@utils.cam_required
def tests(*args, **kwargs):
    cam = kwargs['ctx']['cam']
    test = Tests(cam)
    return jsonify(test.avaliable_tests())


@app.route('/api/report', methods=['GET', 'POST'])
def report():
    tested_data = json.loads(request.data)
    url = generate_report(tested_data)
    return jsonify(response=url)

@app.route('/reports/<path:filename>')
def return_report_file(filename):
    return send_from_directory('reports', filename)

'''
Devices API
'''
@app.route('/api/devices')
def get_devices_list():
    return jsonify(utils.discovery())


@app.route('/api/device')
@utils.cam_required
def get_device_info(*args, **kwargs):
    cam = kwargs['ctx']['cam']
    return jsonify(cam.get_device_info())


'''
Serving data from device
'''
@app.route('/snapshots/<path:filename>')
def get_snapshot(filename):
    return send_from_directory(
        app.config['SNAPSHOTS_STATIC_PATH'], filename)


@app.route('/api/get_snapshots')
@utils.cam_required
def get_snapshots(*args, **kwargs):
    cam = kwargs['ctx']['cam']
    return jsonify(cam.get_snapshots_list())


@app.route('/api/current_snapshot')
@utils.cam_required
def get_current_snapshot(*args, **kwargs):
    cam = kwargs['ctx']['cam']
    return jsonify({
        'camera': cam.ip + ':' + str(cam.port),
        'datetime': time.strftime("%d-%m-%Y %H:%M:%S", time.localtime()),
        'url': cam.get_public_snapshot_url()
    })


@app.route('/livestream')
@utils.cam_required
def livestream(*args, **kwargs):
    cam = kwargs['ctx']['cam']
    url = cam.get_private_stream_url()
    playlist_name = ("%s%d.m3u8" % (cam.ip.replace('.', ''), cam.port))

    if not os.path.exists(os.path.join('./streams', playlist_name)):
        utils.stream.start_stream(url, './streams', playlist_name)

    # make sure the stream was created
    while not os.path.exists(os.path.join('./streams', playlist_name)):
        time.sleep(1)

    return redirect("/%s" % playlist_name, code=302)


@app.route('/<name>.m3u8')
def streaming_stuff1(name):
    return send_from_directory('streams', name+'.m3u8')

@app.route('/<name>.ts')
def streaming_stuff2(name):
    return send_from_directory('streams', name+'.ts')




@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def spa(path):
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)