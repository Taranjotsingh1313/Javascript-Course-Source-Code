let img = document.getElementById("bulb");
img.addEventListener("click",function(){
    if(img.getAttribute("src") == "./light bulb off.png"){
        img.setAttribute("src","./light bulb on.png")
    }
    else{
        img.setAttribute("src","./light bulb off.png")
    }
})