// Retrieve tasks and nextId from localStorage
var myModal = new bootstrap.Modal(document.getElementById('formModal'));
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;
const taskName = document.getElementById(`task-name`);
const taskDescription = document.getElementById(`task-description`);
const taskDueDate = document.getElementById(`due-date`);
const submitButton = document.getElementById(`submit-button`);

submitButton.addEventListener(`click`, function(event){
    event.preventDefault();
   const cardObj = createTaskCard(taskName,taskDescription,taskDueDate);
    $('#to-do').append(cardObj);
    makeCardsDraggable();
});

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return nextId++;

}

// // Todo: create a function to create a task card
function createTaskCard(taskName, taskDescription, taskDueDate) {
    const nextId = generateTaskId();
    return (
       `<div id="nextId-${nextId}" class="card border border-black draggable" style="width:18rem;">
           <div class="card-header text-dark fw-bold">${taskName.value}</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${taskDueDate.value}</li>
            <li class="list-group-item">${taskDescription.value}</li>
         </ul>
         <div><button type="button" class="btn btn-success" data-bs-dismiss="card">Completed</button></div>
       </div>`
    )
}

// // Todo: create a function to render the task list and make cards draggable
function renderTaskList(event) {

}
// // Todo: create a function to handle adding a new task
function handleAddTask(event) {

}

// // Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}
//TODO - Sortable List with sortable JS


// // Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}
// // Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// // Initialization function //
function makeCardsDraggable() {
    $(".draggable").draggable({
        containment: "#todo-cards",
        cursor: "move",
        revert: true // This will return the card to its original position if not dropped in a droppable area.
    });
}

function makeLanesDroppable() {
    $(".lane").droppable({
        accept: ".draggable",
        drop: function(event, ui) {
            ui.draggable.detach().appendTo($(this));
        }
    });
}

$(document).ready(function() {
    renderTaskList(); // Make sure this function actually renders tasks if any exist initially
    makeLanesDroppable();
    $('#submit-button').on('click', function() {
        createTaskCard(taskName, taskDescription, taskDueDate);
        $('#formModal').modal('hide'); // This will hide the modal after submitting
    });
});