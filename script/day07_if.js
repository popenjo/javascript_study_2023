//전역변수, 지역변수 (함수 내/외부 생성한 변수위치 차이)
let b = 20 //전역 (외)
let c = 30 //전역변수는 함수 내, 외 모두 사용가능하다.
function test(){ //지역 (내)
    let a = 10 //함수 내에서만 사용할 수 있다.
    console.log(a+b)
}
test()
// console.log(a)
// console.log(a+b) 지역변수를 함수 바깥에서 사용 시 에러 발생
console.log(b+c)
console.log('----------------------------------------')
// 조건문 - 논리데이터 참(true), 거짓(false)
// 참 과 거짓을 알려주는 데이터[논리데이터]
let num1 = 5
let num2 = 7
let num3 = '5'
console.log(num1==num2) //서로 같다
console.log(num1 < num2) // num1 은 num2 보다 작다
console.log(num1==num3) //데이터타입 구분을 못함 ( == 서로 같다 라는 뜻)
console.log(num1===num3) //false(데이터타입구분)
console.log(num1!=num3) // 서로 다르다
console.log(num1>=num2) //num2은 num1보다 크거나 같다.
console.log(num1<=num2) //num1은 num2보다 크거나 같다.
console.log('----------------------------------------')
//조건문
//if(조건식){조건식이 참일 대 실행결과} 조건식 종료
//상황1. 주말에 날씨가 좋으면 등산가자
let weather = ['비','맑음','흐림']
if(weather[1]==='맑음'){
    console.log('등산을 가자!')
}
console.log('----------------------------------------')
let d = true
let e = false
let f = 10
let g = 20
if(d===true){console.log('실행1')}//o d = true 데이터 타입을 구분했을때 같기 때문에
if(f>10){console.log('실행2')}//x 10>10 보다 크지 않다.
if(g<=20){console.log('실행3')}//o g는 20보다 작거나 같다.
if(e!==true){console.log('실행4')}//o 서로의 결과값이 다르기 때문에 정답
console.log('----------------------------------------')
//관리자만 접속 할 수 있는 페이지
//관리자 아이디일 결우만 접속가능(접속 후 인사말 출력)
/* const userId = window.prompt('아이디를 입력하세요')
if(userId === 'admin'){
    window.alert('관리자님 환영합니다.')
} */
// 사용자의 나이를 입력받고 10살 이하라면 '놀이기구 탑승불가'
/* const age = Number(window.prompt('몇 살 이신가요?'))
if(age < 10){
    window.alert('놀이기구 탑승불가')
}
if(age > 10){
    window.alert('놀이기구 탑승가능')
} */
/* const userPrint = window.confirm('인쇄할까요?')
if(userPrint === true){
    window.print()
} */