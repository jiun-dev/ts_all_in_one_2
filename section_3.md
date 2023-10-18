- VFC가 현재는 사라지고 FC로 통일되었음
- initialState에 함수를 넣을 수 있다.
  - lazy init
  - 복잡한 함수일때 한번만 호출하면서 성능도 신경쓰기 위해서 사용한다.

### useState분석

```ts
setWord((prev) => {
  return prev + "1";
});
```

이런식의 사용도 가능하다.

- 함수의 리턴이 Promise로 감싸져있으면 await을 붙일수 있고 이외의 상황에선 의미가 없다.

### 브랜딩기법

- 원시값에도 Type을 부여하고 싶을때 브랜딩 기법을 활용하면 좋다
  - ex) 달러,유로,원

### useCallback

- React18 버전에서는 useCallback이 Function타입으로 변하면서 매개변수랑 리턴값이 타이밍이 되어있지 않다.
- e: FormEvent<HTMLFormElement>
- e: React.ChangeEvent<HTMLInputElement>

### useRef

- mutableRef는 값을 컴포넌트에서 저장하고 있는 용도.
- jsx에 연결할 용도로 ref를 만든 경우 제너릭을 채워주어야 한다.

### useEffect분석

### class컴포넌트 타이핑
