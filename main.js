// ==UserScript==
// @name         Fysik 2 lore :skull:
// @version      1
// @description  By Simon
// @match https://ssis.instructure.com/
// @grant        none
// ==/UserScript==
// Ty Tobias

var fysik2 = "https://media.discordapp.net/attachments/950719755277463576/1177597607577657407/20231124_141217.jpg?ex=6573163c&is=6560a13c&hm=862168bf994c66d764bb002cc6710ae314966559cee0a32a3a97fd49b6c78e93&"
var gyarb = "https://media.discordapp.net/attachments/943172643710984222/1202968858097356800/gymansiearbetekursen.png?ex=65cf630d&is=65bcee0d&hm=5bea36abaf47741ac33f8540cee29eb33a7b0314b5a8405e8d4baf7feca8d321&"
var ma5 = "https://media.discordapp.net/attachments/950719755277463576/1216803937709981838/IMG_20240126_204937_012.jpg?ex=6601b7f9&is=65ef42f9&hm=cc56fadeab79b4c4ea552d82cfbab8f30dde921387c6ff6a24c7a5b30c0cc5a6&"


window.addEventListener('load', function() {
setTimeout(function() {
  document.getElementsByClassName("ic-DashboardCard__header_image")[0].style = 'background-image: url("' + ma5 + '");'
  document.getElementsByClassName("ic-DashboardCard__header_image")[1].style = 'background-image: url("' + fysik2 + '");'
  document.getElementsByClassName("ic-DashboardCard__header_image")[2].style = 'background-image: url("' + gyarb + '");'
}, 1500);
}, false);
