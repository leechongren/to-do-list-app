//get add button
const addButton = document.querySelector("button")

//when add button clicked, get input value
addButton.addEventListener("click",createToDoListItem)


function createToDoListItem(){
    
    const input = document.querySelector("input[type=text]")
    //create an <li> element
    const li = document.createElement("li")
    //add text to li element
    li.textContent = input.value
    //find the ul element and 
    const ul = document.querySelector("ul")
    //append li element to ul element
    ul.appendChild(li)
}


//appends it to list
 //need .value to parse it into a string
