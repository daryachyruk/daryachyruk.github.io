//captureVideoButton =
screenshotButton = document.querySelector('.screenshot-button');
cubeClick = document.querySelector(".d_cube_help");
video = document.querySelector('video');

canvas = document.createElement('canvas');
screenshotButton.textContent = "Take screenshot";

var imgCounter = 0;

screenshotButton.onclick = cubeClick.onclick = function() {
  if (this.imgCounter < 8){
    canvas.width = 0.9*window.innerWidth;
    canvas.height = 0.9*window.innerWidth;
    //  resize_canvas.getContext('2d').drawImage(orig_src, 0, 0, width, height);
    var y_offset = 0.1* window.innerWidth;//0.1*window.innerHeight;
    var x_offset = (window.innerHeight-0.8*window.innerWidth)/2;//(window.innerWidth-0.8*window.innerHeight)/2;
    console.log("wid: ",window.innerWidth,", 09H: ",0.8*window.innerHeight,", x offset: ",x_offset,", y offset: ",y_offset);
    canvas.getContext('2d').drawImage(video, x_offset, y_offset, 0.8*window.innerWidth,0.8*window.innerWidth);
    canvas.id = 'screenshot_img';

    // Other browsers will fall back to image/png
   // let div = document.getElementById('image-container');
    let img = document.createElement("img");
    img.className = 'image';
   // div.appendChild(img);

    img.src = canvas.toDataURL('src/png');

  }
  //var counter = childCount();

};

function handleSuccess(stream) {
  screenshotButton.disabled = false;
  video.srcObject = stream;
}



