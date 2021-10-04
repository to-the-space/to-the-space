import * as THREE from "three";

class Stars {
  constructor(app) {
    this.app = app;

    this.loadStar();
  }

  loadStar() {
    const textureLoader = new THREE.TextureLoader(this.app.loadingManager);
    const particleTexture = textureLoader.load("/textures/stars/star.png");

    const particlesGeometry = new THREE.BufferGeometry();

    const count = 3000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial();
    particlesMaterial.size = 0.03;
    particlesMaterial.sizeAttenuation = true;
    particlesMaterial.transparent = true;
    particlesMaterial.alphaMap = particleTexture;
    particlesMaterial.depthWrite = false;
    particlesMaterial.blending = THREE.AdditiveBlending;

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.app.world.scene.add(particles);
  }

  fallStar() {}
}

export { Stars };
