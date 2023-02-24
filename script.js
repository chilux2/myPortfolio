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

//---------------------------------------------//

let view3 = document.getElementById('heroButton');
let hero = document.getElementById('hero');

const superHeroes = {
  bronze:['Batman','Wolverine','Black-Panther', 'Black-Widow', 'Ant-Man', 'Winter-Soldier', 'Dead-Pool'],
  
   silver:['Spider-Man' , 'The-Flash' , 'GreenLantern','Iron-man', 'Hulk', 'Aqua-Man'],
  
    gold:['Superman' , 'Wonder-Woman', 'Thor', 'Captain-America', 'Dr-Strange', 'Scarlet-Witch', 'Black-Adam'],
  
    Platinum:['All-Star Superman', 'Captain Marvel','Jean-Grey(Phoenix)', 'Kang The Conqeurer', 'Dooms-day' ],
  
    God:['Superman-Prime' , 'The Spectre', 'Odin', 'Martian-ManHunter', 'Darkseid', 'The-Anti-Monitor' ]
  }
   
   const randomPhrases = [' Thats awesome!' , 'Thats a big boy supe!' , 'Wow Wow Wow!' , 'What a card!' , 'ooof Built different!' , 'Legend!!',
   'Super Duper!' , 'Im so jealous!' , 'Thats so cool!', '']

   let generatePhrase = [];

let getHero =() =>{
   for(let hero in superHeroes){
    let randHero = randomHero(superHeroes[hero].length);
    
   
     switch(hero){
       case 'bronze':
         generatePhrase.push(`Bronze Tier Hero: You Got ${superHeroes[hero][randHero]}, ${randomPhrases[randHero]}`) 
         break;
       case 'silver':
         generatePhrase.push(`Silver Tier Hero: Oh You Have ${superHeroes[hero][randHero]}, ${randomPhrases[randHero]}`)
         break;
       case 'gold':
           generatePhrase.push(`Gold Tier Hero: Check You Out With ${superHeroes[hero][randHero]}, ${randomPhrases[randHero]}`);
           break;
       case 'Platinum':
           generatePhrase.push(`Platinum Tier Hero: Check You Out With ${superHeroes[hero][randHero]}, ${randomPhrases[randHero]}`);
           break;
      case 'God':
           generatePhrase.push(`God Tier Hero: Check You Out With ${superHeroes[hero][randHero]}, ${randomPhrases[randHero]}`);
           break;
       default:
           return 'nothing to see here';
     }
   }
   console.log(generatePhrase)
  }

function showHero(){
  hero.innerHTML = getHero();
  view3.innerHTML = "Come back tomorrow!";
  view3.style.cursor = "default";

  //add your code here
 // button.removeEventListener('click',showFortune);
}

view3.addEventListener('click', showHero);
getHero();