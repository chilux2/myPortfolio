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


view1.addEventListener('click',open);
close1.addEventListener('click',hide);
