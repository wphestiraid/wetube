const recorderContainer = document.getElementById('jsRecordContainer');
const recordButton = document.getElementById('jsRecordButton');
const videoPreview = document.getElementById('jsVideoPreview');

let streamObject;

const handleVideoData = event => {
  console.log(event);
};

const startVideoRecording = () => {
  const videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener('dataavailable', handleVideoData);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    recordButton.innerHTML = 'Stop recording';
    streamObject = stream;
    startVideoRecording();
  } catch (error) {
    console.log(error);
    recordButton.innerHTML = "😟 Can't record";
    recordButton.removeEventListener('click', getVideo);
  }
};

function init() {
  recordButton.addEventListener('click', getVideo);
}

if (recorderContainer) {
  init();
}
