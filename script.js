 moveent = 0;
 box1act = false;
 box2act = false;
 box3act = false;
 box4act = false;
 box5act = false;
 box6act = false;
 box7act = false;
 box8act = false;
 box9act = false;
 box1oc = 3 ;
 box2oc = 3 ;
 box3oc = 3 ;
 box4oc = 3 ;
 box5oc = 3 ;
 box6oc = 3 ;
 box7oc = 3 ;
 box8oc = 3 ;
 box9oc = 3 ;

document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Your turn</b>";

function box1(){
    if (moveent == 0  && box1act == false){
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Ai Turn</b>";
        document.getElementById("box1").style.background ="url(0.png)";
        box1act = true ;
        console.log("sucess")
        moveent = 1;
        box1oc = 0;
        ai()
        check()
    }
    else{
      console.log("error")}

    
}
function box2(){
  if (moveent == 0  && box2act == false){
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Ai turn</b>";
    document.getElementById("box2").style.background ="url(0.png)";
    moveent = 1;
      box2act = true ;
      console.log("sucess")
      box2oc = 0;
      ai()
      check()
  }
  else{
    console.log("error")}

  
}
function box3(){
  if (moveent == 0  && box3act == false){
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Ai turn</b>";
    document.getElementById("box3").style.background ="url(0.png)";
    moveent = 1;
      box3act = true ;
      console.log("sucess")
      box3oc = 0;
      ai()
      check()
  }
  else{
    console.log("error")}

  
}
function box4(){
  if (moveent == 0  && box4act == false){
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Ai turn</b>";
    document.getElementById("box4").style.background ="url(0.png)";
    moveent = 1;
      box4act = true ;
      console.log("sucess")
      box4oc = 0;
      ai()
      check()
      
  }
  else{
    console.log("error")}

  
}
function box5(){
  if (moveent == 0  && box5act == false){
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Ai turn</b>";
    document.getElementById("box5").style.background ="url(0.png)";
    moveent = 1;
      box5act = true ;
      console.log("sucess")
      box5oc = 0;
      ai()
      check()
  }
  else{
    console.log("error")}

  
}
function box6(){
  if (moveent == 0  && box6act == false){
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Ai turn</b>";
    document.getElementById("box6").style.background ="url(0.png)";
    moveent = 1;
    box6oc = 0;

      box6act = true ;
      console.log("sucess")
      ai()
      check()
      
  }
  else{
    console.log("error")}

  
}
function box7(){
  if (moveent == 0  && box7act == false){
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Ai turn</b>";
    document.getElementById("box7").style.background ="url(0.png)";
    moveent = 1;
      box7act = true ;
      console.log("sucess")
      box7oc = 0;
      ai()
      check()
  }
  else{
    console.log("error")}

  
}
function box8(){
  if (moveent == 0  && box8act == false){
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Ai turn</b>";
    document.getElementById("box8").style.background ="url(0.png)";
    moveent = 1; 
    box8oc = 0;
    
      box8act = true ;
      console.log("sucess")
      ai()
      check()
  }
  else{
    console.log("error")}

  
}
function box9(){
  if (moveent == 0  && box9act == false){
    box9oc = 0;
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Ai turn</b>";
    document.getElementById("box9").style.background ="url(0.png)";
       moveent = 1;
      box9act = true ;
      console.log("sucess")
      
      ai()
      check()

  }
  else{
    console.log("error")}

  
}


