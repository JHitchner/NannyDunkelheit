document.addEventListener("DOMContentLoaded", function(event) {
  var test = document.getElementById("test");
  var scene = document.getElementById("scene_container");
  var buttonStart = document.getElementById("butt");
  var trialType = document.getElementById("scene1Type").textContent;
  var trialArray = trialType.split("");
  var show = document.getElementById("showType");
  var blockY = document.getElementById("nannyBlock");
  var proceedBtn = document.getElementById("startScroll");
  var darknessAni =document.getElementById("darkness");
  var body =document.getElementsByTagName("body")

// Function that prints the text of the story one character at a time.
function pageOne(){
   var i = 0;
   myVar = setInterval(function(){
    show.innerHTML += trialArray[i]
    if(i == trialArray.length-1){
       clearInterval(myVar);
     }
    i++;
  }, 100);
}
  //     window.onscroll=function(){
  //      if(window.pageXOffset >900){
  //    console.log("you have scrolled this far")
  //   //
  //   }
  // }

pageOne();

// Remove Block,Trigger HomePage Animtion and allow scroll
proceedBtn.addEventListener("click", function(){
  darknessAni.style.animationPlayState = "running";
  window.setTimeout(function() {
    blockY.style.display = "none";
  }, 2000)
  scene.style.whiteSpace = "nowrap"

  console.log("clicked");
});


  window.addEventListener("scroll", function(){
    console.log("poo");
  })



  // buttonStart.addEventListener("click", function(){
  //   test.style.animationPlayState = "running"
  //   console.log("I was clicked")
  // })


});
