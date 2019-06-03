var hex_height = 3*Math.sqrt(3)/2*1.2;
init();
animate();

var camera, scene, renderer, cube;

function init() {
  camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1.7, 1000 );
  camera.position.z = 0;
  camera.position.y = 0;
  camera.position.x = 0;
    console.log("3d camera fov is",camera.fov);
    console.log("3d camera position z", camera.position.z);
  controls = new THREE.DeviceOrientationControls( camera );

  camera.position.z = 0;
  camera.position.y = 0;
  camera.position.x = 0;
  scene = new THREE.Scene();
  container = document.querySelector(".video_container");

 var geometry = new THREE.BoxBufferGeometry( 3, 3, 3 );
 var material = new THREE.MeshBasicMaterial({color: 0x00FFFF, wireframe: true});
 cube = new THREE.Mesh(geometry,material);
 scene.add(cube);


  var material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff} );

   hexahedron = new THREE.Geometry();
  hexahedron.vertices.push(new THREE.Vector3(-1.5,-1.5,hex_height));
  hexahedron.vertices.push(new THREE.Vector3(-1.5,1.5,hex_height));
  hexahedron.vertices.push(new THREE.Vector3(1.5,1.5,hex_height));
  hexahedron.vertices.push(new THREE.Vector3(1.5,-1.5,hex_height));
   hexahedron.vertices.push(new THREE.Vector3(-1.5,-1.5,hex_height)); //main plane (then rotation right)

  hexahedron.vertices.push(new THREE.Vector3(1.5,-1.5,hex_height));
  hexahedron.vertices.push(new THREE.Vector3(1.5,1.5,hex_height));
  hexahedron.vertices.push(new THREE.Vector3(3,1.5,0));
  hexahedron.vertices.push(new THREE.Vector3(3,-1.5,0));
   hexahedron.vertices.push(new THREE.Vector3(1.5,-1.5,hex_height)); // plane 2

  hexahedron.vertices.push(new THREE.Vector3(3,-1.5,0));
  hexahedron.vertices.push(new THREE.Vector3(3,1.5,0));
  hexahedron.vertices.push(new THREE.Vector3(1.5,1.5,-hex_height));
  hexahedron.vertices.push(new THREE.Vector3(1.5,-1.5,-hex_height));
  hexahedron.vertices.push(new THREE.Vector3(3,-1.5,0));            //plane 3

  hexahedron.vertices.push(new THREE.Vector3(1.5,-1.5,-hex_height));
  hexahedron.vertices.push(new THREE.Vector3(1.5,1.5,-hex_height));
  hexahedron.vertices.push(new THREE.Vector3(-1.5,1.5,-hex_height));
  hexahedron.vertices.push(new THREE.Vector3(-1.5,-1.5,-hex_height));
  hexahedron.vertices.push(new THREE.Vector3(1.5,-1.5,-hex_height)); //plane 4
  //
  hexahedron.vertices.push(new THREE.Vector3(-1.5,-1.5,-hex_height));
  hexahedron.vertices.push(new THREE.Vector3(-1.5,1.5,-hex_height));
  hexahedron.vertices.push(new THREE.Vector3(-3,1.5,0));
  hexahedron.vertices.push(new THREE.Vector3(-3,-1.5,0));
  hexahedron.vertices.push(new THREE.Vector3(-1.5,-1.5,-hex_height)); // plane 5
  //
  hexahedron.vertices.push(new THREE.Vector3(-3,-1.5,0));
  hexahedron.vertices.push(new THREE.Vector3(-3,1.5,0));
  hexahedron.vertices.push(new THREE.Vector3(-1.5,1.5,hex_height));
  hexahedron.vertices.push(new THREE.Vector3(-1.5,-1.5,hex_height));
  hexahedron.vertices.push(new THREE.Vector3(-3,-1.5,0));
  //
   line = new THREE.Line( hexahedron, material2 );
  //
  scene.add(line);

  renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.domElement.className = 'd_cube_help';
  container.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize, false );
}

function animate() {

  window.requestAnimationFrame( animate );
  controls.update();
  renderer.render( scene, camera );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );

}




