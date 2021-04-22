function print5() {
    console.log(1);
    console.log(2);
}
print5();

function class2() {
    let element = document.getElementById('classcard2');
    element.style.display = 'block';
    let preelement = document.getElementById('classcard1');
    preelement.style.display = 'none';
}

function switchClass() {
    let header = document.getElementById('right1');
    header.addEventListener('click', class2);

    let paragraph = document.getElementById('idp');
    paragraph.addEventListener('click', updateParagraph);
}

document.addEventListener('DOMContentLoaded', switchClass);