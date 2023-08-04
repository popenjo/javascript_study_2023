// 반복문 for
/* 
    for(반복문변수생성; 변수 활용 조건식; 변수증감식){
        반복문 변수 조건이 참일 때 반복실행문
    }반복문 변수 조건이 거짓일때 for 끝나는 위치
*/
// 1~10 까지 반복하는 반복문
// for 자주 이용하는 지역변수명 = i, j, m, n, k
//i = index를 나타내는 지역 변수
for(let i=0; i<11; i++){
    console.log('hello_js'+(i+1))
}
// 0~5 반복문
for(let i=0; i<6; i++){
    console.log(+i)
}
console.log('------------------------------')
// 5~0 반복문
for(let i=5; i>0; i--){
    console.log(i)
}
console.log('------------------------------')
// 10~30 반복문
for(let i=10; i<30; i++){
    if(i%2===1){
        console.log(i)
    }
}
console.log('------------------------------')
// DOM, 배열 사용하는 반복문
const study = ['html', 'css','javascript','figma','photoshop','illustrator']
// 객체의 수 = length 속성
// 1. html 공부
// 2. css 공부
// 3. javascript 공부
// 4. figma 공부
// 5. photoshop 공부
// 6. illustrator 공부
for(let i=0; i<study.length; i++){
    console.log(`${i+1}.${study[i]} 공부`)
}
console.log('------------------------------')
// 위 stydy 배열을역순으로 출력하기
for(let i=study.length-1; i>=0; i--){
    console.log(`${i+1}.${study[i]} 공부`)
}
console.log('------------------------------')
// 반복문 연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')
// 반목문 이용 coffee배열 모두 출력
for(let i=0; i<coffee.length; i++){
    console.log(`${coffee[i]}`)
}