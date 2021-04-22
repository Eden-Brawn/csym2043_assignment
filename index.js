function classRight() {
    if (document.getElementById('classcard1').style.display == 'block'){
        document.getElementById('classcard1').style.display = 'none';
        document.getElementById('classcard2').style.display = 'block';
    }
    else if (document.getElementById('classcard2').style.display == 'block'){
        document.getElementById('classcard2').style.display = 'none';
        document.getElementById('classcard3').style.display = 'block';
    }
    else if (document.getElementById('classcard3').style.display == 'block'){
        document.getElementById('classcard3').style.display = 'none';
        document.getElementById('classcard4').style.display = 'block';
    }
    else if (document.getElementById('classcard4').style.display == 'block'){
        document.getElementById('classcard4').style.display = 'none';
        document.getElementById('classcard5').style.display = 'block';
    }
    else if (document.getElementById('classcard5').style.display == 'block'){
        document.getElementById('classcard5').style.display = 'none';
        document.getElementById('classcard6').style.display = 'block';
    }
    else if (document.getElementById('classcard6').style.display == 'block'){
        document.getElementById('classcard6').style.display = 'none';
        document.getElementById('classcard1').style.display = 'block';
    }
}
function classLeft() {
    
}
function switchClass() {
    let arrow = document.getElementById('right');
    arrow.addEventListener('click', classRight);
    let arrow = document.getElementById('left');
    arrow.addEventListener('click', classLeft);
}

document.addEventListener('DOMContentLoaded', switchClass);