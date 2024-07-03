const taskIput = document.getElementById("taskIput");
const tasklist = document.getElementById("tasklist");
const tasks = JSON.parse(localstorage.getItem(tasks)) || [];

function addTask(){
    const taskText = taskIput.ariaValueMax.trim();
    if(taskText === "") return;

    const task = {text: taskText};
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskIput.value = "";

    displayTasks();
}

function deleteTask(index){
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

function editTask(index){
    const newTaskText = promt("Edit the task: ", tasks[index].text);

    if(newTaskText !== null){
        tasks[index].text == newTaskText;
        
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        displayTasks();
    }
}

