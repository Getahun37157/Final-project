
//Global variables
var answer= document.querySelector("#answer p");
var heading= document.querySelector("#answer h2");
//Hamburger menu fuction

function menu() {
   var navlinks= document.getElementById("nav-links");
   var menuicon= document.getElementById("icon");
    if (navlinks.style.display==="block"){
        navlinks.style.display = "none";
        menuicon.style.color = "#2a1f14";

    } else{
    navlinks.style.display="block";
    menuicon.style.color= "#2a1f14";

   }
}

// jquaery for hero image to consume the header window space
$(document).ready(function(){
    $('.hero').height($(window).height());
});

//Function to display the first answer
function    ans1(){
    heading.style.display="block";
    answer.textContent="Get Fruit market provides organic and freesh fruits and vegetables.";
}

//Function to display the second answer
 function    ans2(){
    heading.style.display="block";
    answer.textContent="yes we do online order with fast delivery.";

  }

//Function to display the third answer
 function    ans3(){
    heading.style.display="block";
    answer.textContent="You can get discount and get gifts cards.";
 }

 //Function to display the fourth answer
 function    ans4(){
    heading.style.display="block";
    answer.textContent="clickg a contact page and register there.";

 }
