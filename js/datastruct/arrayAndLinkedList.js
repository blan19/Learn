/*

물론 연결 리스트가 항상 배열보다 우월하지는 않습니다. 
그렇지 않았다면 모든 사람들이 연결 리스트만 사용했겠죠.

연결 리스트의 가장 큰 단점은 번호(인덱스)만 사용해 요소에 쉽게 접근할 수 없다는 점입니다. 
배열을 사용하면 arr[n]처럼 번호 n만으로도 원하는 요소에 바로 접근할 수 있습니다. 
그러나 연결 리스트에선 N번째 값을 얻기 위해 첫 번째 항목부터 시작해 N번 next로 이동해야 합니다.

그런데 중간에 요소를 삽입하거나 삭제하는 연산이 항상 필요한 것은 아닙니다. 
이럴 땐 순서가 있는 자료형 중에 큐(queue)나 데크(deque)를 사용할 수 있습니다. 
데크를 사용하면 양 끝에서 삽입과 삭제를 빠르게 수행할 수 있습니다.

위에서 구현한 연결 리스트는 아래와 같은 기능을 더해 개선할 수 있습니다.

이전 요소를 참조하는 프로퍼티 prev를 추가해 이전 요소로 쉽게 이동하게 할 수 있습니다.
리스트의 마지막 요소를 참조하는 변수 tail를 추가할 수 있습니다. 
다만 이때 주의할 점은 리스트 마지막에 요소를 추가하거나 삭제할 때 tail도 갱신해 줘야 합니다.
이 외에도 요구사항에 따라 구조를 변경할 수 있습니다.

<<재귀를 사용하면 구현과 유지보수가 쉽다는 장점도 있습니다.>>

*/