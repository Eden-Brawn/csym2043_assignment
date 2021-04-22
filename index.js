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
    if (document.getElementById('classcard1').style.display == 'block'){
        document.getElementById('classcard1').style.display = 'none';
        document.getElementById('classcard6').style.display = 'block';
    }
    else if (document.getElementById('classcard2').style.display == 'block'){
        document.getElementById('classcard2').style.display = 'none';
        document.getElementById('classcard1').style.display = 'block';
    }
    else if (document.getElementById('classcard3').style.display == 'block'){
        document.getElementById('classcard3').style.display = 'none';
        document.getElementById('classcard2').style.display = 'block';
    }
    else if (document.getElementById('classcard4').style.display == 'block'){
        document.getElementById('classcard4').style.display = 'none';
        document.getElementById('classcard3').style.display = 'block';
    }
    else if (document.getElementById('classcard5').style.display == 'block'){
        document.getElementById('classcard5').style.display = 'none';
        document.getElementById('classcard4').style.display = 'block';
    }
    else if (document.getElementById('classcard6').style.display == 'block'){
        document.getElementById('classcard6').style.display = 'none';
        document.getElementById('classcard5').style.display = 'block';
    }
}
function switchClass() {
    let right = document.getElementById('right');
    right.addEventListener('click', classRight);
    let left = document.getElementById('left');
    left.addEventListener('click', classLeft);
}

document.addEventListener('DOMContentLoaded', switchClass);