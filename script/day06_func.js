// 함수 = 재사용문법
// DOM.addEventListener('이벤트','function'(){실행결과})
// 기본문법 (아래)
// fuction 함수명() {재사용문법}
// 자판기 함수 : 무조건 콜라 1개가 나오는 자판기
// 함수는 생성, 호출을 개별로 진행해야 한다.
function japangi(){ //생성
    console.log('콜라 1개 나왔습니다.')
}
japangi() //호출(생성된 함수명 작성)
japangi()
japangi()
japangi()
japangi()
const btn = document.querySelector('#order')
console.log(btn)
// DOM 이벤트로 함수 호출 시 함수 명단 작성한다.(괄호없이)
// btn.addEventListener('click',japangi)
btn.addEventListener('click',function(){
    console.log('1000원 입금')
    japangi()
})
console.log('-------------------------------')
// --------------------------------------------

// 함수 = 재사용되는 js문법을 감싸서 쉽게 호출하는 기능
// 매개변수 = 재사용 함수 내에 변경되는 데이터가 있을 경우
// 매개변수 활용한 함수 기본문법
// function 생성함수명(생성매개변수){재사용문법}
function japangi2(drink){
    console.log(drink+'1개 나옴.')
}
// 매개변수가 있는 함수를 호출할 경우
// 호출함수 괄호안에는 매개변수에 삽입할 데이터를 작성한다.
japangi2('코카콜라')
japangi2('사이다')
console.log('---------------------------------')
//----------------------------------------------
function p (a,b,c){
    console.log(a+'1개줄까?')
    console.log(b+'2개줄까?')
    console.log(c+'3개줄까?')
}
p('콜라','사이다','사이다')
console.log('-------------------------------')
function abc (drink,num){
    console.log(drink+num+'개 나왔습니다.')
}
abc('사이다',1)
abc('콜라',3)
abc('사이다',2)
//-----------------------------------------
console.log('---------------------')
//4주 자유적금 통장
//초기금액 = 10,000원
// 함수호출메세지 >> ?원 입금했습니다. 총 잔액은 ?원 입니다.
let passBook = 10000
function week4passbook(money) {
    // passBook += money
    console.log(`${money}원 입금했습니다.`)
    console.log(`총 잔액은 ${passBook += money}원입니다`)
}
// 출력예) 1000원 입금했습니다. 총 잔액은 11000원 입니다.
week4passbook(1000)
week4passbook(1000)
week4passbook(1000)
console.log('-------------------------------------')
function dan99(number){
    console.log(`${number}x1=${number*1}`)
    console.log(`${number}x2=${number*2}`)
    console.log(`${number}x3=${number*3}`)
    console.log(`${number}x4=${number*4}`)
    console.log(`${number}x5=${number*5}`)
    console.log(`${number}x6=${number*6}`)
    console.log(`${number}x7=${number*7}`)
    console.log(`${number}x8=${number*8}`)
    console.log(`${number}x9=${number*9}`)
    console.log('-------------------------------')
}
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)