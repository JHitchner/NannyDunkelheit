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
  var body =document.getElementsByTagName("body");
  var musicBox =document.getElementById("musicBox");
  var storm =document.getElementById("storm");
  var nannyAni = document.getElementById("nanny");
  var children =document.getElementById("children1");
  var creak =document.getElementById("creak");
  var knock =document.getElementById("knock");
  var raven =document.getElementById("raven");
  var scratches =document.getElementById("scratches");
  var nannyShadowSprite =document.getElementById("nannyShadow_sprite");
  var spriteBtn = document.getElementById("sprite");
  var mom = document.getElementById("mom");
  var shadow =document.getElementById("shadow");
  var main =document.getElementById("main");
  var whisperOpen=document.getElementById("whisper_open");
var openBG=document.getElementById("bg1");
var deadHead =document.getElementById("bg6");
var nannyPiper =document.getElementById("nanny_piper");
var stairs =document.getElementById("stairs");
var nannyPiper2 =document.getElementById("nannyPiper2");
var hall =document.getElementById("downHall");
var lightBtn =document.getElementById("light");
var lightsOut =document.getElementById("lightsOut");
var transform =document.getElementById("transform");
var bgMove =document.getElementById("bg7");
var transFormWav =document.getElementById("transformWav");
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
// Animation Triggers By Scrollbar Position
  musicBox.play();
  scene.onscroll=function(){
    if (scene.scrollLeft < 1700 && scene.scrollLeft > 1600){
      console.log("woo");
      nannyAni.style.animationPlayState= "running";
      musicBox.pause();
      storm.play();
    }
    if (scene.scrollLeft < 2500 && scene.scrollLeft > 2400){
      main.play();
      console.log("bam");
    }
    if (scene.scrollLeft < 4000 && scene.scrollLeft > 3900){
      main.play();
      console.log("bam");
    }
    if (scene.scrollLeft < 6980 && scene.scrollLeft > 6880){
      nannyPiper.style.animationPlayState = "running";
      stairs.play();
    }
    if (scene.scrollLeft < 7800 && scene.scrollLeft > 7700){
      nannyPiper2.style.animationPlayState = "running";
      main.pause();
      downHall.play();
      creak.play();
      window.setTimeout(function() {
        stairs.play();
      }, 3000);
    }
  }
  spriteBtn.addEventListener("click", function(){
    nannyShadowSprite.style.animationPlayState = "running";
  })

  nannyAni.addEventListener("animationend", pageOne);
// Remove Block,Trigger HomePage Animtion and allow scroll
  proceedBtn.addEventListener("click", function(){
    proceedBtn.style.display = "none";
    darknessAni.style.animationPlayState = "running";
    window.setTimeout(function() {
      blockY.style.display = "none";
      openBG.style.background = "url('images/homePageNanny2.jpg') center center no-repeat";
    }, 2000);
    scene.style.whiteSpace = "nowrap"
    creak.play();
    whisperOpen.play();
    console.log("clicked");
  });

  buttonStart.addEventListener("click", function(){
    knock.play();
    window.setTimeout(function() {
      mom.style.animationPlayState = "running"
      shadow.style.animationPlayState = "running"
      shadow.style.display ="block";
    }, 2000);
    console.log("I was clicked");
  });

lightBtn.addEventListener("click", function(){
  console.log("I was so clicked");
  lightBtn.style.display = "none";
  lightsOut.style.display = "block";
  transform.style.animationPlayState ="running";
  bgMove.style.animationPlayState ="running";
  transFormWav.play();
});


});


// Page 4,5, 6, 7, 8
// Page 6,7,8 - 6 and 5 with animations
// Page 9,10,11 - 7 and 8 with Animations
//  Page  10 8 and 9 with animations
//  Page 11 animations, add sound
//  Animation tweaks, bug fixes, music
//
