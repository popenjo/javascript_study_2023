//  dom == document object model
//  자바스크립트 = 객체지향언어
// bom = browser object model 웹브라우저의 기본 객체
// let hello = 'hello js';
// window.alert(hello);
// window.prompt('이건 뭘까?')
// let qa = window.prompt('1+1?')
// window.alert('정답은'+qa+'입니다.')
// let ox = window.confirm('자바스크립트는 객체지향언어다.');
// window.alert(ox)
// 확인=true(참), 취소=false(거짓)

// 아이디 객체 변수 대입하기
// 변수 선언키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1')
const loginbtn = document.getElementById('login')
const pay = document.getElementById('pay')
const price = document.getElementById('price')
console.log(btn1, loginbtn, pay, price);
btn1.style.color = 'red';
login.style.border = 'none';
login.style.color = 'blue';

// 클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first');
const li_second = document.getElementsByClassName('second');
const li_last = document.getElementsByClassName('last')[0];
console.log(li_first, li_second, li_last);
console.log(li_first[0])

const header = document.getElementsByTagName('header')
const title = document.getElementsByTagName('h1')
const nav = document.getElementsByTagName('nav')
const aTag = document.getElementsByTagName('a')
console.log(header, title, nav, aTag);
console.log(aTag[1])
console.log('---------------------------------')

// innerHTML 속성 활용
// 객체.속성 //읽기
// 객체.속성 = 대입값 //수저or삭제
console.log(header.innerHTML)/* 안쪽 html을 읽는다. */
console.log(header[0].innerHTML) //자식, 자손 읽기 [0] <-index
console.log(title[0].innerHTML) //태그
console.log(li_first[0].innerHTML) //class
console.log(nav[0].innerHTML) //부모 태그

title[0].innerHTML = '로고';
price.innerHTMl = '6000원';
aTag[2].innerHTML = ''; //빈문자열 == 문자열을 비운다.
nav[0].style.backgroundColor = 'orange'
nav[0].style.border = '2px solid black'
nav[0].style.width = '100px'
nav[0].style.height = '100px'
nav[0].style.borderRadius = '30px'
nav[0].style.transform = 'translateX(200px)'
nav[0].style.animation = '0.5s alternate-reverse'