let btn=document.querySelector("#begin");
let main=document.querySelector("#main");
let color=document.querySelectorAll(".child");
let score=document.querySelector("#score");
let high=document.querySelector("#highs");
let bgMusic= new Audio("bgMusic.mp3");
let boxCrash=new Audio("boxCrash.mp3");
let gameOver=new Audio("gameOver.mp3");
let highScore=new Audio("highScore.mp3");
let togle=document.querySelector("#play");
let first=document.querySelector("#first");
let second=document.querySelector("#second");
window.addEventListener("load",function(){
    bgMusic.load();
  boxCrash.load();
  gameOver.load();
  highScore.load();
});
// working of speaker button
let speaker=document.querySelector("#sound");
 bgMusic.loop=true;
 let isPlaying=true;
 speaker.addEventListener("touchstart",function(){
      if(isPlaying){
        bgMusic.pause();
        isPlaying=false;
        speaker.textContent="🔇";
      }else{
        bgMusic.play();
        isPlaying=true;
        speaker.textContent="🔊";
      };
 });
    let z=false;
    let s=0;
    let uarr=[];
    let sarr=[];
    let highs=0;
    //First phase of game here
    togle.addEventListener("click",function(){
     first.style.display="none";
     bgMusic.play();
      second.style.display="block";
     alert("Best Of Luck 😉")
    });
//All starts form here by clicking main button
btn.addEventListener("click",function(){
  if(isPlaying){
    bgMusic.play();
  };
  z=true;
  call();
});
   // call funtion for color generating
function call(){
      let x=start();    //calling generate random color to return
  sarr.push(x);     //color stored in system array
};

  // here test begin
 main.addEventListener("touchstart",function(event){  
  if(z){
   let check=true;
        let v=event.target.className;
         let c=event.target; 
        if(v==="child"){          //veryfying the actual bubbling source
             let crash=boxCrash.cloneNode();
        crash.play();
          uarr.push(window.getComputedStyle(c).backgroundColor);    
        if(sarr.length==uarr.length){     //verifying for check
        for(let i=0;i<sarr.length;i++){
             if(sarr[i]!==uarr[i]){       //verify the correct sequence
                check=false;
                break;
              };
            };
            if(check){    //verifying for end of check
              s++;
                score.textContent=s;
                uarr.length=0;
                call();
            }else {
              bgMusic.pause();
              gameOver.play();
              z=false;
                alert(`OOPs Wrong 🤦🏻...Sorry 😘 your score is ${score.textContent}`); //verify wrong guess
                if(s>highs){
                  highs=s;
                  high.textContent=s;
                   highScore.play();
                  alert("You Scored High");
                };
                s=0;
                score.textContent=0;
                uarr.length=0;
                sarr.length=0;
              }; 
        };
    };
  };
  });
  // color sequence generating 
function start(){
   let result=color[Math.floor(Math.random()*color.length)];
   let bg=window.getComputedStyle(result).backgroundColor;
   let count=0;
   let id=setInterval(()=>{      //interval for lightening
      result.style.backgroundColor="white";
      count++;
      if(count>5){          //check for interval limit
        clearInterval(id);
        result.style.backgroundColor=bg;
      };
   },300);
   return bg;
};
