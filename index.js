function class1() {
    let element = document.getElementById('classcard1');
    element.style.display = 'block';
    let element1 = document.getElementById('classcard2');
    element1.style.display = 'none';
    let element2 = document.getElementById('classcard6');
    element2.style.display = 'none';
}
function class2() {
    let element = document.getElementById('classcard2');
    element.style.display = 'block';
    let element1 = document.getElementById('classcard1');
    element1.style.display = 'none';
    let element2 = document.getElementById('classcard3');
    element2.style.display = 'none';
}
function class3() {
    let element = document.getElementById('classcard3');
    element.style.display = 'block';
    let element1 = document.getElementById('classcard2');
    element1.style.display = 'none';
    let element2 = document.getElementById('classcard4');
    element2.style.display = 'none';
}
function class4() {
    let element = document.getElementById('classcard4');
    element.style.display = 'block';
    let element1 = document.getElementById('classcard3');
    element1.style.display = 'none';
    let element2 = document.getElementById('classcard5');
    element2.style.display = 'none';
}
function class5() {
    let element = document.getElementById('classcard5');
    element.style.display = 'block';
    let element1 = document.getElementById('classcard4');
    element1.style.display = 'none';
    let element2 = document.getElementById('classcard6');
    element2.style.display = 'none';
}
function class6() {
    let element = document.getElementById('classcard6');
    element.style.display = 'block';
    let element1 = document.getElementById('classcard5');
    element1.style.display = 'none';
    let element2 = document.getElementById('classcard1');
    element2.style.display = 'none';
}
function switchClass() {
    let arrow = document.getElementById('right1');
    arrow.addEventListener('click', class2);
    let arrow1 = document.getElementById('right2');
    arrow1.addEventListener('click', class3);
    let arrow2 = document.getElementById('right3');
    arrow2.addEventListener('click', class4);
    let arrow3 = document.getElementById('right4');
    arrow3.addEventListener('click', class5);
    let arrow4 = document.getElementById('right5');
    arrow4.addEventListener('click', class6);
    let arrow5 = document.getElementById('right6');
    arrow5.addEventListener('click', class1);
    let arrow6 = document.getElementById('left1');
    arrow6.addEventListener('click', class6);
    let arrow7 = document.getElementById('left6');
    arrow7.addEventListener('click', class5);
    let arrow8 = document.getElementById('left5');
    arrow8.addEventListener('click', class4);
    let arrow9 = document.getElementById('left4');
    arrow9.addEventListener('click', class3);
    let arrow10 = document.getElementById('left3');
    arrow10.addEventListener('click', class2);
    let arrow11 = document.getElementById('left2');
    arrow11.addEventListener('click', class1);
}

document.addEventListener('DOMContentLoaded', switchClass);