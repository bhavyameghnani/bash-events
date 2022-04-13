import time
from flask import Flask,request
from flask_cors import CORS , cross_origin
from elasticsearch import Elasticsearch
import Config

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, support_credentials=True)

es = Elasticsearch(
    cloud_id=Config.CLOUD_ID,
    http_auth=(Config.USERNAME, Config.PASSWORD),
    ) 


@app.route('/')
@cross_origin(support_credentials=True)
def get_default_msg():
    return "Welcome to BASH Events"


@app.route('/time')
@cross_origin(support_credentials=True)
def get_current_time():
    return {'time': time.time()}


@app.route('/employee/<empId>')
def getEmployee(empId):
    res = es.get(index="employee", id=empId)
    return res['_source']

app.run(port=5000, debug=True)