const $input = document.querySelector('.todo__input');
const $add = document.querySelector('.todo__add');
const $list = document.querySelector('.todo__list');


const createNewTask = elem => {
    const task = document.createElement('li');
    task.classList.add('todo__task');
    
    task.innerHTML = `
    <label>
        <input type="checkbox" class="todo__check">
        <p>${elem}</p>
        <i></i>
    </label>
    `
    return task;
}

const insertTask = () => {
    const newTask = createNewTask($input.value);
    $list.insertBefore(newTask, $list.childNodes[0]);
    $input.value = '';
}


$add.addEventListener('click', () => insertTask());
$input.addEventListener('keypress', event => event.keyCode === 13 ? insertTask() : false );