function ai(){
rand = Math.floor((Math.random()*9) + 1);


if(rand == 9  ){
 if( box9act == true ){ ai()}



  else{
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Your turn</b>";

    box9oc = 1;
    box9act = true;
    moveent = 0;
    document.getElementById("box9").style.background ="url(X.png)";
    document.getElementById("box9").style.backgroundSize ="250px 250px";
    check()

  
  }

  


}



else if(rand == 8  ){
  if( box8act == true ){ ai()}
   else{
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Your turn</b>";

    box8oc = 1;

     box8act = true;
     moveent = 0;
     document.getElementById("box8").style.background ="url(X.png)";
     document.getElementById("box8").style.backgroundSize ="250px 250px";
     check()
 
   
   }
 
   
 
 
 }



else if(rand == 7  ){
  if( box7act == true ){ ai()}
  
   else{
    document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Your turn</b>";
   
    box7oc = 1;
  
     box7act = true;
     moveent = 0;
     document.getElementById("box7").style.background ="url(X.png)";
     document.getElementById("box7").style.backgroundSize ="250px 250px";
     check()
   
   }}

   else if(rand == 6  ){
    if( box6act == true ){ ai()}
     else{
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Your turn</b>";

      box6oc = 1;

       box6act = true;check()
       moveent = 0;
       document.getElementById("box6").style.background ="url(X.png)";
       document.getElementById("box6").style.backgroundSize ="250px 250px";check()
   
     
     }}

     else if(rand == 5  ){
      if( box5act == true ){ ai()}
       else{
        document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Your turn</b>";

        box5oc = 1;

         box5act = true;
         moveent = 0;
         document.getElementById("box5").style.background ="url(X.png)";
         document.getElementById("box5").style.backgroundSize ="250px 250px";
         check()
     
       }}

       else if(rand == 4  ){
        if( box4act == true ){ ai()}
         else{
          document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Your turn</b>";

          box4oc = 1;

           box4act = true;
           moveent = 0;
           document.getElementById("box4").style.background ="url(X.png)";
           document.getElementById("box4").style.backgroundSize ="250px 250px";
           check()
         
         }}
         else if(rand == 3  ){
          if( box3act == true ){ ai()}
           else{
            document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Your turn</b>";

            box3oc = 1;

             box3act = true;
             moveent = 0;
             moveent = 0;
             document.getElementById("box3").style.background ="url(X.png)";
             document.getElementById("box3").style.backgroundSize ="250px 250px";
             check()
           
           }}
         
           else if(rand == 2  ){
            if( box2act == true ){ ai()}
             else{
              document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy) : <b>Your turn</b>";check()
       
              box2oc = 1;

               box2act = true;
               moveent = 0;
               document.getElementById("box2").style.background ="url(X.png)";
               document.getElementById("box2").style.backgroundSize ="250px 250px";check()
           
             
             }}

             else if(rand == 1  ){
              if( box1act == true ){ ai()}
               else{
                box1oc = 1;
                document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>Your turn</b> ";

                 box1act = true;
                 moveent = 0;
                 document.getElementById("box1").style.background ="url(X.png)";
                 document.getElementById("box1").style.backgroundSize ="250px 250px";check()
             
               
               }
              

              }
             
           check()

       
       
       }
     
       
     
     
     
   
     
   function check(){

horizontal()
vertical()
diga()
  

    


  
 if(box1act == true && box2act == true && box3act == true && box4act == true && box5act == true && box6act == true && box7act == true && box8act == true && box9act == true){
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>Tie</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
    
    
   }
   


function horizontal(){
  if (box1act == true&& box2act == true && box3act == true){
    if (box1oc == 0 && box2oc == 0 && box3oc == 0 ){
      document.getElementById("box1").style.opacity = "1"; 
      document.getElementById("box2").style.opacity ="1";      
      document.getElementById("box3").style.opacity ="1";
      document.getElementById("box1").style.backgroundColor = "white";
      document.getElementById("box2").style.backgroundColor = "white";
      document.getElementById("box3").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Win</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
    else if (box1oc == 1 && box2oc == 1 && box3oc == 1){
      document.getElementById("box1").style.opacity = "1"; 
      document.getElementById("box2").style.opacity ="1";      
      document.getElementById("box3").style.opacity ="1";
      document.getElementById("box1").style.backgroundColor = "white";
      document.getElementById("box2").style.backgroundColor = "white";
      document.getElementById("box3").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Lost</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
     
    }
  }
if (box4act == true&& box5act == true && box6act == true){
    if (box4oc == 0 && box5oc == 0 && box6oc == 0 ){
      document.getElementById("box4").style.opacity = "1"; 
      document.getElementById("box5").style.opacity ="1";      
      document.getElementById("box6").style.opacity ="1";
      document.getElementById("box4").style.backgroundColor = "white";
      document.getElementById("box5").style.backgroundColor = "white";
      document.getElementById("box6").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Win</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
    else if (box4oc == 1 && box5oc == 1 && box6oc == 1){
      document.getElementById("box4").style.opacity = "1"; 
      document.getElementById("box5").style.opacity ="1";      
      document.getElementById("box6").style.opacity ="1";
      document.getElementById("box4").style.backgroundColor = "white";
      document.getElementById("box5").style.backgroundColor = "white";
      document.getElementById("box6").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Lost</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
  }
if(box7act == true&& box8act == true && box9act == true){
    if (box7oc == 0 && box8oc == 0 && box9oc == 0 ){
      document.getElementById("box7").style.opacity = "1"; 
      document.getElementById("box8").style.opacity ="1";      
      document.getElementById("box9").style.opacity ="1";
      document.getElementById("box7").style.backgroundColor = "white";
      document.getElementById("box8").style.backgroundColor = "white";
      document.getElementById("box9").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Win</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
    else if (box7oc == 1 && box8oc == 1 && box9oc == 1){
      document.getElementById("box7").style.opacity = "1"; 
      document.getElementById("box8").style.opacity ="1";      
      document.getElementById("box9").style.opacity ="1";
      document.getElementById("box7").style.backgroundColor = "white";
      document.getElementById("box8").style.backgroundColor = "white";
      document.getElementById("box9").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Lost</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
  }

}


function vertical(){
  if (box1act == true && box4act == true && box7act == true){
    if (box1oc == 0 && box4oc == 0 && box7oc == 0 ){
      document.getElementById("box1").style.opacity = "1"; 
      document.getElementById("box4").style.opacity ="1";      
      document.getElementById("box7").style.opacity ="1";
      document.getElementById("box1").style.backgroundColor = "white";
      document.getElementById("box4").style.backgroundColor = "white";
      document.getElementById("box7").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Win</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
    if (box1oc == 1 && box4oc == 1 && box7oc == 1 ){
      document.getElementById("box1").style.opacity = "1"; 
      document.getElementById("box4").style.opacity ="1";      
      document.getElementById("box7").style.opacity ="1";
      document.getElementById("box1").style.backgroundColor = "white";
      document.getElementById("box4").style.backgroundColor = "white";
      document.getElementById("box7").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Lost</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    
    }
  }
  else if (box2act == true && box5act == true && box8act == true){
    if (box2oc == 0 && box5oc == 0 && box8oc == 0 ){
      document.getElementById("box2").style.opacity = "1"; 
      document.getElementById("box5").style.opacity ="1";      
      document.getElementById("box8").style.opacity ="1";
      document.getElementById("box2").style.backgroundColor = "white";
      document.getElementById("box5").style.backgroundColor = "white";
      document.getElementById("box8").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Win</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
    if (box2oc == 1 && box5oc == 0 && box8oc == 0){
      document.getElementById("box2").style.opacity = "1"; 
      document.getElementById("box5").style.opacity ="1";      
      document.getElementById("box8").style.opacity ="1";
      document.getElementById("box2").style.backgroundColor = "white";
      document.getElementById("box5").style.backgroundColor = "white";
      document.getElementById("box8").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Lost</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
  }
  else if (box3act == true && box6act == true && box9act == true){
    if (box3oc == 0 && box6oc == 0 && box9oc == 0 ){
      document.getElementById("box3").style.opacity = "1"; 
      document.getElementById("box6").style.opacity ="1";      
      document.getElementById("box9").style.opacity ="1";
      document.getElementById("box3").style.backgroundColor = "white";
      document.getElementById("box6").style.backgroundColor = "white";
      document.getElementById("box9").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Win</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
    if (box3oc == 1 && box6oc == 1  && box9oc == 1 ){
      document.getElementById("box3").style.opacity = "1"; 
      document.getElementById("box6").style.opacity ="1";      
      document.getElementById("box9").style.opacity ="1";
      document.getElementById("box3").style.backgroundColor = "white";
      document.getElementById("box6").style.backgroundColor = "white";
      document.getElementById("box9").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Lost</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
  }
 
  


}
function diga(){
  
  if (box1act == true && box5act == true && box9act == true){
    if (box1oc == 0 && box5oc == 0 && box9oc == 0 ){
      document.getElementById("box1").style.opacity = "1"; 
      document.getElementById("box5").style.opacity ="1";      
      document.getElementById("box9").style.opacity ="1";
      document.getElementById("box1").style.backgroundColor = "white";
      document.getElementById("box5").style.backgroundColor = "white";
      document.getElementById("box9").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Win</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
    if (box1oc == 1 && box5oc == 1 && box9oc == 1){
      document.getElementById("box1").style.opacity = "1"; 
      document.getElementById("box5").style.opacity ="1";      
      document.getElementById("box9").style.opacity ="1";
      document.getElementById("box1").style.backgroundColor = "white";
      document.getElementById("box5").style.backgroundColor = "white";
      document.getElementById("box9").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Lost</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
  }
  
  else if (box3act == true && box5act == true && box7act == true){
    if (box3oc == 0 && box5oc == 0 && box7oc == 0 ){
      document.getElementById("box3").style.opacity = "1"; 
      document.getElementById("box5").style.opacity ="1";      
      document.getElementById("box7").style.opacity ="1";
      document.getElementById("box3").style.backgroundColor = "white";
      document.getElementById("box5").style.backgroundColor = "white";
      
      document.getElementById("box7").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Win</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
    if (box3oc == 1 && box5oc == 1 && box7oc == 1 ){
      document.getElementById("box3").style.opacity = "1"; 
      document.getElementById("box5").style.opacity ="1";      
      document.getElementById("box7").style.opacity ="1";
      document.getElementById("box3").style.backgroundColor = "white";
      document.getElementById("box5").style.backgroundColor = "white";
      document.getElementById("box7").style.backgroundColor = "white";
      document.getElementById("whosemove").innerHTML = "Tic Tac Toe AI (Easy): <b>You Lost</b> <button btn btn-success onclick='Reset()'> Reset</button> ";
    }
   
  }
}
function Reset(){
  location.reload()
}