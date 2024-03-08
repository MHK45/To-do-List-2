let theInput = document.querySelector(".add-task input");
let theButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-msg");
let taskCount = document.querySelector(".task-count span");
let taskCompleted = document.querySelector(".task-Completed span");
let btnAllDelete = document.querySelector(".btns .deleteAll");
let btnAllChecked = document.querySelector(".btns .checkedAll");

// Focus On Input Feild
window.onload = function(){
    theInput.focus();
}

//Adding The Tasks 
theButton.onclick = function(){
    if (theInput.value===''){
        console.log('is empty')
    }
    else{
      noTasksMsg.remove();

      // main span
      let mainSpan = document.createElement("span")
      let deleteBtn = document.createElement("span");

      let textMspan = document.createTextNode(theInput.value)
      let textBtn = document.createTextNode("Delete")

      mainSpan.appendChild(textMspan)
      mainSpan.className='task-box'

      deleteBtn.appendChild(textBtn)
      deleteBtn.className='delete'

      mainSpan.appendChild(deleteBtn)
       
      tasksContainer.appendChild(mainSpan)

      theInput.value = ' ';

      theInput.focus();
      

    }
}

document.addEventListener('click' , function(e){
    //delete task
    if(e.target.className== 'delete'){
         e.target.parentElement.remove()
    }
   if(e.target.classList.contains('task-box')){
    e.target.classList.toggle('finished')
   }
   theInput.focus()
   
}) 


btnAllDelete.onclick=function(){
     tasksContainer.remove()
     
}
btnAllChecked.onclick=(e) => {
   tasksContainer.style.textDecoration= "line-through"
}
