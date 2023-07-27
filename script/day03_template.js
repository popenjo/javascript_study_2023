// 객체구분 > 변수생성 > 변수활용 속성, 이벤트, 메서드
// ----------------get.Elements 객체방법
const ulwrap = document.getElementById('wrap')
const liTag = document.getElementsByTagName('li')
const aTag = document.getElementsByTagName('a')
// ----------------get querySelector 객체방법
const ulwrapQ = document.querySelector('#wrap')
const liTagQ = document.querySelectorAll('#wrap li');
const aTagQ = document.querySelectorAll('#wrap a')
const aTagQ1 = document.querySelector('#wrap a:nth-child(1)')
// ----------------변수 정상출력확인
console.log(ulwrap, ulwrapQ, liTag, aTag)
console.log(liTagQ, liTag[0], liTag[1], liTagQ[2], liTag[3]);
console.log(aTag, aTag[0], aTagQ, aTagQ[0])
// ---------------------------------
sonsole.log('---------------------')
console.log('li태그 변수 값은'+liTagQ[0]+'입니다.')
console.log('1+1='+(1+1));
console.log('7*4='+(28));
console.log(`1+1=${1+1}`)
console.log(`7*4=${7*4}`)
console.log(`li태그 변수 값은 ${liTagQ[0]}`);
