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




