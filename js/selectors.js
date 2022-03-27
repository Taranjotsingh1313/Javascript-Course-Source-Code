// getElementById()
// let h1 = document.getElementById("h1");
// console.log(h1);
// getElementsByClassName()
// let list = document.getElementsByClassName("list");
// Array.from(list).forEach(
//     function(element){
//         console.log(element.id);
//     }
// )
// querySelector()
// let h1 = document.querySelector(".list");
// console.log(h1);

// querySelectorAll()
let ul = document.querySelectorAll(".list");
// console.log(ul[1]);
Array.from(ul).forEach(function(element){
    console.log(element);
})