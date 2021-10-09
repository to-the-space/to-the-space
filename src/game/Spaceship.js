    const spaceshipGltf = await gltfLoader.loadAsync(
      "/models/spaceship/scene.gltf",
    );
    spaceshipGltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
      }
    });
    this.spaceship = spaceshipGltf.scene;
    this.spaceship.position.set(0, -2.55, 0);

    const flameGltf = await gltfLoader.loadAsync("/models/flame/scene.gltf");
    flameGltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
      }
    });
    this.flame = flameGltf.scene;
    this.flame.scale.set(0.5, 0.1, 0.5);
    this.flame.position.set(0.5, -77, -0.2);

    const axesHelper = new THREE.AxesHelper(5);
    this.spaceship.add(axesHelper);
