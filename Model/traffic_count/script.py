import ultralytics
from ultralytics import YOLO

ultralytics.checks()

# load model
model = YOLO("yolov8x.pt")
model.fuse()