다양한 플랫폼에서 활용할 수 있어서 axios가 좋다.

interface는 함수로도 활용이 가능하다.
ts-node -> 매번 javascript로 변환하는 과정을 편하게 해준다.

객체지향스러운건 interface

- 상속같은 기능을 지원한다.

const errorResponse = (error as AxiosError).response; -> catch에서 에러가 생길수 있어서 위험하다

- type guard를 사용하는것이 좋다.

선택 매개변수 뒤에는 필수매개변수가 올수없다. any를 넣는 수 밖에는 없다.
any 보단 unknown이 대부분의 상황에 조금 더 좋다.

제너릭을 활용해서 사용하는 사람이 타입을 지정할수 있는 선택지를 주는것이 좋다.
