//get add button
const addButton = document.querySelector("button")

//when add button clicked, get input value
addButton.addEventListener("click",createToDoListItem)

function removeItem(){
    event.target.parentElement.remove()
}

function createToDoListItem(){
    
    const input = document.querySelector("input[type=text]")    
    //check if input is empty
    if (!input.value){
        return;
    }
    //create an <li> element
    const li = document.createElement("li")


    // adding delete button
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "❌"

    deleteButton.addEventListener("click",removeItem)

    //creating p tag with the input
    const pTagInput = createPElement(input.value)

    //adding a checkbox
    const checkbox = createCheckBox()
    checkbox.addEventListener('change',toggleComplete)


    li.appendChild(checkbox)
    li.appendChild(pTagInput)
    li.appendChild(deleteButton)

    //find the ul element and 
    const ul = document.querySelector("ul")
    //append li element to ul element
    ul.appendChild(li)

    //resets the value to blank string
    input.value = ""
}

function toggleComplete(event){
    console.log(event.target.nextSibling)
    event.target.nextSibling.classList.toggle("todo")
    event.target.nextSibling.classList.toggle("done")
}


function createCheckBox(){
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    return checkbox
}

//function to create a p tag
function createPElement(content){
    const pItem = document.createElement("p")
    pItem.classList.add("todo")
    pItem.textContent = content
    // pItem.addEventListener("click",toggleComplete)

    return pItem

}


