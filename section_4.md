# redux

- named export 방식
- 선언과 사용의 이름이 같아야한다.
- initialState에 상태의 기본값이 데이터로 저장되어있다.

## redux는 상태를 변경해주는 역할

- 상태가 존재하고 그 상태를 변경하는 action을 호출(dispatch)해야한다.

## reducer는 상태를 바꾸는 규칙

- 함수 매개변수state, action
- typeof state가 가장 좋지만 null같은 경우 때문에 안되는 경우 state를 따로 type으로 만들어야함

## middleware

- action이 store에 전달되기 전에 역할을 한다.

## thunk middleware

- action은 원래 객체꼴이다. action을 함수형태로 만들어줄수있다.
  - 비동기를 지원할 수 있게된다.

# react-redux

- return값은 타입추론이 되기 때문에 state에만 RootState를 넣어주는게 코드양을 줄일 수 있다.
