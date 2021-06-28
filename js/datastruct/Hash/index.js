// 해싱 기법
// 1. 결정성 : 동일한 키는 동일한 해시 값을 생성해야 한다
// 2. 효율성 : 시간 복잡도가 O(1)이어야 한다
// 3. 균일한 분배 : 배열 전체를 최대한 활용해야 한다

// 해싱의 첫 번째 기법
// 소수 사용
// 해싱에서 소수는 중요하다
// 소수를 사용한 모듈러 나눗셈이 균일한 방식으로 배열 인덱스를 생성하기 때문이다

// 충돌을 다루는 해싱 기법

// 탐사 해싱 기법

// 선형 탐사 해싱 기법
// 증분 시도를 통해 다음으로 사용 가능한 인덱스를 찾음으로써 충돌을 해결한다.
// 단점은 cluster 쉽게 발생, 순회해야 할 자료를 더 많이 생성하기 때문이다

// 이차 탐사 해싱 기법
// 점진적으로 증분 시도를 생성하기 위해 이차 함수를 사용
// cluster 문제를 해결하는데 좋은 기법이다

// 해시 테이블은 크기가 처음에 정의되는 고정된 크기의 자료구조