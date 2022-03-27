let addBtn = document.getElementById("add");
let notesContainer = document.getElementById("notesContainer");
let deleteAll = document.getElementById("deleteAll");
showNotes()
addBtn.addEventListener("click",function (){
    let title = document.getElementById("title");
    let note = document.getElementById("note");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        let noteObj = []
        noteObj.push({title:title.value,note:note.value})
        localStorage.setItem('notes',JSON.stringify(noteObj))
        title.value = " ";
        note.value = " ";
    }
    else{
        let noteObj = JSON.parse(localStorage.getItem("notes"));
        noteObj.push({title:title.value,note:note.value})
        localStorage.setItem('notes',JSON.stringify(noteObj))
        title.value = " ";
        note.value = " ";
    }
    showNotes()
})

function showNotes(){
    let html = "";
    let notes = localStorage.getItem("notes");
    console.log(notes);
    if(notes == null){
        notesContainer.innerHTML = '<h1>Please Add Notes</h1>'
    }
    else{
      let noteObj = JSON.parse(localStorage.getItem("notes"));  
      if(noteObj.length == 0){
          notesContainer.innerHTML = "<h1>No Item</h1>"
      }
      else{
      console.log(noteObj.length);
      noteObj.forEach((element,index) => {
          html += `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.note}</p>
                            <button href="#" onclick="Delete(this.id)" id="${index}"
                                class="btn btn-danger deleteBtn">Delete</button>
                        </div>
                    </div>`
      });
       notesContainer.innerHTML = html
    }
}
   
}

function Delete(id){
     let title = document.getElementById("title");
    let note = document.getElementById("note");
    title.value = " ";
    note.value = " ";
    let noteObj = JSON.parse(localStorage.getItem("notes"));
    noteObj.splice(id,1);
    localStorage.setItem('notes',JSON.stringify(noteObj))
    showNotes()
}


deleteAll.addEventListener("click",function(){
    localStorage.clear()
    showNotes()
})

// template literals in javascript

// let name = "codewithsingh"
// let full_name = `Name of student is  ${name}`
// console.log(full_name);