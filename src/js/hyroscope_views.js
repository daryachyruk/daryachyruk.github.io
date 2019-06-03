var horizontal_hyroscope = document.querySelector('.horizontal_hyroscope');
var vertical_hyroscope = document.querySelector('.vertical_hyroscope');


window.addEventListener("resize", function(){
  vertical_hyroscope.height = 0.9*window.innerHeight;
  horizontal_hyroscope.width = 0.9*window.innerWidth;
}, true);




