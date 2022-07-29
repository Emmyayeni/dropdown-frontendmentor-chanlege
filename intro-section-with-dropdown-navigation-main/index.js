const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn-2');
const btn6 = document.querySelector('#btn-6');
const btn7 = document.querySelector('#btn-7');
const body = document.querySelector('body')
const toggle = document.querySelector('#toggle')
const arrows = document.querySelectorAll('.span svg');
const arrow6 = document.querySelectorAll('.span-6 svg');
const arrow7 = document.querySelectorAll('.span-7 svg');
const menubtns = document.querySelectorAll('.menu-btn .span-4 svg')
console.log(menubtns)


// console.log(arrows)
const arrows2 = document.querySelectorAll('.span-2 svg');
// console.log(arrows2)
// console.log(btn.checked);

btn.addEventListener('change',eventn)
btn2.addEventListener('change',eventne)
btn6.addEventListener('change',eventne6)
btn7.addEventListener('change',eventne7)
toggle.addEventListener('change',eventw)

arrows[1].style.display='none';
arrows2[1].style.display='none';
arrow6[1].style.display='none';
arrow7[1].style.display='none';
menubtns[1].style.display='none';

function eventn(){
    if (this.checked === true){
        console.log('wow you just clicked me');
        arrows[0].style.display = 'none';
        arrows[1].style.display = '';
        
    }else{
        console.log('i was unclicked')
        arrows[1].style.display='none'
        arrows[0].style.display=''
    }
}
function eventne7(){
    if (this.checked === true){
        console.log('wow you just clicked me');
        arrow7[0].style.display = 'none';
        arrow7[1].style.display = '';
        
    }else{
        console.log('i was unclicked')
        arrow7[1].style.display='none'
        arrow7[0].style.display=''
    }
}
function eventne6(){
    if (this.checked === true){
        console.log('wow you just clicked me');
        arrow6[0].style.display = 'none';
        arrow6[1].style.display = '';
        
    }else{
        console.log('i was unclicked')
        arrow6[1].style.display='none'
        arrow6[0].style.display=''
    }
}

function eventw(){
    if (this.checked === true){
        console.log('wow you just clicked me');
        menubtns[0].style.display = 'none';
        menubtns[1].style.display = '';
        
    }else{
        console.log('i was unclicked')
        menubtns[1].style.display='none';
        menubtns[0].style.display='';
    }
}




function eventne(){
    if (this.checked === true){
        console.log('wow you just clicked me');
        arrows2[0].style.display = 'none';
        arrows2[1].style.display = '';
        
    }else{
        console.log('i was unclicked')
        arrows2[1].style.display='none'
        arrows2[0].style.display=''
    }
}


