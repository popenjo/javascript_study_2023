//null, undefined 데이터 타입 차이
//null == 변수의 값을 삭제 할 때 사용
// '' == 빈문자열은 DOM문자데이터를 삭제할 때 사용
let a = 10
console.log(a)
a = null //빈 값을 대입한다.
console.log(a)
// -------------------------------------------------
// undefined 정의 되지 않은 상태
let b = 10
let c
console.log(b,c)
console.log(b+c)
console.log('-------------------------------')
let num1 = 10;
num1++;
console.log(num1);
num1--;
console.log(num1);
console.log(++num1);//앞)전위 / 뒤)후위
console.log(num1);
/* 출력 또는 대입연산자와 함께 할때
전위, 후위 연산자에 다른 결과값이 다르게 출력 된다.
출력예) console.log(num1++)
콘솔 로그로 num1의 값을 먼저 전송 출력 후
++ 증감연산자로 num1의 값을 나중에 1증가한다.
출력, 대입 관계없이 증감연산자를 개별로 작성한 경우
전위, 후위 연산과 관계없이 무조건 1증가 또는 1감소된다.
*/
let num2 = 5
let num3 = 0
console.log(`초기값 num2=${num2}, num3=${num3}`)
num3 = num2++ // <- num3 = 0 num2 = 5+1=6 의 값을 받는다 num2이 num3의 값으로 가기 때문에 num3어야 하지만 num2가 증가 되기 전이므로 num3은 5이다.
console.log(`num2=${num2}, num3=${num3}`)
const pwd = document.querySelector('#pwd')//비밀번호 입력칸
const btn = document.querySelector('#submit')//변경버튼
const reset = document.querySelector('#reset')//초기화버튼
console.log(pwd, btn, reset)

console.log('--------------------------------------------------------')
// -------------------------------------------------------------------
let number1=10;
let number2=20;
let result;
number1--;
console.log(number1); //결과: 9
number1++; //9+1
console.log(number1); //결과: 10
result=number2++; //0+20(+1)
console.log(result); //결과: 20
result=++number2;
console.log(result); //결과: 22






// 사용자가 비밀번호 입력칸에 비밀번호 입력 후
// submit 버튼 클릭 시 윈도우팝업창으로 '비밀번호 변경'
// reset버튼 클릭 시 비밀번호 입력칸 값 초기화(제거)
btn.addEventListener('click',function(){
    window.alert(`비밀번호 변경`);
})
reset.addEventListener('click',function(){
    pwd.value = ''; 
})