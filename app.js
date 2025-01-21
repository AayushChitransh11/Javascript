const btn=document.getElementById("start-now");
btn.style.cssText="background-color:#2015ff; bordor-radius:5rem ";


const myList=document.querySelector(".hero--homepage");
const classlist=myList.classList;
classlist.add('new-hero');




const cardList=document.querySelectorAll('.card');


for(let i=0;i<cardList.length;i++){
    cardList[i].classList.add("new-card");
}
