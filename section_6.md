# react-native-keyboard-aware-scrollview 직접 타이핑하기

- declare module로 타입이 없는 라이브러리의 타입 생성 가능
- 다른 사람의 타입을 참고하여 타입을 생성하면 편하다.

# connect-flash 직접 타이핑하기

- 일회성 메시지를 보낼수 있는 라이브러리
- type작성시 에러만 안나게 하는게 중요하다. 필요한 부분만 타이핑해서 넘겨주어라.
- 최소한의 타입만 정의한 후 확장해나가라.

```ts
declare module "connect-flash" {
  declare global {
    namespace Express {
      interface Request {
        flash(message: string): void;
        flash(event: string, message: string): void;
        flash(): { [key: string]: string[] };
      }
    }
  }

  import express = require("express");
  function falsh(): Express.RequestHandler;
  export default flash;
}
```
