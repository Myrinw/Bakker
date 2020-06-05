const winkelwagen = document.querySelector('.check');
const afrekenen = document.querySelector('.afrekenen');
const voorbeelditem =document.querySelector('.categorie__grid-box--brood');
const list = document.querySelector('.items');
const background = document.getElementById('aanbevolen__background');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');
let count = 1;
let bount = 2

winkelwagen.addEventListener('click', function(){
    
    afrekenen.style.display = "block";
})


voorbeelditem.addEventListener('click', function(){
    let output = '<li>lekkeh bloodje 95 cent</i>';
    list.innerHTML = output;
})

setInterval(() => {
    count++;
    if(count === 4){
        count = 1;
    }
    console.log('blablaad');
    bg1.style.opacity = '0';
    bg2.style.opacity = '0';
    bg3.style.opacity = '0';
    document.querySelector(`.bg-${count}`).style.opacity = '1';
}, 7000);