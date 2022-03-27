console.log("---IF ELSE ELSE IF FILE CONNECTED ");

let num = 5;

// if(condition){
//     code
// }

// if(num == 2){
//     console.log("Num Value Is 2");
// }else{
//     console.log("Num Value Is Not 2");
// }


let button = document.querySelector("button");
button.onclick = () =>{
    let input = document.querySelector("input");
    if(input.value == "CodeWithSingh"){
        console.log("Input Ki Value CodeWithSingh Hai")
    }
    else if(input.value == "Subscribe Kar Diya Hai"){
        console.log("User Had Subscribed Nachoo ");
    }
    else{
        console.log("Input ki value codewithsingh nhi hai");
    }
}


