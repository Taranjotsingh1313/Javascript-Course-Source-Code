let btn = document.querySelector("button");
btn.addEventListener("click",function (){
    let h1 = document.getElementById("h1");
     if (h1.style.display == "none") {
                h1.style.display = "block";
     }
     else {
                h1.style.display = 'none';
        }
})