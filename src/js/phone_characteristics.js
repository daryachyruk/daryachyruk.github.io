//import * as EXIF from "../exif";

var alph, bet, gam;
window.addEventListener('deviceorientation', function(event) {
  //console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
  //label_need.textContent = event.alpha + ' : ' + event.beta + ' : ' + event.gamma;
});

function getAlpha() {
  alph = window.addEventListener('deviceorientation', function(event) {
   return event.alpha;
  });
  return alph;
}



function getCameraParameters() {
  const constraints = {             //дописать!!!!!!!!!!!!!!
    video: {facingMode: "environment",deviceId: videoSource ? {exact: videoSource } : undefined}
  };
 // console.log(navigator.mediaDevices.getUserMedia(constraints));
  //console.log(EXIF.getAllTags("img"));
}





