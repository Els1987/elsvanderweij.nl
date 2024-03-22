"use strict";
 
 // Get the navbar and sidebar
 let sidebar = document.getElementById("sidebar");
 let sidebarhome = document.getElementById("sidebarhome");






 let screensize = "";
 let navbar = document.getElementById("navbar");
 let stick = document.getElementById("stick");
 let menulogo = document.getElementById("menulogo");


   // Get the offset position of the navbar and sidebar
 let stickysb = sidebar.offsetTop;
 let sticky = navbar.offsetTop;

   // When the user scrolls the page, execute myFunction
  window.onscroll=function(){mySidebar()};



 // Add the sticky class to the navbar and sidebar when you reach its scroll position. Remove "sticky" when you leave the scroll position
 function mySidebar() {
   if (window.pageYOffset >= stickysb) {
    sidebar.setAttribute("class", "sidebar");
    sidebar.style.zIndex = "1000";
     navbar.setAttribute("class", "nav");
     sidebar.classList.add("stickysb");
     navbar.classList.add("sticky");
     stick.classList.add("sticky");
     menulogo.style.display = "flex";
     navbar.style.left = "3000px";
   }       
   else {
    sidebar.style.zIndex = "-1000";
     sidebar.classList.remove("stickysb");
     navbar.classList.remove("sticky");
     stick.classList.remove("sticky");
     sidebar.removeAttribute("class");
     navbar.removeAttribute("class");
     menulogo.style.display = "none";
     navbar.style.left = "0px";
   }
 } 





//muziek bij klikken logo, niet: "nr5", "nr6", "nr7","nr13", "nr14", "nr15", "nr9", "nr10",

 let myMusicarray = ["nr1goed", "nr2goed", "nr4", "nr8", 
  "nr11", "nr12", "nr16", "nr17", "nr18", "nr19", "nr21", "nr24"];
  

//muziek
 let muziek ="";
 let logos = document.getElementById("logo"); 

 logos.addEventListener("mousedown", speelmuziek);
 logos.addEventListener("mousedown", animatie);
 logos.style.cursor = "pointer";
 

 function speelmuziek(){
 let muziekkeuze = myMusicarray.sort(() => Math.random()-0.5);
 let keuze = muziekkeuze.pop();//de laatste eraf
 muziek = new Audio("./muziekwebsitegoed/" + keuze + ".mp3");
 muziek.play();
 if(myMusicarray==""){
 myMusicarray = ["nr1goed", "nr2goed", "nr4", "nr8", 
  "nr11", "nr12", "nr16", "nr17", "nr18", "nr19", "nr21", "nr24"];
 } 
 } 

//logo animatie bij laden

document.onload = animatie();

function animatie() {
logos.childNodes[0].animate([
// key frames

{ transform: 'scale(1, 1.05)' },
{ transform: 'rotate(2deg)' },
{ transform: 'rotate(-2deg)' },
{ transform: 'translateY(0px) translateX(0px)' },
], {
// sync options
duration: 1500,
iterations: 1
});
}


//menuscroll animatie bij klikken menulogo
menulogo.addEventListener("click", animatie2);


function animatie2() {
screensize=screen.width;

if(navbar.style.left != "0px"){
navbar.animate([
// key frames

{ transform: 'translateX(-950px)'},
{ transform: 'translateY(0px) translateX(0px)' }
], {
// sync options
duration: 500,
iterations: 1
});
navbar.style.left = "0px";
}

else
if(screensize > 1023)
{   navbar.animate([
    // key frames
    
    //{ transform: 'translateX(10px)'},
    { transform: 'translateX(950px)'},
    { transform: 'translateY(0px) translateX(0px)' }
    ], {
    // sync options
    duration: 500,
    iterations: 1
    });
    navbar.style.left = "-950px";
    }
else 
if (screensize < 1024)
{   navbar.animate([
    // key frames
    
    //{ transform: 'translateX(10px)'},
    { transform: 'translateX(-1250px)'},
    { transform: 'translateY(0px) translateX(0px)' }
    ], {
    // sync options
    duration: 500,
    iterations: 1
    });
    navbar.style.left = "-1250px";
    }
}


/*submenu mobiel*/

let submenu = document.getElementsByClassName("submenu");
let mediasubmenu = document.getElementById("media");
mediasubmenu.addEventListener("click", opensubmenu);

function opensubmenu(){
screensize=screen.width;
if(screensize < 768){
submenu[0].style.display = "block";
}
else{}
}
