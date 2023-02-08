const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const button = document.querySelector("#btn-delete");

todoForm.addEventListener("submit", formHandler);

function formHandler(e) {
	e.preventDefault();
	//   задаём константу для названия задачи
	const taskText = todoInput.value;

	// создаём тег li с помощью создания элемента
	const newTask = document.createElement("li");
	newTask.setAttribute("class", "task");
	newTask.innerText = taskText;

	// создаём кнопку удалить
	const deleteBtn = document.createElement("button");
	deleteBtn.setAttribute("role", "button");
	deleteBtn.setAttribute("class", "btn-delete");
	deleteBtn.innerText = "Удалить";
	newTask.append(deleteBtn);

	// const deleteBtn = document.querySelector("#delete")

	// создаём функцию, чтоб по нажатию кнопки удалить, удалялась задача
	deleteBtn.addEventListener("click", function () {
		this.closest("li").remove();
	});

	//   добавляем элемент на страницу
	todoList.append(newTask);

	//   после ввода название задачи, очищаем поле ввода
	todoInput.value = "";
	// задаем фокус на поле ввода, чтобы после клика на кнопку добавить задачу, можно было вести другую задачу и нажать enter
	todoInput.focus();
}
