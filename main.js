// ==UserScript==
// @name         Custom canvas icons
// @version      2
// @description  By Simon
// @match				 https://canvas.kth.se/
// @grant        none
// ==/UserScript==

/*
 * Modify this code in accordance with your needs, see this as a general guide.
 * I could in theory have made a more user friendly function that just changes 
 * the icon automatically but idk if anyone other than me will ever use this so
 * it has not been prioritized.
 */

var image1 = "https://raw.githubusercontent.com/SimonCantCode/insanely-low-iq-userscripts/refs/heads/main/media/screaming_on_floor_CROPPED.jpg"

// Initial wait for "load"
window.addEventListener('load', function() {

// Delay so it doesnt run before site has finished loading.
setTimeout(function() {
  
  // for loop is optional, I wanted it for my setup.
  // i is which course to replace it for. 0 is the first one (top left).
  for (let i = 0; i < 4; i++) {
    
    // Replace already existing cover image
  	document.getElementsByClassName("ic-DashboardCard__header_image")[i].style = 'background-image: url("' + image1 + '");'
  }
  
  // If it doesnt already have a cover image
  document.getElementsByClassName("ic-DashboardCard__header_hero")[1].style = 'background-image: url("' + image1 + '"); background-size: cover;'
  
}, 1500); // If you have slower internet and it doesnt load, you can always increase the delay.
}, false);

