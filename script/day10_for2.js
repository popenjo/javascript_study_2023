// ES6 DOM 쉽게 관리 할 수 있는 for ~ in ~ od ~ Each
const study = ['html','css','javascript','design']
// 기본 for 문법
for(let i=0; i<study.length; i++){
    console.log(study[i])
}
// for ~in 문법(DOM index number)
for(let i in study){
    console.log(i)
}
console.log('----------------------------')
// for ~of 문법(DOM)
for(let i of study){
    console.log(i)
}
console.log('----------------------------')
const boxA = document.querySelectorAll('.box a')
for(let i in boxA){
    console.log(i) //DOM index+기본속성 출력
}
for(let i of boxA){
    console.log(i) //DOM 객체 출력
    i.addEventListener('mouseover',function(){
        console.log(this)
        i.style.background = `aqua`
    })//mouseover end
    i.addEventListener('mouseout',function(){
        i.style.backgroundColor = 'coral'
        i.style.color = 'white'
    })
    i.addEventListener('click',function(){
        window.alert('준비중입니다.')
    })//클릭 end
}//for of boxA end

// for ~ in index 위주 제어
// for ~ of 객체 위주 제어
// forEach index, 객체, 배열 동시에 제어
const num = [20, 21, 22, 23, 24, 25]
/* 
    객체.forEach(function(객체매개변수, 인덱스매개변수, 매열매개변수){
        매개 변수를 활용한 실행 속성 및 메소드 작성위치
    })
    *매개변수 명은 의미만 맞게 자유롭게 설정가능.
    *매개변수 순서에 따라 객체, 인덱스, 배역 지정이니 순서주의!
    *매개변수 필요한 대상만 작성 가능
*/
boxA.forEach(function(target, index, array){
    console.log(target)
    console.log(`index=${index}`)
    console.log(`array=${array}`)
    console.log('---------------------------')
    target.addEventListener('mousedowb',function(){
        target.style.color = `red`
    })
})