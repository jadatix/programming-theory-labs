const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_CHECKED: 'todo-checked',
  TODO_UNCHECKED: 'todo-container',
  TODO_TEXT_CHECKED: 'todo-text-checked'
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let todo_list = []

function newTodo() {
  const todo = prompt("new TODO: ", "").trim()
  if (todo != "" && todo) {
    todo_list.push({ 'id': todo_list.length, 'text': todo, 'status': false})
  }
  console.log(todo_list)
  renderTodo()
}
function renderTodo() {
  list.innerHTML = todo_list.map((el) => `<div id=${el.id} class=${(el.status === false) ? classNames.TODO_UNCHECKED : classNames.TODO_CHECKED}> <div><input class=${classNames.TODO_CHECKBOX} type=\"checkbox\" onChange=\"toggleCheck(${el.id})\" id=${"cb-"+el.id}></div><div class=${el.status===false? classNames.TODO_TEXT:classNames.TODO_TEXT_CHECKED}>${el.text}</div>  <div class=${classNames.TODO_DELETE} onClick=\"deleteTodo(${el.id})\">✗</div></div>`).join("")
  itemCountSpan.innerHTML = todo_list.length
  uncheckedCountSpan.innerHTML = todo_list.filter(el => el.status===false).length
}


function toggleCheck(id) {
  console.log(id)
  todo_list[id].status = !todo_list[id].status
  console.log(todo_list)
  renderTodo()
}

function deleteTodo(id) {
  if (confirm("Delete " + todo_list[id].text + "?")) {
    todo_list.pop(id) 
    renderTodo()
    console.log("delete")
  }
}
