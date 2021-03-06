function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //create deleteButton
    let deleteButton = document.createElement('button');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set deleteButton title
    deleteButton.textContent = 'Delete';

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //add delete button to li
    newLi.appendChild(deleteButton);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    //to-do deletion
    deleteButton.addEventListener('click', event => {
      event.target.parentNode.remove();
    });
  });
}


window.onload = function() {
  onReady();
}