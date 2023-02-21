//mixed messages section//
let view = document.getElementById('openM');
let close = document.getElementById('closeM');
let mixedM = document.getElementById('mixedM');

let open = function(){
    mixedM.style.display = 'block';
    close.style.display = 'block';
}

let hide = function(){
    mixedM.style.display = 'none';
    close.style.display = 'none';
}

view.addEventListener('click', open);
close.addEventListener('click', hide);


//---------------------------------------------//
let view1 = document.getElementById('openW');
let close1 = document.getElementById('closeW');
let weFixM = document.getElementById('weFixM');

let openOne = function(){
    weFixM.style.display = 'block';
    close1.style.display = 'block';
}

let hideOne = function(){
    weFixM.style.display = 'none';
    close1.style.display = 'none';
}


view1.addEventListener('click',openOne);
close1.addEventListener('click',hideOne);

//--------------------------------//

let view2 = document.getElementById('openK');
let close2 = document.getElementById('closeK');
let karateM = document.getElementById('karateM');

let openThree = function(){
    karateM.style.display = 'block';
    close2.style.display = 'block';
}

let hideThree = function(){
    karateM.style.display = 'none';
    close2.style.display = 'none';
}


view2.addEventListener('click',openThree);
close2.addEventListener('click',hideThree);
