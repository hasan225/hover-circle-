let circle =document.querySelector("#circle");

let hover =document.querySelector(".hover");

circle.addEventListener('mouseover', function(){
    if(!hover){
        circle.classList.add("hover")
    }

})       
     
circle.addEventListener('mouseout', function(){
    if(circle.classList.contains("hover")){
        circle.classList.remove("hover")
    }

})       
