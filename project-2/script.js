let btn = document.querySelector("button");
btn.addEventListener("click",function (){
    let input = document.querySelector("input");
    document.body.style.backgroundColor = input.value;
})