// // 객체
// // key -value pair
// //하나의 변수에 여러개의 값을 넣을 수 있다
// // value 에 올 수 있는 데이터 타입은 제한이 없다 (객체도 가능)

// // 1. 객체 생성 방법
// // 1-1. 기본적인 객체 생성 방법
// let person = {
//   name: "홍길동",
//   age: "30",
//   gender: "남자",
// };

// // 1-2. 생성자 함수를 이용한 객체 생성 방법
// // 많은 객체를 한꺼번에 생성 가능
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

// // 2. 접근하는 방법
// console.log("1", person.name);
// console.log("2", person.age);
// console.log("3", person.gender);

// // 3. 객체 메소드 (객체가 가진 여러가지 기능 : Object.~~~)
// // 3-1. Object.key() : key를 가져오는 메소드

let person = {
  name: "홍길동",
  age: "30",
  gender: "남자",
};

let keys = Object.keys(person);
console.log("keys=>", keys); //keys=> [ 'name', 'age', 'gender' ]

// 3-2. values
let values = Object.values(person);
console.log("values=>", values); //values=> [ '홍길동', '30', '남자' ]

// entries
// key와 value를 묶어서 배열로 만든 배열! (2차원 배열)
let entries = Object.entries(person);
console.log("entries=>", entries); //entries=> [ [ 'name', '홍길동' ], [ 'age', '30' ], [ 'gender', '남자' ] ]

//3-4. assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person, { age: 31 }); // newPerson으로 person을 복사
//복사하면서 나이만 바꾸고 싶을 때 중괄호 열고 적기
console.log("newPerson=>", newPerson); // newPerson=> { name: '홍길동', age: '30', gender: '남자' }
Object.assign(newPerson, person, { gender: "여자" });
console.log("newPerson=>", newPerson);

// // 3-5. 객체 비교
// //객체는 크기가 상당히 커요! -> 메모리에 저장할 때 별도의 공간에 저장
// // 직접적인 값이 아닌 person1 별도 공간에 대한 주소를 가지고 있음
// let person1 = {
//   name: "홍길동",
//   age: "30",
//   gender: "남자",
// };
// // person2 별도 공간에 대한 주소
// let person2 = {
//   name: "홍길동",
//   age: "30",
//   gender: "남자",
// };

// // 직접 저장
// let str1 = "aaa";
// let str2 = "aaa";

// console.log("answer=>", person1 === person2); //false
// console.log("answer2=>", str1 === str2); //true

// //주소를 저장하는 변수를 비교하는 방법
// console.log(JSON.stringify(person1) === JSON.stringify(person2)); // true
// //stringify : 문자열화를 시킨다

// 3-6. 객체 병합
let person1 = {
  name: "홍길동",
  age: "30",
};

let person2 = {
  gender: "남자",
};
// ... : 중괄호를 해체시켜서 키 벨류를 다 풀어주는 명령어. spread operator 라는 명령어임
let perfectMan = { ...person1, ...person2 };
console.log(perfectMan);
