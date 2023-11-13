// If an li element is clicked, toggle the class "done" on the <li>

let listItems = document.querySelectorAll('.today-list li');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", () => {
    listItems[i].className = "done"; 
  });
}

// If a delete link is clicked, delete the li element / remove from the DOM

let selectedItem =  document.querySelectorAll('.delete');

for (let i = 0; i < listItems.length; i++) {
  selectedItem[i].addEventListener("click", () => {
    listItems[i].remove(); 
  });
}

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function(e) {
  
  e.preventDefault();
  
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here

  // create <li> element with event listener for class change
  let li = document.createElement("li");
  li.addEventListener('click', () => {
    li.setAttribute("class", "done");
  })
  
  // create <span> element
  let span = document.createElement("span");
  span.innerHTML = `${text} `;
  
  // create <a> element with event listener for deletion of <li>  
  let a = document.createElement("a");
  a.className = "delete";
  a.innerHTML = "Delete";
  a.addEventListener('click', () => {
    li.remove();
  })

  // append <span> and <a> to <li>
  li.appendChild(span);
  li.appendChild(a);

  // add <li> to <ul> list
  let ul = document.getElementsByClassName("today-list")[0];
  ul.appendChild(li);
};

/*--------------------------------------*/
let addNewItem = document.querySelector('.add-item');
addNewItem.addEventListener('click', addListItem, false); 

