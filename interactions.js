let navDiv = document.querySelector('.nav-div');//div located in html-header that will hold our menu
var menuBarButton = document.querySelector('.menuBar-button');//button located in html-header that holds menu icon
var logoH1 = document.querySelector('.logoH1');//img logo located in html-header
var inventorListNav = document.querySelector('.inventorListNav');//nav element formed in JS 
let onOff = false;//boolean that helps to track if menu is open or clossed
var allInventors =  `

    
    <div class="menu-Inventor-container">
    <!--contains buttons that will help user to menu and navigate back-->
        <div class="BackCloseMenuBarButton-container">

            <button class="backMenuBarButton" onclick="
            openCloseMenuHome();
            "><img src="images/vecteezy_arrow-left-vector-icon-design_15001880-1.jpg" alt="">
            </button>

            <!--condition that close menu-->
            <button class="closeMenuBarButton" onclick="
                if(navDiv && !onOff){
                    navDiv.innerHTML = '';
                    onOff = false;
                }
                <!--if menu is closed, then logo and menu button will reappear-->
                menuBarButton.style='opacity: 1';
                logoH1.style='opacity: 1';
                ">X</button>
        </div>

        <nav class='inventorListNav' id='nav-id'>
            <a href='garrett-morgan.html'><li>Garret Augustus Morgan</li></a><br><br>

            <a href='tim-berners.html'><li>Tim Berners-Lee</li></a><br><br>

            <a href='gladys-west.html'><li>Gladys Mae West</li></a><br><br>

            <a href='marie-van-brittan.html'><li>Marie Van Brittan Brown</li></a><br><br>

            <a href='charles-babbage.html'><li>Charles Babbage</li></a><br><br>

            <a href='frederic-mckinley.html'><li>Frederick McKinley Jones</li></a><br><br>

            <a href='alexandre-miles.html'><li>Alexander Miles</li></a><br><br>

            <a href='lewis-lamer.html'><li>Lewis Latimer</li></a><br><br>

            <a href='grace-hopper.html'><li>Grace Hopper</li></a><br><br>
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
      <a href='garrett-morgan.html'><li>Garret Augustus Morgan</li></a><br><br>

      <a href='tim-berners.html'><li>Tim Berners-Lee</li></a><br><br>

      <a href='gladys-west.html'><li>Gladys Mae West</li></a><br><br>

      <a href='marie-van-brittan.html'><li>Marie Van Brittan Brown</li></a><br><br>

      <a href='charles-babbage.html'><li>Charles Babbage</li></a><br><br>

      <a href='frederic-mckinley.html'><li>Frederick McKinley Jones</li></a><br><br>

      <a href='alexandre-miles.html'><li>Alexander Miles</li></a><br><br>

      <a href='lewis-lamer.html'><li>Lewis Latimer</li></a><br><br>

      <a href='grace-hopper.html'><li>Grace Hopper</li></a><br><br>
  </nav> 
  </div>`;  
  
  } 
}

//the function of home page menu
function openCloseMenuHome() {
  
    if (navDiv && !onOff) {
        navDiv.innerHTML = `
      <!--for disappiaring menu button and appear navLinks-->
      <div class="nav-Mother-Container"> 

      <!--creates new button that closes menu inside navDiv-->
          <button class="closeMenuBarButton" onclick="
              if(navDiv && !onOff){
                  navDiv.innerHTML = '';
              }
              <!--menu bar button and logo, will reappear-->
              menuBarButton.style='opacity: 1';
              logoH1.style='opacity: 1';
          ">X</button>

          <!--ul contains "id" that allows to navigate to allInventors-->
          <ul id="ulNav-Mother-Container">
            <li onclick="
                navDiv.innerHTML = allInventors;
            "><h3>Inventors</h3>
            </li>
            <li><h3>Intertainment</h3></li>
            <li><h3>Politics</h3></li>
        </ul>
      </div>`;
      }
    }
