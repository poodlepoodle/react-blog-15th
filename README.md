# 6주차 미션: React-Blog 📄

## 배포 링크

[Issues on Vercel Deploy](https://www.naver.com)

## Key Questions

> **Next.js를 사용하는 이유**

- 첫번째는 Next.js는 SSR을 지원하기 때문에 CRA방식에 비해 두가지 이점을 가지는데, 로딩창 없이 사전 렌더링된 html 파일을 우선 제공하여 더 나은 사용자 경험을 제공하고, SEO를 달성하기 쉽다는 점이다.
- 두번째로 Next.js에서는 pages 내부의 파일들은 code splitting이 자동화 되어, 초기의 로딩 자원을 줄여줍니다. 우리가 SPA를 개발할 때는 번들링 된 하나의 파일에 모든 로직이 들어가게 되는데, 한번에 사용자가 방문하지 않을 페이지들의 자원까지 모두 로드해야하기 떄문에 초기 자원의 낭비가 생기게 됩니다. 코드 스플리팅을 통해서 사용자가 현재 필요로 하는 것들만 lazy-load 하도록 해주면 앱의 전체 크기는 바뀌지 않지만, 초기 페이지 로드 시 필요한 코드만 전달받을 수 있게 되어 앱의 성능을 향상시켜줍니다.

참고

- https://geonlee.tistory.com/229
- https://velog.io/@jiseong/Next.js-%ED%85%8C%EC%8A%A4%ED%8A%B81

> **SEO란?**

- **Search Engine Optimization**의 약자로 검색 엔진 최적화를 뜻합니다. 프로덕트 웹 페이지가 사용자들에게 더 많이 노출되려면 검색 엔진의 작동방식에 맞추어 최적화된 컨텐츠를 제공할 필요가 있고, 이를 SEO라고 합니다.

- 구글이나 네이버같은 검색엔진은 사용자가 검색을 했을 때, 더 중요한 정보가 포함 될 가능성이 높은 페이지를 상단에 노출시키기 위해 html 문서를 파싱하는 웹 크롤러 봇을 운영하고 있습니다. 이 웹 크롤러 봇은 웹 상의 모든 웹페이지를 돌아다니며, 그 페이지가 무엇에 대한 페이지인지 파악하고 중요도를 선별합니다.

- 우리가 리액트 프로젝트로 CRA로 build해 SPA을 구현할 때는 오로지 CSR(Client Side Render)로 실행됩니다. CSR 방식에서는 html 파일이 처음에는 비어있고, js파일의 다운로드가 완료된 다음, 해당 js 파일이 dom을 빈 html 위에 그리기 시작하는 클라이언트(브라우저) 측의 렌더링이 일어나게 됩니다. 그럼 크롤러가 진입한 html 파일을 읽으면 처음에는 파일에 body tag만 들어있는 빈 깡통 상태로 존재하게 되어 따라서 봇에게 적절한 정보를 제공하지 못해 SEO를 달성할 수 없게 됩니다.

참고

- https://hyothorhyo.tistory.com/19
- https://velog.io/@bumsu0211%EA%B2%80%EC%83%89-%EC%97%94%EC%A7%84-%EC%B5%9C%EC%A0%81%ED%99%94SEO-%EA%B0%9C%EB%85%90%EC%A0%81-%EC%9D%B4%ED%95%B4

> **성능 최적화를 위해 사용한 방법**

<!-- next-optimized-images -->

> **전반적인 협업 과정**

![R1280x0](https://user-images.githubusercontent.com/6462456/169550334-371fd469-b119-42ff-9c0c-043912cbf595.png)
_출처 : https://devlog-h.tistory.com/6_

origin - 현재 vercel을 통해 배포된 branch
|
develop - 현재 개발중인 branch
|
feature/{기능} - 현재 한명이 구현중인 기능의 branch

- feature/{기능} 형태로 각자 branch에서 작업한 후  
  feature/{기능} -(기능 일부 구현)-> develop -(작업 완료)->  
  origin 으로 request/merge를 진행하여 배포를 하는 방식으로 협업을
  진행했습니다.
