const dan2 = document.querySelector('#dan2')
const dan3 = document.querySelector('#dan3')
const dan4 = document.querySelector('#dan4')
const dan5 = document.querySelector('#dan5')
const dan99wrap = document.querySelector('#dan99wrap') //p를 삽입하는 객체
let p = document.createElement('p') //구구단 함수 결과를 삽입하는 DOM객체
console.log(p)
console.log(dan2,dan3,dan4,dan5,dan99wrap)
// p.innerHTML '2X2=2'
// dan99wrap.appedChild(p)
function dan99(num){
    p.innerHTML = (`${num}x1=${num*1}<br>`)
    p.innerHTML += (`${num}x2=${num*2}<br>`)
    p.innerHTML += (`${num}x3=${num*3}<br>`)
    p.innerHTML += (`${num}x4=${num*4}<br>`)
    p.innerHTML += (`${num}x5=${num*5}<br>`)
    p.innerHTML += (`${num}x6=${num*6}<br>`)
    p.innerHTML += (`${num}x7=${num*7}<br>`)
    p.innerHTML += (`${num}x8=${num*8}<br>`)
    p.innerHTML += (`${num}x9=${num*9}`)
    dan99wrap.appendChild(p)
}
dan99(1)
dan2.addEventListener('click',function(){
    dan99(2)
})
dan99(1)
dan3.addEventListener('click',function(){
    dan99(3)
})
dan99(1)
dan4.addEventListener('click',function(){
    dan99(4)
})
dan99(1)
dan5.addEventListener('click',function(){
    dan99(5)
})