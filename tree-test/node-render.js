// 初期化
var scene = new THREE.Scene();
var camera  = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 500;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 四角を作る
function square(x, y, z){
  var geometry = new THREE.PlaneGeometry(100, 100);
  // geometry.id = id;
  var material = new THREE.MeshBasicMaterial({color: 0x00ffff});
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  scene.add(mesh);
}

// 線を引く
function line(x1, y1, z1, x2, y2, z2, color){
  var linematerial = new THREE.LineBasicMaterial({
    color: color
  });
  var linegeometry = new THREE.Geometry();
  linegeometry.vertices.push(
    new THREE.Vector3(x1, y1, z1),
    new THREE.Vector3(x2, y2, z2)
  );
  var line = new THREE.Line(linegeometry, linematerial);
  scene.add(line);
}

square(-100, 200, 0);
square(100, 200, 0);
line(-50, 200, 0, 50, 200, 0, 0xffffff);
line(0, 200, 0, 0, 50, 0, 0xffffff);
square(0, 0, 0);

var render = function(){renderer.render(scene, camera);};
render();
