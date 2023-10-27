### never

- never인지 아닌지를 판별하는 타입

```ts
이렇게 작성해야 의도한 대로 true가 나온다.
type IsNever<T> = [T] extends never ? true : false;
```

- type매개변수 + union이 만나 분배법칙의 실행
  - never 자체가 union이다.

### 타입스크립트 컴파일러가 컨디셔널 타입을 마지막에 계산한다.

- 지연평가

### 모듈 시스템 정리

```ts
import {}
export default {}
declare module "hello" {}
// import, export 가 바깥에 선언되어 있어야 모듈이다.
```

- commomjs

  - node.js의 과거 표준

- UMD

  - EMS, commonjs, AMD세가지 모듈시스템을 전부 지원

- ESM

  - ts의 표준이다.

- esmodule interop -> true를 통해 ESM방식으로 import가능
