import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class World {
  constructor(app) {
    this.app = app;

    this.scene = new THREE.Scene();

    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.clock = new THREE.Clock();

    this._addLight();
    this._addCamera();
    this._addControl();
    this._render();
    this._tick();

    window.addEventListener("resize", () => {
      this._onWindowResize();
    });
  }

  _addLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;

    this.scene.add(pointLight, ambientLight);
  }

  _addCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      100,
    );

    this.camera.position.z = 3;

    this.scene.add(this.camera);
  }

  _addControl() {
    this.controls = new OrbitControls(this.camera, this.app.dom.canvas);
    this.controls.enableDamping = true;
  }

  _render() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.app.dom.canvas,
      alpha: true,
      antialias: true,
    });

    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  _tick() {
    const elapsedTime = this.clock.getElapsedTime();

    this.controls.update();

    this.renderer.render(this.scene, this.camera);

    window.requestAnimationFrame(this._tick.bind(this));
  }

  _onWindowResize() {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;

    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
  }
}

export { World };
