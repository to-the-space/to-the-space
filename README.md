
# 🚀 TO THE SPACE 🚀

[![Netlify Status](https://api.netlify.com/api/v1/badges/3216b7c6-d5d6-4acd-bf0f-3ea1555228b0/deploy-status)](https://app.netlify.com/sites/nostalgic-poincare-9c2731/deploys)

[To The Space](https://www.to-the-space.space/) 는 장애물을 피해 로켓을 최대한 높이 발사하는 3D 웹 게임입니다.

![preview](../to-the-space/assets/preview.gif)

<br>

# 𝌞 Table of Contents

- [🚀 TO THE SPACE 🚀](#-to-the-space-)
- [𝌞 Table of Contents](#-table-of-contents)
- [🧑‍🚀 Motivation](#-motivation)
- [🕹 How to play](#-how-to-play)
- [🗓 Planning](#-planning)
- [⚙️ Tech Stack](#️-tech-stack)
- [❓Why?](#why)
  - [Vanilla JS](#vanilla-js)
  - [Webpack v5](#webpack-v5)
  - [Three JS](#three-js)
  - [MobX](#mobx)
  - [ES6 Class vs. Factory Function](#es6-class-vs-factory-function)
- [📝 Challenges & Solutions](#-challenges--solutions)
  - [Flash of unstyled content (FOUC)](#flash-of-unstyled-content-fouc)
- [📚 Summary](#-summary)

<br>

# 🧑‍🚀 Motivation

  - 최근 크게 관심을 받고 있는 Space X 우주 로켓 발사 에서 모티브를 얻어 관련 주제로 게임을 기획하게 되었습니다.
  - 이전부터 3D 기술을 사용하여 생동감과 입체감을 표현할 수 있는 웹 서비스를 만들고 싶다고 생각하였습니다. 이번 기획에서 3D 기술을 적용하기에 알맞다고 판단되어 3D 라이브러리를 이용한 미니 게임을 기획하였습니다.

<br>

# 🕹 How to play

- 5초 동안 스페이스바를 이용해 로켓 발사 에너지를 모을 수 있습니다.
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

    - Webpack 기본 설정
    - asset 수집
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
  - Firebase Realtime Database

<br>

# ❓Why?

## Vanilla JS

- 처음 3D 게임 프로젝트를 기획하면서 R**eact + react three fiber** 를 써야할지 V**anilla JS + Three JS** 를 써야 할 지 고민했습니다. **react three fiber** 를 쓰면 초기 개발 속도가 더 빠를 것이라고 예상하였지만, **Three JS** 를 객체지향적으로 구현하기에는 React 보다 Vanilla JS 가 더 알맞는 것 같다고 판단하였습니다. 또한, react 의 장점인 컴포넌트의 재사용, 가상 DOM 을 이용한 빠른 렌더링은 현재 진행하는 프로젝트에서는 큰 이점으로 작용될거 같지 않다고 판단하였습니다.
- 부트캠프 프론트 백앤드 과정을 하면서 여러 프레임워크와 라이브러리를 써볼수 있는 기회를 가졌었습니다. 이번 프로젝트는 지금까지 배운 기술들의 기초가 되는 **Vanilla JS** 로 개발을 하면서 기본기를 더 다질 수 있는 좋은 학습 기회가 될 것 같아 **Vanilla JS** 로 개발을 진행하기로 했습니다.

## Webpack v5

- 여러 모듈화된 객체들을 하나로 합치고 dependency 종속성 문제 등을 해결하기 위해 번들러를 사용하였습니다.
- 작은 프로젝트였던 만큼 따로 설정이 필요없는 parcel js 를 써볼까 고민도 했었지만 직접 번들러 설정을 해보며 학습할 수 있는 시간을 가지면 좋을거 같다고 판단했습니다.
- Webpack v4 이상 부터는 development, production 모드를 지원해서 production 모드에서 따로 코드 난독화, 압축, 최적화 등의 설정을 해줄수 있어 로딩 속도를 줄여주는 장점이 있었습니다. 여러 asset 을 사용했어야 했던 프로젝트인 만큼 로딩 시간에 대한 걱정이 있었기에 Webpack 을 사용하기로 결정했습니다.

## Three JS

- 3D 관련 라이브러리 중 Three JS 의 인지도가 제일 컸습니다. 처음 3D 라이브러리를 써보는 상황에서 여러 학습자료와 잘 정리되어 있는 공식문서는 큰 이점이라고 생각했습니다. 또한, 빠른 업데이트를 통해 유지보수가 잘 되어있는 라이브러리이기 때문에 Three JS 를 사용하기로 하였습니다.

## MobX

- 이번 프로젝트는 OOP 방식으로 구현을 진행했고 functional programming의 영향을 받은 redux를 사용하기 보다는 OOP 친화적인 MobX 를 사용하면 더 좋을 것 같다고 판단하였습니다.

## ES6 Class vs. Factory Function

- 여러 객체의 instance 를 만들어 개발을 진행했어야 했는데 Class 문법을 사용하면 prototype 시스템을 이용하여 Factory function 을 사용할 때 보다 메모리를 절감할 수 있다는 장점이 있었습니다.
- Class 문법을 쓰면서 encapsulation 이 어렵다는 단점이 있었습니다. 이 문제를 해결하기 위해 Class 문법의 private field (`#names`) 를 써서 이 문제를 해결할 수 있었습니다.

<br>

# 📝 Challenges & Solutions

## Flash of unstyled content (FOUC)

- 처음 웹페이지 로딩시 1-2 초 정도 css 가 적용되지 않은 html 요소들이 보이는 현상을 발견했습니다.
- 기본 css 로 styling 하였을때는 보이지 않던 현상이라 scss 관련 문제일 것이라고 판단했습니다.
- 구글링 과 공식문서를 찾아본 결과 scss webpack loader 설정을 할때 style-loader 를 사용하면 inline style 이 적용된다는것을 알 수 있었습니다. inline styling을 사용하면 브라우저에서 Javascript 가 먼저 parsing 이 되고 style 이 적용되기 때문에 FOUC 가 발생하는 것이었습니다.
- 이 문제를 해결하기 위해 MiniCssExtractPlugin 을 사용하여 css 요소들을 추출해 새로운 css 파일로 컴파일 시키는 방식을 사용하였습니다. 이 방법을 사용하여 병렬적으로 css 파일을 로딩시켜 FOUC 문제를 해결 할 수 있었습니다.

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

처음으로 개인 프로젝트를 진행하면서 많은 압박감과 두려움이 앞섰던거 같습니다. 실제로 기획 단계에서 부터 혼자 결정하고 자료를 찾아봐야하는 부분에서 많은 어려움을 느꼈습니다. 새로운 기술을 습득하는 부분에서도 피드백을 받지 못하고 스스로 문제를 해결해야 했었는데 이전에 팀 프로젝트를 했었던 때 보다 많은 시간이 걸렸습니다.

시간은 오래걸렸지만 직접 자료를 찾아보고 여러가지 시도를 해보는 과정에서 여러가지 지식을 습득할 수 있었고 고통스러웠지만 좋은 학습의 기회가 되었던 것 같습니다. 다른 사람에서 질문하여 쉽게 정답을 찾을때 보다 직접 정답을 찾아가는 과정에서 어렵게만 느껴졌던 새로운 지식 습득에 자신감을 얻을 수 있었습니다.
