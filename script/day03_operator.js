// 자바스크립트 연산자
let a = 10
let b = 5
let c = 1
console.log(`${a}+${b}=${a+b}`)//더하기
// console.log(a+'+'+b+'='+(a+b));
console.log(`${a}-${c}=${a-c}`)//뺄셈
console.log(`${b}X${c}=${b*c}`)//곱셈
console.log(`${a}/${b}=${a/b}`)//나누기
console.log(`${a}%${b}=${a%b}`)//백분율
console.log('----------------------------')
//연결연산자
console.log('10'+10) //연결연산자
console.log(a+10); //더하기 연산자
console.log(typeof('10'+10));//스트링 (문자)
console.log(typeof(10+10));//넘버 (숫자)
console.log('----------------------------')
let age = 20
// age = age+1
age += 1
console.log(`${age}살`)
age -= 1 //age = age-1
console.log(age)
age *= 5 //age = age*5
console.log(age);
age /= 2 //age = age/2
console.log(age);
age %= 2 //age = age%2
console.log(age);
console.log('----------------------------')
// 복합대입연산자를 이용한 태그 생성방법
let cart_li = '<ul>' //빈 장바구니 (초기)
//참기름 1개 장바구니 담기
cart_li += '<li>참기름1개</li>'
//베이글 2개 징비구니 담기
cart_li += '<li>베이글2개</li>'
console.log(cart_li+='</ul>');
console.log('----------------------------')
// 태그생성메소드 createElement('생성태그명')
let cartNewLi = document.createElement('ul'); //자동 꺽쇠
const cart_contents = document.querySelector('#cart .content');
cartNewLi.innerHTML = '<li>참기름1개</li>'
cartNewLi.innerHTML += '<li>베이글2개</li>'
console.log(cartNewLi)
console.log(cart_contents);
cart_contents.appendChild(cartNewLi)