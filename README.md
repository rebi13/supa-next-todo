## Next.js 14 minimum knowledge

### Supabase serverClient

- createBrowserClient : 웹 브라우저가 Supabase의 client
- Next.js의 서버단에서의 로직이 Supabase의 client가 된다 -> 이를 서버 클라이언트라 부른다.
- 서버 측의 로직은 RouterHandler, 리액트 서버 컴포넌트(RSC), Middleware, SearverActions -> 4가지로 구분
- 이 4가지에 따라서 서버 클라이언트의 사용 방법이 약간 다르다
- 리액트 서버 컴포넌트에서는 분명히 서버에서 작동되는 로직이긴 하지만
- 이 단계에서는 쿠키를 조작할 수 없다
- 나머지 라우터 핸들러, 미들웨어,서버 액션에서는 쿠키를 조작할 수 있지만
- 쿠키를 조작하는 방법이 서로 다르다.
- 이 부분을 대응하기 위해 슈파베이스의 서버 클라이언트는 총 3가지를 만들거다
- 중복되는 코드를 다듬어서 한 두개 정도 클라이언트 만들거임
- 첫번째는 서버액션스 그담 라우터핸들러

- Router Handler: 쉽게 말해 서버의 REST API

  - app 폴더 내에 API 로 시작하는 앱 폴더를 생성해야 한다.
  - url로 호출하게 되면 기본적으로 get 요청을 한다.

- Middleware: 특정경로에 요청이 왔을 때 공통으로 처리해줄 수 있는 로직들을 담는다. (인증 및 권한 부여 등)

  - 앱 라우터에 수많은 페이지들을 공통적으로 로직을 하나 작성을 해주고 싶을 때.
  - 로그인 여부 확인해서 로그인 안되어있으면 메인 페이지로 리다이렉트를 시킨다든가...
  - 미들웨어에 한번만 작성하게 되면 미들웨어를 통과하면서 공통 처리가 가능
  - 경로 재작성, 봇 탐지, 로깅 및 분석, 리디렉션 등등..

- 서버 사이드 렌더링 -> 서버에서 리액트 컴포넌트를 바탕으로 html을 하나 만들어냈다. 즉 정적 파일을 찍어냈다. 그러고 브라우저로 던져지면 브라우저에서 이를 바탕으로 리액트 컴포넌트화 시킵니다. 리액트 컴포넌트로 동작할수있게끔 여러가지 조치를 취하는데 이를 하이드레이션이라는 과정이라 한다.
- 수분화 수분을 보충한다~ 라고 하는데 하이드레이션을 거치고 난 뒤에 리액트 컴포넌트로써 작동하게된다. response까지는 하나의 문서일 뿐임.
- 인터랙티브한 UI로 넘어가기 위해서는 하이드레이션 과정을 거쳐야 되고 그렇게 해서 리액트컴포넌트처럼 동작하기 위한 과정이 Next.js에서 브라우저에 넘어와서 이런 과정(하이드레이션)을 거치게 된다
- 전반적인 렌더링 과정은 서버 사이드 측, 그 다음에 클라이언트 사이드 측 해서 이 부분을 (SSR -> HTML) 서버사이드렌더링이라 하고, 하이드레이션 과정을 통해 리액트컴포넌트화 시키는 과정을 클라이언트 사이드 렌더링이라 한다.
- 서버 사이드 렌더링을 이루는 구성 요소가 리액트 서버 컴포넌트이다.
- 그다음에 클라이언트 컴포넌트도 들어간다.
- 하지만 클라이언트 사이드 렌더링에 들어가는 컴포넌트는 리액트 서버 컴포넌트를 제외한, 사실 그거 제외하면 리액트 클라이언트 컴포넌트밖에 없어요
- SSR / CSR 같지 않다.

- 서버 액션은 한 번 로직을 짰는데 서버에서 쓸 수 있고 클라이언트에서도 쓸 수 있다. 이건 Next.js 기 때문에 Next.js가 도와주는거라 보면 된다.

## 구글 로그인 구현 3단계

1. Google Cloud API Oauth 셋팅
2. Auth UI
3. Callback 처리 (PKCE)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
