// 1.변수생성
const input_id = document.querySelector('#user_id');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
console.log(btn3, btn4, btn5, input_id); //정상확인
//2. 이벤트 작성
//btn3 클릭했을 때 경고창 띄우기
//객체.이벤트리스너('이벤트종류,함수(){실행결과})
btn3.addEventListener('click',function(){
    window.alert('error')
})
btn4.addEventListener('mouseover',function(){
    this.style.backgroundColor = 'aqua';
    // this 현재 이벤트 객체 대상 == btn4
    // 현재대상.style.css속성 = '대입값'
})
btn5.addEventListener('click',function(){
    btn4.style.transform = 'rotate(10deg)';
    btn5.style.backgroundColor = 'aqua'
    btn2.innerHTML = '결과';
})
input_id.addEventListener('focus',function(){
    this.style.backgroundColor = 'lime';
})//input의 경우 커서를 올렸을시 focus로 해야함 (반응: 배경색을 라임 색상으로 변경)
input_id.addEventListener('blur',function(){
    this.style.backgroundColor = 'gray'
})//focus를 잃었을시 회색 배경으로 변경
console.log('-----------------------------')
//
/* 객체.메소드('이벤트종류',함수(소괄호){window.alert('뭐가나옴')}) */
// 변수.addEventListener('이벤트',function(){실행});
// 변수.addEventListener('이벤트',function(){실행});
// btn3.addEventListener('event',function(){window.alert('content')})
// btn4.addEventListener('event',function(){window.alert('content')})
// btn5.addEventListener('event',function(){window.alert('content')})