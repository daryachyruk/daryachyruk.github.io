'use strict';

const videoElement = document.querySelector('video');
const videoSelect = document.querySelector('select#videoSource');
const selectors = [ videoSelect];

function gotDevices(deviceInfos) {
  // Handles being called several times to update labels. Preserve values.
  const values = selectors.map(select => select.value);
  console.log("values are", values);
  // clear selectors queue
  selectors.forEach(select => {
    while (select.firstChild) {
      console.log("selectors queue - remove element", select.firstChild);
      select.removeChild(select.firstChild);
    }
  });

  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i];
    const option = document.createElement('option');
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === 'videoinput') {
      console.log("option.text = devInfo... ",option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`);
      option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
      console.log("option = ",option);

      videoSelect.appendChild(option);
    } else {}
  }

  selectors.forEach((select, selectorIndex) => {
    console.log ("selector is ", select,", index ", selectorIndex);
    if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
      select.value = values[selectorIndex];
    }
  });
}
console.log("nav media dev inumerate dev: ",navigator.mediaDevices.enumerateDevices());

navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);


function gotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;
  // Refresh button list in case labels have become available
  return navigator.mediaDevices.enumerateDevices();
}

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

function start() {
  if (window.stream) {
    window.stream.getTracks().forEach(track => {
      track.stop();
    });
  }
  const videoSource = videoSelect.value;
  console.log("videoSelect end val ", videoSelect.value);
  const constraints = {             //дописать!!!!!!!!!!!!!!
    video: {facingMode: "environment",deviceId: videoSource ? {exact: videoSource } : undefined}
  };
  navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError);
}

videoSelect.onchange = start;

start();
