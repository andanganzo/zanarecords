let navDiv = document.querySelector('.nav-div');
var menuBarButton = document.querySelector('.menuBar-button');
let onOff = false;
function openCloseMenu() {
  

if (navDiv && !onOff) {
    navDiv.innerHTML = `
  
  <div class="navContainer"> 
      <button class="closeMenuBarButton" onclick="
      
          if(navDiv && onOff){
              navDiv.innerHTML = '';
              onOff = false;
          }
          menuBarButton.style='opacity: 1';
      ">X</button>
  
      <nav class='nav-class' id='nav-id'>
      <a href='#garrett-morgan'>Garret Augustus Morgan</a><br><br>

      <a href='#tim-berners'>Tim Berners-Lee</a><br><br>

      <a href='#Gladys_West'>Gladys Mae West</a><br><br>

      <a href='#Marie_Van_Brittan_Brown'>Marie Van Brittan Brown</a><br><br>
      
      <a href='#charles-Babbage'>Charles Babbage</a><br><br>

      <a href='#Frederick_McKinley_Jones'>Frederick McKinley Jones</a><br><br>

      <a href='#alexander-miles'>Alexander Miles</a><br><br>

      <a href='lewis-lamer.html'>Lewis Latimer</a><br><br>

      <a href='#grace-hoppe'>Grace Hopper</a><br><br>
      </nav> 
  </div>`; onOff = true;
  
  } 
}


var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

/* if scrolling down, let it scroll out of view as normal */
if (prevScrollpos <= currentScrollPos ){
headerDiv.classList.remove("fixedToTop");
headerDiv.style.top ="-7.2rem";
}
/* otherwise if we're scrolling up, fix the nav to the top */
else{  
headerDiv.classList.add("fixedToTop");
headerDiv.style.top = "0";
}

prevScrollpos = currentScrollPos;
}
