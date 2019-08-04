const recorderContainer = document.getElementById('jsRecordContainer');
const recordButton = document.getElementById('jsRecordButton');
const videoPreview = document.getElementById('jsVideoPreview');

const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
  } catch (error) {
    console.log(error);
    recordButton.innerHTML = "😟 Can't record";
    recordButton.removeEventListener('click', startRecording);
  }
};

function init() {
  recordButton.addEventListener('click', startRecording);
}

if (recorderContainer) {
  init();
}
