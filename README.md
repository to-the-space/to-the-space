
# π TO THE SPACE π

[![Netlify Status](https://api.netlify.com/api/v1/badges/3216b7c6-d5d6-4acd-bf0f-3ea1555228b0/deploy-status)](https://app.netlify.com/sites/nostalgic-poincare-9c2731/deploys)

[To The Space](https://www.to-the-space.space/) λ μ₯μ λ¬Όμ νΌν΄ λ‘μΌμ μ΅λν λμ΄ λ°μ¬νλ 3D μΉ κ²μμλλ€.

<br>
<br>


![preview](/assets/preview.gif)

<br>

# π Table of Contents
- [π§βπ Motivation](#-motivation)
- [π Link](#-link)
- [πΉ How to play](#-how-to-play)
- [π Planning](#-planning)
- [βοΈ Tech Stack](#οΈ-tech-stack)
- [π Log](#-log)
- [π Summary](#-summary)

<br>

# π§βπ Motivation

### Why 3D Game?
μ΄μ λΆν° 3D κΈ°μ μ μ¬μ©νμ¬ μλκ°κ³Ό μμ²΄κ°μ ννν  μ μλ μΉ μλΉμ€λ₯Ό λ§λ€κ³  μΆλ€κ³  μκ°νμμ΅λλ€. μ΅κ·Ό ν¬κ² κ΄μ¬μ λ°λ SpaceX μ°μ£Ό λ‘μΌ λ°μ¬μμ λͺ¨ν°λΈλ₯Ό μ»μ΄ κ΄λ ¨ μ£Όμ λ‘ μ¬λ¬ μ¬λμ΄ μ¦κΈΈ μ μλ κ²μμ λ§λ€λ©΄ μ¬λ―Έμμ κ±° κ°λ€κ³  μκ°νμ¬ To The Space νλ‘μ νΈλ₯Ό κΈ°ννκ² λμμ΅λλ€.

### Why Vanilla JS?
μ΄κΈ°μλ Reactμ μ¬μ©λ κ³ λ €νμμ§λ§, μ΄λ² νλ‘μ νΈλ₯Ό κΈ°ννλ©΄μ Reactλ₯Ό μ΄μ©νμ λ κ°μ§ μ μλ μ₯μ μΈ μ¬μ¬μ© κ°λ₯ν μ»΄ν¬λνΈ νΉμ κ°μ DOMμ μ΄μ©ν λΉ λ₯Έ λ λλ§μ λ§μ΄ νμ©λμ§ μμ κ²μ΄λΌκ³  νλ¨νμμ΅λλ€. λν, μ΄μ λΆν° UI νλ μμν¬λ λΌμ΄λΈλ¬λ¦¬ μμ΄ Vanilla JSλ§μ μ¬μ©νμ¬ νλ‘μ νΈλ₯Ό λ§λ€μ΄ λ³΄κ³  μΆμκΈ°μ Javascriptμ κ°μ₯ κΈ°μ΄κ° λλ Vanilla JSλ₯Ό μ΄μ©νμ¬ κΈ°μ΄μ μΈ μ§μμ λ€μ νλ² νμ΅νλ©΄ μ’μ κ±° κ°λ€κ³  μκ°νμ΅λλ€. μ€μ λ‘ μ΄μ μ μ¬μ©νμλ νλ μμν¬λ λΌμ΄λΈλ¬λ¦¬λ€μ λν μ₯λ¨μ λ μ’ λ λͺννκ² μ μ μλ κ²½νμ΄ λ  κ²μΌλ‘ μκ°νμλλ° Vanilla JSλ₯Ό μ΄μ©νλ©΄μ prototype, closure, this λ± λ§μ κ°λμ λν΄ λ€μ νλ² κ³΅λΆν  μ μμλ κΈ°νλ₯Ό κ°μ§ μ μμ΄ μ’μμ΅λλ€.

### Why Three JS?
3Dλ₯Ό λΈλΌμ°μ μ λ λλ§νκ³  κ΅¬λλκ² νλ €λ©΄ Javascript APIμΈ webGLλ§ μ΄μ©ν΄μ μ½λλ₯Ό μμ±ν  μ μμμ§λ§, Scene, κ΄μ, κ·Έλ¦Όμ, λ¬Όμ²΄ λ±μ μ΄μ©ν 3μ°¨μ μΈκ³λ₯Ό κ΅¬ννλ €λ©΄ λ§μ μμ μ½λλ₯Ό μμ±ν΄μΌ νκ³  μ½λκ° λ§€μ° λ³΅μ‘ν΄μ§κΈ° μ¬μ°λ―λ‘ μ μ§λ³΄μκ° μ΄λ ΅λ€λ μ μμ webGLμ μ¬μ©νλ Three JSλ₯Ό μ΄μ©νμ¬ 3D μμλ€μ λ³΄λ€ μ§κ΄μ μΌλ‘ μ²λ¦¬ν  μ μλλ‘ νμμ΅λλ€.

<br>

# π Link

### Deploy Site
π https://to-the-space.space

### Github Repository
π https://github.com/to-the-space/to-the-space

<br>

# πΉ How to play

- 5μ΄ λμ μ€νμ΄μ€ λ°λ₯Ό μ΄μ©ν΄ λ‘μΌ λ°μ¬ μλμ§λ₯Ό λͺ¨μ μ μμ΅λλ€.
- ν€λ³΄λ λ°©ν₯ν€λ₯Ό μ΄μ©νμ¬ μ΄μ μ₯μ λ¬Όμ νΌνκ³  κΈμ νλν  μ μμ΅λλ€.
- μ΄μμ λΏκ² λλ©΄ μλκ° μ€μ΄λ­λλ€.
- κΈμ νλνλ©΄ μλκ° μ¦κ°ν©λλ€.
- κ²μμ΄ λλλ©΄ 10μ μμ λ  νλ μ΄μ΄λ€μ κΈ°λ‘μ νμΈν  μ μμ΅λλ€.

<br>

# π Planning

### 1 μ£Όμ°¨ 09.27 - 10.03
  - μμ΄λμ΄ κΈ°ν & λͺ©μ
  - κΈ°μ  μ€ν νμ΅ (Three JS & Cannon JS)

### 2μ£Όμ°¨ 10.04 - 10.10
  - Webpack κΈ°λ³Έ μ€μ  (entry, output, plugin, module)
  - Assets(3D Model, texture) μμ§
  - κ°λ° μ§ν

### 3μ£Όμ°¨ 10.11 - 10.15
  - Netlify λ°°ν¬
  - README μμ±
  - νμ€νΈ μ½λ μμ±
  - μ½λ refactoring

  <br>

  # βοΈ Tech Stack

  - Vanilla JS + Webpack
  - Three JS
  - Cannon JS
  - MobX
  - SCSS
  - Firebase Database

<br>

# π Log

### Object Orient Programming (OOP)

κ·Έλμ React Hooksλ₯Ό μ΄μ©ν ν¨μν νλ‘κ·Έλλ° λ°©μμ μ΅μν΄μ Έ μμκ³  μ΄λ‘ μ μΌλ‘λ κ³΅λΆνμμ§λ§, νλ‘μ νΈμ μ€μ λ‘ OOPλ₯Ό μ΄ν΄νκ³  μ μ©ν΄λ³Έ μ μ μ²μμ΄λΌ μ§μ  OOP λ°©μμ νλ‘μ νΈμ μ μ©νλ λ° κΉλ€λ‘μ μ΅λλ€. ν΄λΉ Challengeλ₯Ό ν΄κ²°νκΈ° μν΄ OOP λ°©μμμ μ€μν λ κ°μ§ κ°λμ λν΄ νλ‘μ νΈμ μ μ©νλ €κ³  λΈλ ₯νμμ΅λλ€. μ²« λ²μ§Έλ‘λ μΆμνλ₯Ό μν΄ κ°μ²΄λ₯Ό κ΅¬ννλ©΄μ λ©μλμ κΈ°λ₯μ λ³΄νΈμ μΌλ‘ μ¬μ©ν  μ μλλ‘ μ΅μνμ μ λ³΄λ₯Ό λ΄μ ν¨μλͺμ μμ±νκΈ° μν΄ λΈλ ₯νμμ΅λλ€. λ λ²μ§Έλ‘, μΊ‘μνκ° νμν λ³μλ λ©μλμ μμμΉ λͺ»ν λ³νλ₯Ό λ°©μ§νκΈ° μν΄μ Factory functionμ μ΄μ©ν util ν¨μμμλ `Object.freeze`λ₯Ό μ΄μ©νμκ³ , class λ¬Έλ²μ μ΄μ©ν λλΆλΆ ν¨μμμλ private fieldλ₯Ό μ μ©νμ¬ κ°μ μΌκ΄μ±μ μ μ§νμμ΅λλ€.

<details>
  <summary>μμ μ½λ</summary>

```js
class Model {
  #defaultMaterial = new CANNON.Material("default");

  constructor(model, scene, physicsWorld) {
    this.model = model;
    this.scene = scene;
    this.physicsWorld = physicsWorld;
  }

  setScale(size) {
    this.model.scale.set(size, size, size);
  }

  setPosition(x, y, z) {
    this.model.position.set(x, y, z);
  }

  setRotation(x, y, z) {
    this.model.rotation.set(x, y, z);
  }

  createPhysicsBox(width, height, depth) {
    const boxShape = new CANNON.Box(new CANNON.Vec3(width, height, depth));

    this.boxBody = new CANNON.Body({
      mass: 1,
      position: new CANNON.Vec3(0, 0, 0),
      shape: boxShape,
      material: this.#defaultMaterial,
    });

    this.boxBody.position.copy(this.model.position);
    this.boxBody.quaternion.copy(this.model.quaternion);
    this.physicsWorld.addBody(this.boxBody);
  }

  addToScene() {
    this.scene.add(this.model);
  }

  removeFromScene() {
    this.scene.remove(this.model);
  }
}
```

</details>

<br>

### λ°μν μΉ λμμΈ (RWD)

μ΄λ€ νκ²½μμλ  κ²μμ΄ κ΅¬λλ  μ μλλ‘ λ°μν μΉ λμμΈμ λμνμμ΅λλ€. κΈ°λ³Έμ μΌλ‘ `canvas` μμλ 300 * 150ν½μμ΄μ§λ§ CSS μ μ²΄ μμμ `margin`κ³Ό `padding`μ 0μΌλ‘ λκ³  `body` μμμ λμ΄μ λλΉλ₯Ό 100%λ‘ μ£Όμ΄ `canvas`κ° νλ©΄ μ μ²΄λ₯Ό μ°¨μ§ν  μ μλλ‘ νμμ΅λλ€. λ€λ§, μ΄λ κ² `canvas`κ° νλ©΄ μ μ²΄λ₯Ό μ°¨μ§νκ² λλ©΄ 3D κ°μ²΄λ€μ΄ λ λλ§ λ νλ©΄μ λ°λΌ λμ΄λκ±°λ μ€μ΄λλ νμμ΄ μμκ³ , μ νμ§λ‘ μΈν΄ κ°μ²΄λ€μ΄ κΉ¨μ§κ±°λ νλ €μ§λ νμμ΄ λ°κ²¬λμμ΅λλ€. μ΄ λ¬Έμ λ₯Ό ν΄κ²°νκΈ° μν΄ μ°½μ΄ λ³νν  λλ§λ€ Camera aspect(λΉμ¨) μμ±μ `canvas` νλ©΄μ λ§μΆ°μ£Όκ³  `renderer.setSize` μ `renderer.setPixelRatio` λ λ©μλλ₯Ό μ΄μ©νμ¬ ν΄μλλ₯Ό λ§μΆ°μ£Όλ μμμ νμμ΅λλ€. λν, PC νλ©΄μμλ ν€λ³΄λλ₯Ό μ‘°μνμ¬ λ‘μΌ 3D κ°μ²΄λ₯Ό μ‘°μν  μ μλλ‘ "keydown" κ³Ό "keyup" μ΄λ²€νΈλ₯Ό μ¬μ©νμκ³  λͺ¨λ°μΌ νκ²½μμλ "touchstart" κ³Ό "touchend" μ΄λ²€νΈλ₯Ό listenerμ λ±λ‘ν  μ μλλ‘ λΆκΈ° μ²λ¦¬νμμ΅λλ€.

<details>
  <summary>ν΄μλ λ§μΆ€ μμ μ½λ</summary>

```js
onWindowResize() {
  this.sizes.width = window.innerWidth;
  this.sizes.height = window.innerHeight;

  this.camera.aspect = this.sizes.width / this.sizes.height;
  this.camera.updateProjectionMatrix();

  this.renderer.setSize(this.sizes.width, this.sizes.height);
  this.renderer.setPixelRatio(window.devicePixelRatio);
}
```

</details>

<br>

<details>
  <summary>μ‘°μ μμ μ½λ</summary>

```js
const currentDeviceType = detectDevice();

if (currentDeviceType === "desktop") {
  document.addEventListener("keydown", (event) => this.#onKeyDown(event), false);
  document.addEventListener("keyup", (event) => this.#onKeyUp(event), false);
} else {
  const canvas = document.querySelector("canvas.webgl");

  canvas.addEventListener("touchstart", (event) => this.#onTouchStart(event), false);
  canvas.addEventListener("touchend", (event) => this.#onTouchEnd(event), false);
}
```

</details>

<br>

### Flash Of Unstyled Content (FOUC)

μ²μ μΉνμ΄μ§ λ‘λ© μ 1~2μ΄ μ λ CSSκ° μ μ©λμ§ μμ html μμλ€μ΄ λ λλ§ λλ νμμ λ°κ²¬νμμ΅λλ€. λ¦¬μμΉλ₯Ό ν΄λ³Έ κ²°κ³Ό scss webpack loader μ€μ  μ `style-loader`λ₯Ό μ¬μ©νλ©΄ scssνμΌμ CSS styleμ Javascript λ²λ€μ ν¬ν¨νκΈ° λλ¬Έμ λΈλΌμ°μ κ° Javascriptλ₯Ό νμ±νκΈ° μ΄μ  htmlμ inline styleμ μ°μ  μ μ©νλλ° ν΄λΉ νλ‘μ νΈμμλ λ³λμ inline styleμ΄ μμ΄ Javascriptκ° νμ±λκ³  styleμ΄ μ΄μ μ default styleλ‘ μ°μ  λ λλ§ λλ€λ μ¬μ€μ μ μ μμμ΅λλ€. μ΄ λ¬Έμ λ₯Ό ν΄κ²°νκΈ° μν΄ `MiniCssExtractPlugin`μ μ¬μ©νμ¬ SCSSνμΌμ λ³λμ CSSλ‘ μΆμΆνμμ΅λλ€. μ΄λ κ² νμ¬ webpackμΌλ‘ μ νλ¦¬μΌμ΄μμ λΉλ μ htmlνμΌ `<head>` νκ·Έ μμ μΆμΆλ stylesheetλ₯Ό ν¬ν¨νκ³ , λΈλΌμ°μ κ° render treeλ₯Ό νλ©΄μ μ΅μ΄ λ λλ§ν  λ μλλ styleμ΄ μ μ©λ μνλ‘ λ λλ§νλλ‘ νμ¬ FOUC μ΄μλ₯Ό ν΄κ²°ν  μ μμμ΅λλ€.

<details>
  <summary>μμ μ½λ</summary>

```js
//before
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

// after
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          process.env.NODE_ENV !== "production"
           ? "style-loader"
           : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
```

</details>

<br>

# π Summary

μ²μμΌλ‘ κ°μΈ νλ‘μ νΈλ₯Ό μ§ννλ©΄μ λ§μ μλ°κ°κ³Ό λλ €μμ΄ μμ°λ κ² κ°μ΅λλ€. μ€μ λ‘ κΈ°ν λ¨κ³μμλΆν° νΌμ κ²°μ νκ³  μλ£λ₯Ό μ°Ύμλ΄μΌ νλ λΆλΆμμ λ§μ μ΄λ €μμ λκΌμ΅λλ€. μλ‘μ΄ κΈ°μ μ μ΅λνλ λΆλΆμμλ νΌλλ°±μ λ°μ§ λͺ»νκ³  μ€μ€λ‘ λ¬Έμ λ₯Ό ν΄κ²°ν΄μΌ νμλλ° μ΄μ μ ν νλ‘μ νΈλ₯Ό νμλ λ λ³΄λ€ λ§μ μκ°μ΄ κ±Έλ Έμ΅λλ€.

μκ°μ μ€λ κ±Έλ Έμ§λ§ μ§μ  μλ£λ₯Ό μ°Ύμλ³΄κ³  μ¬λ¬ κ°μ§ μλλ₯Ό ν΄λ³΄λ κ³Όμ μμ μ¬λ¬ κ°μ§ μ§μμ μ΅λν  μ μμκ³  κ³ ν΅μ€λ¬μ μ§λ§ μ’μ νμ΅μ κΈ°νκ° λμλ κ² κ°μ΅λλ€. λ€λ₯Έ μ¬λμμ μ§λ¬Ένμ¬ μ½κ² μ λ΅μ μ°Ύμ λλ³΄λ€ μ§μ  μ λ΅μ μ°Ύμκ°λ κ³Όμ μμ μ΄λ ΅κ²λ§ λκ»΄μ‘λ μλ‘μ΄ μ§μ μ΅λμ μμ κ°μ μ»μ μ μμμ΅λλ€.
