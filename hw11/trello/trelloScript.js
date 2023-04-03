const trelloItems = document.querySelectorAll('.trello__appItem');
const tasks = document.querySelectorAll('.trello__appTask');
const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp');
const sprintZone = document.querySelector('#sprint');
const executor = document.querySelector('#inpExecutor');
let taskToDrag;

trelloItems.forEach(item => {
    item.addEventListener('dragover', prevent);
    item.addEventListener('drop', dropTask);
});


tasks.forEach(task => {
    task.addEventListener('dragstart', startDragTask);
    task.addEventListener('dragend', dragEnd);
});

btn.addEventListener('click', createNewTask);

function closeBtn(){
    let span = document.createElement('span');
    span.classList.add('closeBtn');
    span.innerText = 'x';
    span.addEventListener('click', removeElement);
    return span;
}

function createNewTask(){
    const el = document.createElement('div');
    el.classList.add('trello__appTask');
    el.innerText = inp.value;
    if(executor.value.trim()){
        el.innerHTML += `<br>Исполнитель - <b>${executor.value}</b>`;
    }
    el.setAttribute('draggable', 'true');
    sprintZone.appendChild(el);
    inp.value = "";
    executor.value = '';
    el.addEventListener('dragstart', startDragTask);
    el.addEventListener('dragend', dragEnd);
    let span = closeBtn();
    el.appendChild(span);
}

function dropTask(){
    this.appendChild(taskToDrag);
}

function startDragTask(e){
    taskToDrag = e.target;
    setTimeout(function(){
        taskToDrag.classList.add('hide');
    }, 0);
}

function prevent(e){
    e.preventDefault();
}

function dragEnd(){
    this.classList.remove('hide');
}
function removeElement(){
    this.parentElement.remove();
}