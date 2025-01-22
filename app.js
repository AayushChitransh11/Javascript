// const btn=document.getElementById("start-now");
// btn.style.cssText="background-color:#2015ff; bordor-radius:5rem ";


// const myList=document.querySelector(".hero--homepage");
// const classlist=myList.classList;
// classlist.add('new-hero');




// const cardList=document.querySelectorAll('.card');


// for(let i=0;i<cardList.length;i++){
//     cardList[i].classList.add("new-card");
// }



// document.addEventListener("click",function(){
//     console.log("This main page was clicked!");
// })

// // document.addEventListener("click",function(){
// //     const mainHeading=document.querySelector("h1");
// //     mainHeading.style.backgroundColor="red";
// // })

// const header=document.querySelector("h1");
// const originalText=header.textContent;
// const updatedText="Build an AR App";

// header.addEventListener("mouseover",function(){
//     header.textContent=updatedText;
// })

// header.addEventListener("mouseout",function(){
//     header.textContent=originalText;
// })

// document.addEventListener('keypress',function(){
//     console.log("removing the first child!");
//     document.querySelector("#contain-all").firstElementChild.remove();
// })


// function removelast(){
//     const heroClass=document.querySelector(".hero__module");
//     heroClass.lastElementChild.remove();
//     document.removeEventListener('click',removelast);
// }
// document.addEventListener('click',removelast);


// document.addEventListener('click', function () {
//     console.log('The document was clicked');
//  });
 
//  document.body.addEventListener('click', function () {
//      console.log('The body element was clicked');
//  });

document.addEventListener('click',function(event){
    console.log(event);
})