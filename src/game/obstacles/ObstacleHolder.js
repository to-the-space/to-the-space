import * as THREE from "three";

const MeteorHolder = (obstacleNumber, Obstacle, target) => {
  const mesh = new THREE.Object3D();

  const obstacleArray = [];
  const obstaclePool = [];

  let counter = 0;

  for (let i = 0; i < obstacleNumber; i++) {
    const obstacle = Obstacle();
    obstaclePool.push(obstacle);
  }

  const spawn = () => {
    counter++;

    if (counter % 80 !== 0) {
      return;
    }

    for (let i = 0; i < obstacleNumber; i++) {
      const obstacle = obstaclePool.length ? obstaclePool.pop() : Obstacle();

      const minXAxis = -window.innerWidth * 0.5;
      const maxXAxis = window.innerWidth;

      const minYAxis = target.position.y + window.innerHeight;
      const maxYAxis = window.innerHeight;

      obstacle.mesh.position.x = minXAxis + Math.floor(Math.random() * maxXAxis);
      obstacle.mesh.position.y = minYAxis + Math.floor(Math.random() * maxYAxis);
      obstacle.mesh.position.z = 10;

      mesh.add(obstacle.mesh);
      obstacleArray.push(obstacle);
    }
  };

  const update = (targetPhysics, deltaTime) => {
    for (let i = 0; i < obstacleArray.length; i++) {
      const obstacle = obstacleArray[i];

      obstacle.mesh.position.x += Math.sin(deltaTime);
      obstacle.mesh.rotation.y += Math.random() * 0.1;
      obstacle.mesh.rotation.z += Math.random() * 0.1;

      const differentPosition = target.position.clone().sub(obstacle.mesh.position.clone());
      const distance = differentPosition.length();
      const maxDistance = target.position.y - 1000;

      if (distance < 50) {
        obstaclePool.unshift(obstacleArray.splice(i, 1)[0]);
        mesh.remove(obstacle.mesh);

        if (obstacle.name === "Coin") {
          targetPhysics.velocity.y += 50;
        }

        if (obstacle.name === "Meteor") {
          targetPhysics.velocity.y -= 150;
        }

        i--;
      }

      if (obstacle.mesh.position.y < maxDistance) {
        obstaclePool.unshift(obstacleArray.splice(i, 1)[0]);
        mesh.remove(obstacle.mesh);

        i--;
      }
    }
  };

  return Object.freeze({
    mesh,
    spawn,
    update,
  });
};

export default MeteorHolder;
