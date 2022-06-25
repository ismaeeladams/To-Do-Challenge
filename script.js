// let deathList = [
//   {
//     id: 1,
//     toDo: "TV Stand",
//     createdDate: new Date(),
//     completed: false,
//   },
// ];

// // Loop array
// function showItems(deathList) {
//   document.querySelector("#hoho").innerHTML = " ";
//   deathList.forEach((list) => {
//     console.log(list);
//     document.querySelector("#hoho").innerHTML += `
//     <input type="checkbox"/><p>${list.toDo}</p>
//     `;
//   });
// }

// // Show items on HTML
// showItems(deathList);

// // Add a darn 'To do'
// function addProducts() {
//   newProducts = toDo = document.querySelector("#inp").value;
//   id = items.length + 1;
//   createdDate = newDate();
//   completed = false;
//   newPro = { id, toDo, createdDate, completed };
//   deathList.push(newPro);
//   document.getElementById(
//     "hoho"
//   ).innerHTML += `<input type="checkbox"/><p> ${newProducts} </p>`;
//   showItems(deathList);
//   console.log(deathList);
// }

// Adding array
const items = [
  {
    id: 1,
    product: "TV Stand",
    createDate: new Date(),
    completed: false,
  },
];

// Original Loop

items.forEach((toDo) => {
  console.log(toDo);
  document.getElementById("list").innerHTML += `
  <div class="toDo" >
  <input  type="checkbox"  ><label for="inp">${toDo.product}</label><div id="delete"></div>
  </div>
  `;
  document.querySelector(".toDo").addEventListener("mouseover", function (e) {
    document.querySelector("#delete").innerHTML = ` <button type="button"  class="delete" id="${toDo.id}"  >delete</button>`;
  });
  document.querySelector(".toDo").addEventListener("mouseout", function (e) {
    document.querySelector("#delete").innerHTML = ` `;
  });
});

// Add Function
function addProduct() {
  newProduct = {
    id: items.length + 1,
    product: document.getElementById("inp").value,
    createDate: new Date(),
    completed: false,
  };
  items.push(newProduct);
  document.getElementById("list").innerHTML += `
  <div class="toDo" ><input type="checkbox" "><label for="inp">${newProduct.product}</label></div>
    `;
  console.log(items);
}


function editTask(id) {
  const newTask = prompt("What wolud you like to change the task to?")
  const task = toDo.find((newProduct) => toDo.id === id);
  task.title = newTask;
  localStorage.setItem("toDo", JSON.stringify(toDo));
  forEach(toDo)
}


function sortName() {
  toDo.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (!asc) toDo.reverse();
  asc = !asc;
  forEach(toDo);
}

function deleteTask(id) {
  toDo = toDo.filter((toDo) => toDo.id !==id);
  localStorage.setItem("toDo", JSON.stringify(toDo));
  forEach(toDo);
}