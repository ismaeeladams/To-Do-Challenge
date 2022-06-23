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
  <input class="checkboxes"  type="checkbox"  ><label for="inp">${toDo.product}</label>
  </div>
  `;
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
  <div class="toDo" ><input class="checkboxes" type="checkbox" "><label for="inp">${newProduct.product}</label></div>
    `;
  console.log(items);
}
