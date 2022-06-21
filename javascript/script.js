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
const carousel=document.querySelectorAll(".section__element");
const carouselHidden=document.querySelectorAll(".section__elementHidden");
const track=document.querySelector(".section__carousel-content");
const trackHidden=document.getElementById("trackHidden");
const selector=document.querySelector(".section__mark");
const markTarget=document.querySelectorAll(".section__markElement");
const markTargetHidden=document.querySelectorAll(".section__markElementHidden");
const prev=document.querySelector("div .section__direction--left");
const prevHidden=document.querySelector(" div .section__directionHidden--left");
const next=document.querySelector("div .section__direction--right");
const nextHidden=document.querySelector("div .section__directionHidden--right");
const active=document.querySelector(".active");
const close=document.querySelector(".section__close");
const hidden=document.querySelector(".section__hidden");
const selectorHidden=document.getElementById("markHidden");
//convert dom element to arrays
function arrayConvertor(domElement){
    let arrayDom=[];
    for(element of domElement){
        arrayDom.push(element);
        arrayDom;
    }
    return arrayDom;
}
function alignSameLine(domElement){//put all the images on the same line
    for(el in arrayConvertor(domElement)){
        arrayConvertor(domElement)[el].style.left=100*el+"%";
    }
}
// calling the functions accordingly.
alignSameLine(carousel);
alignSameLine(carouselHidden);

function mechanisme(elementDomPath,track,domElement, sideElement, situation){
    const active=elementDomPath; //1
    const elementToTarget=arrayConvertor(domElement).findIndex(element=>element===sideElement);
    track.style.transform="translateX(-"+100*elementToTarget+"%)";
    active.classList.remove(situation);
    sideElement.classList.add(situation);
}
prev.addEventListener("click",function(){
    const active=track.querySelector(".active"); 
    const prevActive=active.previousElementSibling;
    mechanisme(track.querySelector(".active"),track,carousel,prevActive,"active");

});
next.addEventListener("click",function(){
    const active=track.querySelector(".active"); 
    const nextActive=active.nextElementSibling;
   mechanisme(track.querySelector(".active"),track,carousel,nextActive,"active");
});
    
selector.addEventListener("click",function(e){
    const currentPicture=document.querySelector(".current");// here we create a mark which will be removed once we click on our target element.
    const elementTarget=e.target.closest('img');
    elementTarget.classList.add("current");
    currentPicture.classList.remove("current");
    mechanisme(currentPicture,track,markTarget,elementTarget);

});
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
track.addEventListener("click", function(){
    hidden.classList.toggle("hidden");
});
close.addEventListener("click", function(){
    hidden.classList.toggle("hidden");
});
selectorHidden.addEventListener("click",function(e){
    const currentPicture=document.querySelector(".current");
    const targetElement= e.target.closest('img');
    targetElement.classList.add("current");
    currentPicture.classList.remove("current");
    mechanisme(currentPicture,trackHidden,markTargetHidden,targetElement);
});
nextHidden.addEventListener("click", function(){
    const active=document.querySelector(".activeHidden");
    const nextElement=active.nextElementSibling;
    mechanisme(document.querySelector(".activeHidden"),trackHidden,carouselHidden,nextElement,"activeHidden");
});
prevHidden.addEventListener("click", function(){
    const active=document.querySelector(".activeHidden");
    const prevElement=active.previousElementSibling;
    mechanisme(document.querySelector(".activeHidden"),trackHidden,carouselHidden,prevElement,"activeHidden")
});