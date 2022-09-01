const button = document.querySelector("#createButton");
const select = document.querySelector("select");
const constructor = document.querySelector("#constructor");
const buttons = document.querySelector("#buttons");
const result = document.querySelector("#result");
const inputs = document.querySelector("#input-");
constructor.ondragover = allowDrop;
result.ondragover = allowDrop;
let CannotAppend = ["input", "h1", "span", "p"];
const textTag = ["h1", "span", "p"];
function allowDrop(event) {
  event.preventDefault();
}
result.ondrop = drop;

function drop(event) {
  if (CannotAppend.includes(event.target.tagName.toLowerCase())) {
    alert("Can not append ");
  } else {
    let itemId = event.dataTransfer.getData("id");
    event.target.append(document.getElementById(itemId));
  }
}
function drag(event) {
  event.dataTransfer.setData("id", event.target.id);
}
let change = select.addEventListener("change", (e) => {
  let selectValue = document.getElementById("list").value;
  if (textTag.includes(select.value)) {
    inputs.style.display = "block";
  } else {
    inputs.style.display = "none";
  }
});

button.addEventListener("click", (e) => {
  const newElement = document.createElement(select.value);
  constructor.appendChild(newElement);
  newElement.setAttribute("id", "new" + select.value);
  newElement.draggable = "true";
  newElement.ondragstart = drag;
  if (textTag.includes(select.value)) {
    newElement.innerText = inputs.value;
  }

  
});
