//Activity 1:Basic event Handling

//Add a click event listener to a button that changes the text content of a paragraph.
const paragraph = document.getElementById("para");
function changeParaContent() {
  paragraph.textContent = "Full stack developer";
}

//Add a double-click event listener to an image that toggle its visibility
const img = document.getElementById("image");
img.addEventListener("dblclick", () => {
  img.style.display = "none";
});

//Activity 2:Mouse Events

//Add a mouseover event listener to an element that changes its background color
const backgroundChanger = document.getElementById("heading");

backgroundChanger.addEventListener("mouseover", () => {
  backgroundChanger.style.backgroundColor = "black";
});
//Add a mouseout event listener to an element that reset its background color
backgroundChanger.addEventListener("mouseout", () => {
  backgroundChanger.style.backgroundColor = "green";
});

//Activity 3:Keybord Events

//Add a keydown event listener to an element that logs the key pressed to the console
const keyDown = document.getElementById("keyDown");
keyDown.addEventListener("keydown", (e) => {
  console.log(e.key);
});

//Add a keyup event listner to an input field that displays the current values in a paragraph
const input = document.getElementById("input");
const para = document.getElementById("para");
input.addEventListener("keyup", (e) => {
  para.textContent = e.target.value;
});

//Acitvity 5:Event Delegation

//Add a click event listener to a list that logs the text content of the clicked list item using event delegation
const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

//Add an event listener to a parent element that listens for events from dynamicaly added child elements
const button = document.getElementById("addEvent");
const parent=document.getElementById("parent")

button.addEventListener("click", (e) => {
    const h3=document.createElement("h3")
    h3.innerText=`New child`
    parent.appendChild(h3)
});



