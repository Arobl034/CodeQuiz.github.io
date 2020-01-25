/*var startButton=document.getElementById("start-btn");

startButton.addEventListener("click", startGame)

function startGame(){
    console.log("started")
}
*/

var second=0    
var interval=setInterval(function(){
    console.log(second);
    second++;
},1000);

setTimeout(function(){          
    clearInterval(interval);
    console.log("It Over!");
    second++;
},10000);