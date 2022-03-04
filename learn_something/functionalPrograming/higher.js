/**
 * # 평가
 * - 코드가 계산(Evaluation) 되어 값을 만드는 것
 *
 * # 일급
 * - 값으로 다룰 수 있다
 * - 변수에 담을 수 있다
 * - 함수의 인자로 사용될 수 있다
 * - 함수의 결과로 사용될 수 있다
 *
 * # 일급 함수
 * - 함수를 값으로 다룰 수 있다
 * - 조합성과 추상화의 도구
 *
 * # 고차 함수
 * - 함수를 값으로 다루는 함수
 */

// ## 함수를 인자로 받아서 실행하는 함수
// - apply1
// - times

// ## 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
// - addMaker

const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10); // b => a + b
const b = add10(10); // 20
console.log(b);