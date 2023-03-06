// inicial setup

python -m venv venv
source venv/scripts/activate

python -m pip install --upgrade setuptools
python.exe -m pip install --upgrade pip

pip install -q numpy

pip install -q -r requirements.txt

// treinar modelo

yolo task=detect mode=train model=yolov8s.pt data="{dataset}/data.yaml" epochs=30

- se der algum erro mudar os paths para C: etc...

// testar modelo yolov8

yolo task=detect mode=predict model="../../runs/detect/{train}/weights/best.pt" data="{dataset}/data.yaml"

// ByteTrack setup

git clone https://github.com/ifzhang/ByteTrack.git