'use strict';

window.onload = function() {
  const bat = new Audio("金属バットで打つ1.mp3");
            
 document.querySelectorAll("a").forEach(function(a){

   a.addEventListener('click',()=>{
     bat.play();  
 });


  
  });
