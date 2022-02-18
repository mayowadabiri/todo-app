// STATE - data structure

const form = document.querySelector(".todo_form");
const inputValue = document.querySelector(".todo_input");
const container = document.querySelector(".todo_container");
const todoItems = document.querySelector(".todo_items");
// form.addEventListener("submit", (evt) => {
//   evt.preventDefault()
// });

// const allTodos = ["jmewrhgjewh", "hjsefguewyfg"]

const allTodos = [];

const editMode = {
  isediting: false,
  id: null,
};

const dateTime = () => {
  const day = new Date().toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return day;
};
// console.log(Date.now());

const submitHandler = (evt) => {
  evt.preventDefault();
  const formValue = inputValue.value;
  if (formValue.trim() !== "") {
    const todoObject = {
      id: Date.now(),
      todo: formValue,
      date: dateTime(),
    };
    console.log(todoObject);
    allTodos.push(todoObject);
    showItems(allTodos);
    container.style.display = "block";
    inputValue.value = "";
  }
  console.log(allTodos);
};

const showItems = () => {
  todoItems.innerHTML = "";
  allTodos.forEach((item) => {
    const todo = `<div class="todo_item" data-id=${item.id}>
            <input checked type="checkbox" hidden id="todo-1" class="todo_checkbox" />
            <label class="circle todo_label" for="todo-1"> </label>
            <p>
                <span class="text-typo">${item.todo}</span>
                <span class="text-time text-typo">${item.date}</span>
            </p>
            <div class="todo_btns">
              <button onclick="rename(event)">Rename</button>
              <button>Delete</buttosn>
            </div>
          </div>`;
    todoItems.insertAdjacentHTML("afterbegin", todo);
  });
};

const rename = (evt) => {
  const parentElement = evt.target.closest(".todo_item");
  const textContent = parentElement.children[2].firstElementChild.textContent;
  inputValue.value = textContent;
  inputValue.focus();
  editMode.isediting = true;
  editMode.id = parentElement.dataset.id;
  console.log(editMode);
};
