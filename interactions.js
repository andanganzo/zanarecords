let navDiv = document.querySelector('.nav-div');
var menuBarButton = document.querySelector('.menuBar-button');
var logoH1 = document.querySelector('.logoH1');
var inventorListNav = document.querySelector('.inventorListNav');
let onOff = false;
var allInventors =  `

    <div class="menu-Inventor-container">
        <div class="BackCloseMenuBarButton-container">
            <button class="backMenuBarButton" onclick="
            openCloseMenuHome();

            "><img src="images/vecteezy_arrow-left-vector-icon-design_15001880-1.jpg" alt="">
            </button>


            <button class="closeMenuBarButton" onclick="
                if(navDiv && onOff){
                    navDiv.innerHTML = '';
                    onOff = false;
                }
                menuBarButton.style='opacity: 1';
                logoH1.style='opacity: 1';
                ">X</button>
        </div>

        <nav class='inventorListNav' id='nav-id'>
            <a href='garrett-morgan.html'>Garret Augustus Morgan</a><br><br>

            <a href='tim-berners.html'>Tim Berners-Lee</a><br><br>

            <a href='gladys-west.html'>Gladys Mae West</a><br><br>

            <a href='marie-van-brittan.html'>Marie Van Brittan Brown</a><br><br>

            <a href='charles-babbage.html'>Charles Babbage</a><br><br>

            <a href='frederic-mckinley.html'>Frederick McKinley Jones</a><br><br>

            <a href='alexandre-miles.html'>Alexander Miles</a><br><br>

            <a href='lewis-lamer.html'>Lewis Latimer</a><br><br>

            <a href='grace-hopper.html'>Grace Hopper</a><br><br>
        </nav> 
    </div>`;

function openCloseMenu() {
  

if (navDiv && !onOff) {
    navDiv.innerHTML = `
  <!--for disappiaring menu button and appear navLinks-->
  <div class="nav-Mother-Container"> 
      <button class="closeMenuBarButton" onclick="
      
          if(navDiv && onOff){
              navDiv.innerHTML = '';
              onOff = false;
          }
          menuBarButton.style='opacity: 1';
          logoH1.style='opacity: 1';
      ">X</button>

      <nav class='inventorListNav' id='nav-id'>
      <a href='garrett-morgan.html'>Garret Augustus Morgan</a><br><br>

      <a href='tim-berners.html'>Tim Berners-Lee</a><br><br>

      <a href='gladys-west.html'>Gladys Mae West</a><br><br>

      <a href='marie-van-brittan.html'>Marie Van Brittan Brown</a><br><br>
      
      <a href='charles-babbage.html'>Charles Babbage</a><br><br>

      <a href='frederic-mckinley.html'>Frederick McKinley Jones</a><br><br>

      <a href='alexandre-miles.html'>Alexander Miles</a><br><br>

      <a href='lewis-lamer.html'>Lewis Latimer</a><br><br>

      <a href='grace-hopper.html'>Grace Hopper</a><br><br>
      </nav> 
  </div>`; onOff = true;
  
  } 
}


function openCloseMenuHome() {
  

    if (navDiv && !onOff) {
        navDiv.innerHTML = `
      <!--for disappiaring menu button and appear navLinks-->
      <div class="nav-Mother-Container"> 
          <button class="closeMenuBarButton" onclick="
          
              if(navDiv && onOff){
                  navDiv.innerHTML = '';
                  onOff = false;
              }
              menuBarButton.style='opacity: 1';
              logoH1.style='opacity: 1';
          ">X</button>

          <ul id="ulNav-Mother-Container">
            <li onclick="
                navDiv.innerHTML = allInventors;
            "><h3>Inventors           </h3>
            </li>
        </ul>
      </div>`; onOff = true;
      }
    }

    
    






// var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
// var headerDiv = document.querySelector("header");
// var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;

/* if scrolling down, let it scroll out of view as normal */
// if (prevScrollpos <= currentScrollPos ){
// headerDiv.classList.remove("fixedToTop");
// headerDiv.style.top ="-7.2rem";
// }
/* otherwise if we're scrolling up, fix the nav to the top */
// else{  
// headerDiv.classList.add("fixedToTop");
// headerDiv.style.top = "0";
// }

// prevScrollpos = currentScrollPos;
// }
