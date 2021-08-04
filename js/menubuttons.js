var buttonOne = document.getElementById('toggleOne');

buttonOne.onclick =  function() {
    var div = document.getElementById('scrollable');
    if (div.style.display !== 'none') {
        div.style.display = 'none'
    } else {
        div.style.display = 'block';
    }
};

var buttonTwo = document.getElementById('toggleTwo');

buttonTwo.onclick = function() {
    var divTwo = document.getElementById('scrollableTwo');
    if (divTwo.style.display !=='none') {
        divTwo.style.display = 'none'
    } else {
        divTwo.style.display = 'block';
    }
};

var buttonThree = document.getElementById('toggleThree');

buttonThree.onclick = function () {
    var divThree = document.getElementById('scrollableThree');
    if (divThree.style.display !== 'none'){
        divThree.style.display = 'none'
    } else {
        divThree.style.display = 'block';
    }
};

var buttonFour = document.getElementById('toggleFour');

buttonFour.onclick = function () {
    var divFour = document.getElementById('scrollableFour');
    if(divFour.style.display !== 'none') {
        divFour.style.display = 'none'
    } else {
        divFour.style.display = 'block';
    }
};

var buttonFive = document.getElementById('toggleFive');

buttonFive.onclick = function () {
    var divFour = document.getElementById('scrollableFive');
    if(divFour.style.display !== 'none') {
        divFour.style.display = 'none'
    } else {
        divFour.style.display = 'block';
    }
};

var buttonSix = document.getElementById('toggleSix');

buttonSix.onclick = function () {
    var divSix = document.getElementById('scrollableSix');
    if(divSix.style.display !== 'none' ) {
        divSix.style.display = 'none';
    } else {
        divSix.style.display = 'block';
    }
}

