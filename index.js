function fancyScroll() {

  let scrollvalue = document.documentElement.scrollTop;

    if(scrollvalue > window.innerHeight * 0.7){
      document.getElementById("h1-1").style = "margin: -55vw 4vw 0;";
      document.getElementById("h1-2").style = "margin-left: 6vw;";
      document.getElementById("box-intro-1").style = "opacity: 1; margin-top: 5vw;";
    }

    if(scrollvalue > window.innerHeight * 5.2){
      document.getElementById("h2-1").style = "margin-left: 3vw;";
      document.getElementById("h2-2").style = "margin-left: 5vw;";
      for(let i = 2; i < 7; i++){
        document.getElementById(`box-intro-${i}`).style = "opacity: 1; margin-top: 5vw;";
      }
    }
      
    if(scrollvalue > window.innerHeight){
      console.log('insert code here uwu')
    }
      
    if(scrollvalue > window.innerHeight){
      console.log('insert code here uwu')
    }
      
    if(scrollvalue > window.innerHeight){
      console.log('insert code here uwu')
    }

}
