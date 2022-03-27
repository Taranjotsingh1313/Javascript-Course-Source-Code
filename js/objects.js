console.log("Objects In Javascript");

// let Obj = {
//     name:"taranjot singh",
//     class:"No Class",
//     Roll_No:55
// }
// ACCESSING THE KEY VALUE OF OBJECT
// console.log(Obj['Roll_No'])

// console.log(Obj.Roll_No)


// let Obj = {
//     "name of":"CodeWithSingh",
//     address:{
//         houseNo : 55,
//         area:"earth"
//     }
// }
// console.log(Obj.address.houseNo);

//  let Obj = {
//     name:"taranjot singh",
//     class:"No Class",
//     Roll_No:55
// }
// ADDING PROPERTIES IN OBJECT
// Obj.schoolName = "School"
// console.log(Obj);

// LOOPING OBJECT
let Obj = {
    name:"taranjot singh",
    class:"No Class",
    Roll_No:55
}

for(let i in Obj){
    console.log(Obj[i]);
}