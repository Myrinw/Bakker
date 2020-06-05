const winkelwagen = document.querySelector('.check');
const afrekenen = document.querySelector('.afrekenen');
const voorbeelditem =document.querySelector('.categorie__grid-box--brood');
const list = document.querySelector('.items');
const background = document.getElementById('aanbevolen__background');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
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
    background.classList.remove('bg-1');
    background.classList.add('bg-2');
}, 6000);