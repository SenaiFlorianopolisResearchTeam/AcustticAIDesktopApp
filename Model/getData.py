from roboflow import Roboflow
import os

key = os.getenv('api_key')
print(key)

rf = Roboflow(api_key=key)
project = rf.workspace("roboflow-100").project("vehicles-q0x2v")
dataset = project.version(2).download("yolov8")