
# 🚀 TO THE SPACE 🚀

[![Netlify Status](https://api.netlify.com/api/v1/badges/3216b7c6-d5d6-4acd-bf0f-3ea1555228b0/deploy-status)](https://app.netlify.com/sites/nostalgic-poincare-9c2731/deploys)

[To The Space](https://www.to-the-space.space/) 는 장애물을 피해 로켓을 최대한 높이 발사하는 3D 웹 게임입니다.

![preview](/assets/preview.gif)

<br>

# 𝌞 Table of Contents
- [🚀 TO THE SPACE 🚀](#-to-the-space-)
- [𝌞 Table of Contents](#-table-of-contents)
- [🧑‍🚀 Motivation](#-motivation)
- [🔗 Link](#-link)
    - [Deploy Site](#deploy-site)
    - [Github Repository](#github-repository)
- [🕹 How to play](#-how-to-play)
- [🗓 Planning](#-planning)
- [⚙️ Tech Stack](#️-tech-stack)
- [❓Why?](#why)
    - [Vanilla JS](#vanilla-js)
    - [Webpack v5](#webpack-v5)
    - [Three JS](#three-js)
    - [MobX](#mobx)
- [📝 Challenges & Solutions](#-challenges--solutions)
    - [Object Orient Programming (OOP)](#object-orient-programming-oop)
    - [Flash Of Unstyled Content (FOUC)](#flash-of-unstyled-content-fouc)
- [📚 Summary](#-summary)

<br>

# 🧑‍🚀 Motivation

이전부터 3D 기술을 사용하여 생동감과 입체감을 표현할 수 있는 웹 서비스를 만들고 싶다고 생각하였습니다. 최근 크게 관심을 받는 SpaceX 우주 로켓 발사에서 모티브를 얻어 관련 주제로 여러 사람이 즐길 수 있는 게임을 만들면 재미있을 거 같다고 생각하여 이번 프로젝트를 기획하게 되었습니다

<br>

# 🔗 Link

### Deploy Site
👉 https://to-the-space.space

### Github Repository
👉 https://github.com/to-the-space/to-the-space

<br>

# 🕹 How to play

- 5초 동안 스페이스 바를 이용해 로켓 발사 에너지를 모을 수 있습니다.
- 키보드 방향키를 이용하여 운석 장애물을 피하고 금을 획득할 수 있습니다.
- 운석에 닿게 되면 속도가 줄어듭니다.
- 금을 획득하면 속도가 증가합니다.
- 게임이 끝나면 10위 안에 든 플레이어들의 기록을 확인할 수 있습니다.

<br>

# 🗓 Planning

  <details>
    <summary>
      1 주차 09.27 - 10.03
    </summary>

    - 아이디어 기획 & 목업
    - 기술 스택 학습 (three js & cannon js)
  </details>

  <br>

  <details>
    <summary>
      2주차 10.04 - 10.10
    </summary>

    - Webpack 기본 설정 (entry, output, plugin, module)
    - asset(3D Model, texture) 수집
    - 개발 진행
  </details>

  <br>

  <details>
    <summary>
      3주차 10.11 - 10.15
    </summary>

    - Netlify 배포
    - readme 작성
    - 테스트 코드 작성
    - 코드 refactoring
  </details>

  <br>
  <br>

  # ⚙️ Tech Stack

  - Vanilla JS + Webpack
  - Three JS
  - Cannon JS
  - MobX
  - Firebase Database

<br>

# ❓Why?

### Vanilla JS

- 처음 3D 게임 프로젝트를 기획하면서 **React + react three fiber** 을 써야 할지 **Vanilla JS + Three JS** 을 써야 할지 고민했습니다. **react three fiber** 을 쓰면 초기 개발 속도가 더 빠를 것이라고 예상하였지만, **Three JS** 을 객체 지향적으로 구현하기에는 React보다 Vanilla JS가 더 알맞은 것 같다고 판단하였습니다. 또한, react의 장점인 컴포넌트의 재사용, 가상 DOM을 이용한 빠른 렌더링은 현재 진행하는 프로젝트에서는 큰 이점으로 작용할 거 같지 않다고 판단하였습니다.
- 부트캠프 교육과정인 프런트 백 앤드 과정을 거치면서 여러 프레임워크와 라이브러리를 써본 경험이 있습니다. 이번 프로젝트는 지금까지 배운 기술들의 기초가 되는 **Vanilla JS**을 이용하여 개발하면 기본기를 더 다질 수 있는 좋은 학습 기회가 될 것으로 판단했습니다.

### Webpack v5

- 여러 모듈화된 객체들을 하나로 합치고 dependency 종속성 문제 등을 해결하기 위해 번들러를 사용하였습니다.
- 작은 프로젝트였던 만큼 따로 설정이 필요 없는 parcel JS 을 써볼까 고민도 했었지만 직접 번들로 설정을 해보며 학습할 수 있는 시간을 가지면 좋을 거 같다고 판단했습니다.
- Webpack v4 이상부터는 development, production 모드를 지원해서 production 모드에서 따로 코드 난독화, 압축, 최적화 등의 설정을 해줄 수 있어 로딩 속도를 줄여주는 장점이 있었습니다. 여러 asset을 사용했어야 했던 프로젝트인 만큼 로딩 시간에 대한 걱정이 있었기에 Webpack 을 사용하기로 했습니다.

### Three JS

- 여러 3D 관련 라이브러리 중 Three JS의 인지도가 제일 컸습니다. 처음 3D 라이브러리를 써보는 상황에서 Three JS 와 관련된 여러 학습자료와 잘 정리된 공식문서는 큰 이점이라고 생각했습니다. 또한, 빠른 업데이트를 통해 유지보수가 잘 되어있는 라이브러리이기 때문에 해당 라이브러리를 선택했습니다.

### MobX

- 이전 React를 이용한 과제나 프로젝트를 진행하면서 Redux 를 사용하였는데 이번 프로젝트는 Vanilla JS 를 이용하여 OOP 설계방식으로 구현하려고 하였기에 절차지향 프로그래밍 방식에 어울리는 Redux를 사용하기 보다는 boiler plate가 적고 OOP 친화적인 MobX 를 사용하였습니다.

<br>

# 📝 Challenges & Solutions

### Object Orient Programming (OOP)

- 그동안 React Hooks를 이용한 함수형 프로그래밍 방식에 익숙해져 있었고 이론적으로는 공부했었지만, 프로젝트에 실제로 OOP를 이해하고 적용해본 적은 처음이라 직접 OOP 방식을 프로젝트에 적용하는 데 까다로웠습니다.
- 추상화를 위해 객체를 구현하면서 메소드의 기능을 보편적으로 사용할수 있도록 최소한의 정보를 담은 함수명을 작성하기 위해 노력하였습니다.
- 캡슐화가 필요한 변수나 메소드의 예상치 못한 변화를 방지하기 위해서 Factory function을 이용한 util 함수에서는 Object.freeze를 이용하였고, class 문법을 이용한 대부분의 함수에서는 private field를 적용하여 값의 일관성을 유지하였습니다.
### Flash Of Unstyled Content (FOUC)

- 처음 웹페이지 로딩 시 1-2초 정도 CSS 가 적용되지 않은 html 요소들이 랜더링되는 현상을 발견하였습니다.
- Scss webpack loader 설정시 style-loader를 사용하면 inline style이 우선 적용되는데 해당 프로젝트에서는 별도의 inline style이 없어 scss가 로딩되기 이전에 default style로 우선 랜더링되다는 사실을 발견하였습니다.
- 이 문제를 해결하기 위해 html 파일과 css 파일을 병렬적으로 로딩시킬수 있도록 MiniCssExtractPlugin을 사용하여 최초 번들링시 scss를 추출하여 새로운 css 파일로 컴파일 되고 시간차 랜더링 이슈를 해결하였습니다.

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

<br>

# 📚 Summary

처음으로 개인 프로젝트를 진행하면서 많은 압박감과 두려움이 앞섰던 것 같습니다. 실제로 기획 단계에서부터 혼자 결정하고 자료를 찾아봐야 하는 부분에서 많은 어려움을 느꼈습니다. 새로운 기술을 습득하는 부분에서도 피드백을 받지 못하고 스스로 문제를 해결해야 했었는데 이전에 팀 프로젝트를 했었던 때 보다 많은 시간이 걸렸습니다.

시간은 오래 걸렸지만 직접 자료를 찾아보고 여러 가지 시도를 해보는 과정에서 여러 가지 지식을 습득할 수 있었고 고통스러웠지만 좋은 학습의 기회가 되었던 것 같습니다. 다른 사람에서 질문하여 쉽게 정답을 찾을 때보다 직접 정답을 찾아가는 과정에서 어렵게만 느껴졌던 새로운 지식 습득에 자신감을 얻을 수 있었습니다.
