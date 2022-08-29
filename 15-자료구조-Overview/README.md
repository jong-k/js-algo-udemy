# 자료구조 (Data Structure)
자료구조 = value 들의 모임

## 왜 다양한 자료구조가 존재할까?
특정한 상황에서 유리한 자료구조가 존재하기 때문
- HTML (nested element) 관련 작업 : 트리 
- 구글맵 같은 GPS 시스템 : 그래프
- 배열보다 빠르게 맨앞, 맨뒤 입출력할때 : 링크드 리스트

## 클래스(Class)란?
클래스 : 미리 정의된 속성 및 메서드들을 이용해 객체를 생성하기 위한 청사진
- 객체지향 프로그래밍을 위한 기본
- 사실 자바스크립트 클래스 개념은 이미 존재하는 프로토타입 기반 상속자들을 구문적으로 모사한 것임(syntactical sugar)

## 클래스 문법
new 키워드를 통해 생성되고 인스턴스화된다.
```js
// 클래스
class Student {
  constructor(firstName, lastName, year) {
    // this는 개별 인스턴스 자체를 의미한다
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year; // 반드시 파라미터와 속성이 같을 필요는 없음
    // 실제 이름은 year이지만, grade로 부르기로 함
  }
}
// 인스턴스
const firstStudent = new Student('Cliff', 'Hudson', 3);
firstStudent.firstName; // 'Cliff'
const secondStudent = new Student('Mathew', 'Baltz');
secondStudent.grade = 4; // secondStudent 의 프로퍼티를 직접 추가
```

## 메서드
### 인스턴스 메서드
개별 인스턴스에서 공통적으로 동작하는 메서드

```js
// Array로부터 pop 인스턴스 메서드를 수행하려면 pop 인스턴스를 실행할 개별 Array 인스턴스가 있어야 함
data = new Array(1,2,3);
data; // [1, 2, 3]
data.push(99);
data; // [1, 2, 3, 99]
```
### 예시
```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies++;
    if (this.tardies >= 3) return 'You are expelled!!';
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    const sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}
// 인스턴스
const firstStudent = new Student('Cliff', 'Hudson');
firstStudent.fullName(); // Your full name is Cliff Hudson
firstStudent.markLate(); // 'Cliff Hudson has been late 1 times'
firstStudent.markLate(); // 'Cliff Hudson has been late 2 times'
firstStudent.markLate(); // ''You are expelled!!''
firstStudent.addScore(65);
firstStudent.scores; // [65]
firstStudent.addScore(95); // [65, 95]
firstStudent.calculateAverage(); // 80 
```

### 클래스 메서드
static 메서드 : 클래스의 인스턴스화 없이도 호출될 수 있으며, 클래스 인스턴스를 통해 호출될 수 없다
- 오직 클래스명.메서드명 형태로 호출된다.

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  static enrollStudents() {
    return 'Enrolling Student!'
  }
}
// 인스턴스
const firstStudent = new Student('Cliff', 'Hudson');
const secondStudent = new Student('Vincent', 'Vega');
Student.enrollStudents(); // 'Enrolling Student!'
```

```js
class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy); // hypot : 피타고라스의 정리에서 삼각형 빗변의 길이를 반환
  }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
Point.distance(p1, p2); // 7.0710678118654755
```