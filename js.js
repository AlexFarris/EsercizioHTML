var a=0;
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos1 = 0,p=350,alt=0;
    
    id = setInterval(frame, 1);
    function frame() {
      if(alt<=350){
        if (p==0) {
          if(pos1<0){
            if(a==50){
              p=350;a=0;
          }else{
            alt++;a++;elem.style.top=alt+"px";
          }
        }else{
          pos1--;
          elem.style.left = pos1 + "px"; }
        }else if(p==350){
          if(pos1>350){
            if(a==50){
              p=0;
              a=0;
            }else{
              alt++;a++;elem.style.top=alt+"px";}
          }else{
          pos1++; 
          elem.style.left = pos1 + "px"; 
          }
        }
      }else{
        
      }

  }
   
}