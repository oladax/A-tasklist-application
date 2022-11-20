//accessing the ADDTASK INPUT
const task_input = document.getElementById("TASK");
const task_container = document.getElementById("tasks");
const edit_container = document.getElementById("edit");
const delete_container = document.getElementById("delete");
const h2 = document.getElementById("h2");

//Calling the ADDTASK function
function ADDTASK() {
  TASK = task_input.value;
  tasks = TASK.toLowerCase();
  if (TASK == "") {
    alert("Please, fill out the task.");
    return;
  }
  h2.style.opacity = 1;
  const buttons = document.createElement("button");
  // adding buttons with classlist
  buttons.classList.add("button");
  buttons.innerText = "Delete";
  buttons.style.backgroundColor = "black";
  buttons.style.width = "58px";
  buttons.style.marginTop = "20px";
  buttons.style.height = "45px";
  buttons.style.marginLeft = "2px";
  buttons.style.borderRadius = "7px";
  buttons.style.color = "white";
  buttons.style.cursor = "pointer";
  buttons.style.border = "none";
  buttons.onclick = deleteall;
  delete_container.appendChild(buttons);

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerHTML = "Edit";
  button.style.backgroundColor = "black";
  button.style.width = "58px";
  button.style.marginTop = "20px";
  button.style.height = "45px";
  button.style.marginLeft = "2px";
  button.style.borderRadius = "7px";
  button.style.color = "white";
  button.style.cursor = "pointer";
  button.style.border = "none";
  edit_container.appendChild(button);

  // button for editing and saving up tasks
  button.onclick = () => {
    if (button.innerText == "Edit") {
      task_element.removeAttribute("readonly");
      task_element.focus();
      button.innerText = "Save";
    } else if (button.innerText == "Save") {
      button.innerText = "Edit";
      task_element.setAttribute("readonly", "readonly");
    }
  };

  const task_element = document.createElement("input");
  task_element.classList.add("text");
  task_element.value = tasks;
  task_element.style.width = "200px";
  task_element.type = "text";
  task_element.style.marginTop = "20px";
  task_element.style.border = "none";
  task_element.style.color = "black";
  task_element.style.height = "45px";
  task_element.style.borderRadius = "7px";
  task_element.style.backgroundColor = "white";
  task_element.style.cursor = "pointer";
  task_element.style.fontSize = "18px";
  task_element.style.marginLeft = "5px";
  task_element.style.textAlign = "left";
  task_element.setAttribute("readonly", "readonly");

  task_container.appendChild(task_element);

  // function from targeting (event) and deleting each delete button clicked
  function deleteall(event) {
    const buttons = event.target;
    task_container.removeChild(task_element);
    edit_container.removeChild(button);
    delete_container.removeChild(buttons);

    //task_container.removeChild(button);
    //task_container.removeChild(buttons);
  }
}
