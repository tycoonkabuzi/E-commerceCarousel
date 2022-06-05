const hambourger=document.querySelector(".header__nav img");
const nav=document.querySelector(".header__nav");
const menu=document.querySelector(".header__menu");
const fermer=menu.querySelector(".header__menu-contenu img");
const menuContenu=document.querySelector(".header__menu-contenu");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
let result=document.querySelector(".section__howMany p");
console.log(result);
hambourger.addEventListener("click",function(){
    menu.classList.toggle("close")
    menuContenu.classList.toggle("trigger");
});
fermer.addEventListener("click",function(){
    menu.classList.remove("close")
    menuContenu.classList.remove("trigger");
});
plus.addEventListener("click", function(){
    let value=result.innerHTML;
    ++value
    result.innerHTML= value;
});
minus.addEventListener("click", function(){
    let value=result.innerHTML;
    --value
    if (value<0){
        value=0;
    }
    result.innerHTML= value;
});