
const up =document.getElementById("up");
const down =document.getElementById("down");
const play =document.getElementById("play");
const pause =document.getElementById("pause");
function up1(){
console.log("up")
};
function down1(){
  console.log("down")
};
// function play1(){
//   console.log("play")
// };
function pause1(){
  console.log("pause")
}


  //function to increse the minutes
  const min1=document.getElementById("minutes1")
  const min=document.getElementById("minutes")
  let seconds=15;
  function  uparraw(){
    var seconds = (seconds)+60;
    min.textContent=seconds
    
  }
 console.log(seconds)

  function countdwn(){
    const minutes = Math.floor(seconds/60);
    restseconds= seconds%60;
    if(restseconds<10){
      restseconds ="0"+restseconds
    }
    min.innerText=minutes + ":"+restseconds
    
   

    if(seconds>0){
      seconds--;
      
    }
    
   
      else  {
        min.innerText= "Time is Out "
        clearInterval(countdwn)
     
    }
    
  }
  function stop (){
  clearInterval(run)
  }
  var run =setInterval(countdwn,1000)
   function disableBtn(){
     if( countdwn){
       up.disable=true;
       down.disable=true;
       run.disable=true
     }
     else{
      up.disable=false;
      down.disable=false;
      run.disable=false
     }
   }
function pauseCount(){
  clearInterval(countdwn)

}
let startTime;
  up.addEventListener("click",uparraw)
  down.addEventListener("click",down1)
  play.addEventListener("click",function(){
    if(startTime ==undefined){
      startTime=setInterval(countdwn,1000)
    }
    else{
      alert("hi")
    }
  })
  pause.addEventListener("click",function(){
     
    stop() 
  })

  
    
  
  
  