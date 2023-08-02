//함수
// 함수 생성 > 호출 
// 함수 생성 후 호출식을 작성하지 않으면 함수결과를 볼 수 없다.
// 1. 생성 : function 함수명(매개변수명){재사용함수 문법}
// 2. 호출 : 함수명()
function func1(a){ //접속 회원 맞춤형 인사
    console.log(`${a}님 어서오세요`)
}
func1('ABC')
func1('CGP')
console.log('----------------------------------------------')
//-----------------------------------------------------------
// 함수 기능 : 리턴(return) 함수결과값 외부로 변환명령
function func2(a){
    return a+1 //함수의 결과값만 내보내는 함수
}
func2(50)//함수결과값을 출력하는 메소드가 없어 출력x
console.log(func2(50))//함수결과를 호출앞 메소드애 의해 출력o
// window.alert(func2(100))
document.write(func2(18))
console.log('----------------------------------------------')
// -----------------------------------------------------------
function func3(a, b){
    return a*b //함수 내 리턴은 1개만 작성 가능
}
console.log(func3(10,20))
console.log(func3(2,3))
console.log('----------------------------------------------')
// -------------------------------------------------------------
let total = 0
function func4(a){
    total = a
    return total
    total++ //return 뒤에 있는 js는 실행하지 못한다.
}
console.log(func4(10))
// 10
console.log('----------------------------------------------')
// ----------------------------------------------------------------
let num1 = 10
let num2 = 20
function func5(a,b){ //함수생성
    num1 += num2 // 10+20 30
    num2 = a+b //  20X기존 숫자 제거 = 6
    num1 += num2 // 30+6 
    return num1 // 36 외부반환
}
console.log(func5(2,4))
// ---------------------------------------------------------
const txtInput = document.querySelectorAll('.box .txt')
console.log(txtInput)
txtInput[0].addEventListener('focus',function(){
    bg(txtInput[0], 'yellow')
})
txtInput[1].addEventListener('focus',function(){
    bg(txtInput[1], 'blue')
})
txtInput[2].addEventListener('focus',function(){
    bg(txtInput[2], 'pink')
})
//함수 = 반복되는 재사용 문법
// 매개변수 = 재사용문법 내 수정데이터
function bg(target, color){
    return target.style.backgroundColor = color
}
console.log('---------------------------------------------')
// --------------------------------------------------
//관심 상품, 알림설정 이미지에 마우스를 올렸을 때
// off -> on 이미지 변경
// 마우스를 나갔을 때 on -> off 이미지 변경

const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg)
likeImg.addEventListener('mouseover',function(){
    // console.log('over') //이벤트 정상확인
    // likeImg.src = './images/heart_on.png'
})
likeImg.addEventListener('mouseout',function(){
    // console.log('out')
    // likeImg.src = './images/heart_off.png'
})
// ---------------------------------------------------
ideaImg.addEventListener('mouseover',function(){
    // console.log('over')
    // ideaImg.src = './images/idea_on.png'
    onOff(this, 'idea', 'on')
})
ideaImg.addEventListener('mouseout',function(){
    // console.log('out')
    // ideaImg.src = './images/idea_off.png'
    onOff(this, 'idea', 'off') //이벤트가 적용된 대상을 this라고 함
})
function onOff(target, name, status){
    return target.src = `./images/${name}_${status}.png`
}