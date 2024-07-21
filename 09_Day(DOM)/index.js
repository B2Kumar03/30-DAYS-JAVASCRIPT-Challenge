//Activity 1 :Selection and Manipulation Elements

//Selct an HTML eleent by its id and change its text
const heading=document.getElementById("heading")
heading.innerText="Hello,india"

//Select an HTML element by its class and change its class and change its background color
const backgroundChanger=document.getElementsByClassName("backChangeElement")
backgroundChanger[0].style.backgroundColor="red"


//Activity 2:Creating and Appending Elements


//create a new div element with some text content and append it to the body
const newDiv=document.createElement("div")
newDiv.innerText="I am a div element"
newDiv.id="divElemnt"
const body=document.body
body.append(newDiv)

//create a new li element adn add it to an existing ul list
const existingUl=document.getElementById("ulElement")
const newLi=document.createElement("li")
newLi.innerText="Home"
existingUl.appendChild(newLi)
const newLi1=document.createElement("li")
newLi1.innerText="About"
existingUl.appendChild(newLi1)

//Activity 3:Removing element


//Select an HTML element and remove it from the DOM
const removingElement=document.getElementById("divElemnt")
removingElement.remove()

//remove the last child ofa specific HTML element
const removingLastChild=document.getElementById("ulElement")
removingLastChild.removeChild(removingLastChild.lastChild)


//Activity 4:Modifying Attributes and classes


//select and HTML element and change one of its attributes(eg.,src of an image)
const image=document.getElementById("image")
image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&s"


//Add and remove CSS class to/form an HTML element.
const addClass=document.getElementById("addClass")
addClass.classList.add("addClassElement")
addClass.classList.remove("addClassElement")


//Activity 5:Event Handling


//Add a click event listener to a button that changes the test content of a paragraph
const button=document.getElementsByTagName("button")
const paragraph=document.getElementById("changer")
console.log(button);
button[0].addEventListener("click",()=>{
    paragraph.innerText="I changed Thank you !"
})

//Add a mouse event listener to and element that change its border color
const mouse=document.getElementById("hoveMe")
mouse.addEventListener("mouseover",()=>{
    mouse.style.border="2px solid red"
    })





