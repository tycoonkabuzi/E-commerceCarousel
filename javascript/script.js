const hambourger=document.querySelector(".header__nav img");
const nav=document.querySelector(".header__nav");
const menu=document.querySelector(".header__menu");
const fermer=menu.querySelector(".header__menu-contenu img");
const menuContenu=document.querySelector(".header__menu-contenu");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const result=document.querySelector(".section__howMany p");
const panier=document.querySelector(".header__panier");
const contentuPanier=document.querySelector(".header__cart-content");
const empty=document.querySelector(".header__item1");
const filled=document.querySelector(".header__item2");
const submit=document.getElementById("submit");
const quantity=document.querySelector(".quantity");
const total=document.querySelector(".total");
const price=document.querySelector(".section__prices h1 span");
const notification=document.querySelector(".header__notification");
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
panier.addEventListener("click", function(){
    contentuPanier.classList.toggle("visible");
});
submit.addEventListener("click", function(){
    empty.classList.remove("header__item1--empty");
    filled.classList.toggle("header__item2--filled");
    notification.classList.toggle("visible");
   
    let jibu=result.innerHTML;
    notification.innerHTML="<p>"+jibu+"</p>";
    let prix=price.innerHTML;
    quantity.innerHTML=jibu;
    let global=jibu*prix;
    total.innerHTML=global;

});