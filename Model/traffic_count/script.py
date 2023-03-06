import ultralytics
from ultralytics import YOLO
import ByteTrack.yolox as yolox
from dataclasses import dataclass
from onemetric.cv.utils.iou import box_iou_batch
##import ByteTrack.yolox.tracker.byte_tracker as bt
# bt.BYTETracker ou yolox.tracker.byte_tracker.BYTETracker
# bt.STrack ou yolox.tracker.byte_tracker.STrack
import supervision
from supervision.video.source import get_video_frames_generator
from supervision.tools.detections import Detections, BoxAnnotator
from supervision.draw.color import ColorPalette
from supervision.video.dataclasses import VideoInfo
from supervision.video.sink import VideoSink

from tqdm import tqdm

ultralytics.checks()

print("ByteTrack verification")

print("yolox.__version__:", yolox.__version__)

print("Supervision verification")

print("supervision.__version__:", supervision.__version__)

@dataclass(frozen=True)
class BYTETTrackerArgs:
    track_thresh: float = 0.25
    track_buffer: int = 30
    match_thresh:float = 0.8
    aspect_ratio_thresh: float = 3.0
    min_box_area: float = 1.0
    mot20: bool = False
    
MODEL = "yolov8s.pt"

model = YOLO(MODEL)
model.fuse()

video_info = VideoInfo.from_video_path("./test/video.mp4")

print("video_info {}".format(video_info))

generator = get_video_frames_generator("./test/video.mp4") # video path

box_annotator = BoxAnnotator(color=ColorPalette(), thickness=4, text_thickness=4, text_scale=2)

with VideoSink("./test/video.mp4", video_info) as sink:
    for frame in tqdm(generator, total=video_info.total_frames):

        results = model(frame)[0]

        detections = Detections(
            xyxy=results.boxes.xyxy.cpu().numpy(),
            confidence=results.boxes.conf.cpu().numpy(),
            class_id=results.boxes.cls.cpu().numpy().astype(int)
        )

        frame = box_annotator.annotate(frame=frame, detections=detections)
        
        sink.write_frame(frame)