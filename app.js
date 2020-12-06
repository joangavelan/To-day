const $input = document.querySelector('.todo__input');
const $add = document.querySelector('.todo__add');
const $list = document.querySelector('.todo__list');

const insertTask = () => {
    $add.addEventListener('click', () => {
        const newTask = createNewTask($input.value);
        $list.insertBefore(newTask, $list.childNodes[0]);
        $input.value = '';
    })
}

const createNewTask = elem => {
    const task = document.createElement('li');
    task.classList.add('todo__task');
    
    task.innerHTML = `
    <label>
        <p>${elem}</p>
        <input type="checkbox" class="todo__check">
        <i></i>
    </label>
    `
    return task;
}


insertTask();

