import cv2

video_path = "test/video.mp4"

# Abre o arquivo de vídeo
cap = cv2.VideoCapture(video_path)

# Obtém o codec de vídeo do arquivo
codec = int(cap.get(cv2.CAP_PROP_FOURCC))

# Converte o valor numérico para caracteres ASCII
codec = chr(codec & 0xFF) + chr((codec >> 8) & 0xFF) + chr((codec >> 16) & 0xFF) + chr((codec >> 24) & 0xFF)

print(f"Codec de vídeo: {codec}")

# Fecha o arquivo de vídeo
cap.release()