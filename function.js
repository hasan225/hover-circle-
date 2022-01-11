let circle =document.querySelector("#circle");
let text= document.querySelector(".text");

let hover =document.querySelector(".hover");

circle.addEventListener('mouseover', function(){
    if(!hover){
        circle.classList.add("hover")
          text.innerHTML="Hey Sup :)"
        
    }

})       
     
circle.addEventListener('mouseout', function(){
    if(circle.classList.contains("hover")){
        circle.classList.remove("hover")
          text.innerHTML="Thanks for hovering"
      
    }

})       
