// If an li element is clicked, toggle the class "done" on the <li>
const toggleClass = (li, liClass) => {
  li.addEventListener("click", (e) => {
    e.preventDefault;
    li.className = liClass;
  }); 
}

// If a delete link is clicked, delete the li element / remove from the DOM
const deleteLink = (li, delLink) => {
  delLink.className = "delete";
  delLink.innerHTML = "Delete";
  delLink.addEventListener('click', (e) => {
    e.preventDefault;
    li.remove();
  });
}

// create element with event listener for up or down move 
const createMoveEl = (type, property, color, direction) => {
  let el = document.createElement(type);
  el.innerHTML = property;
  el.className = property;
  el.style.backgroundColor = color;

  if (direction === "upMove") {
    if (el.parentNode != 'undefined') {
      el.addEventListener('click', (e)=>{
        e.preventDefault;
        let previous = el.parentNode.previousSibling;
        el.parentNode.parentNode.insertBefore(el.parentNode, previous);
      });
    }
  } else if (direction === "downMove") {
        el.addEventListener('click', (e)=>{
          e.preventDefault;
          let next = el.parentNode.nextSibling;
          el.parentNode.parentNode.insertBefore(next, el.parentNode);
    });
  }
  return el;
}

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
  
  // create <span> element
  let span = document.createElement("span");
  span.innerHTML = `${text} `;

  // create <li> element with event listener for class change
  let li = document.createElement("li");
  toggleClass(li, "done");

  // create <a> element with event listener for deletion of <li>  
  let a = document.createElement("a");
  deleteLink(li, a);

  // append <span>, <a>, Up and Down functionalities to <li>
  li.appendChild(span);
  li.appendChild(a);

  li.append(createMoveEl("a", "up", "green", "upMove"));
  li.append(createMoveEl("a", "down", "red", "downMove"));
   
  // add <li> to <ul> list
  let ul = document.getElementsByClassName("today-list")[0];
  ul.appendChild(li);
};

/*--------------------------------------*/
// add event listeners to <li> given by default in html
const defaultSeting = () => {
  let defaultLi = document.getElementsByClassName("today-list")[0]
                          .getElementsByTagName("li")[0];
  let defaultA = document.getElementsByClassName("today-list")[0]
                         .getElementsByTagName("a")[0];
  toggleClass(defaultLi, "done");
  deleteLink(defaultLi, defaultA);

  defaultLi.append(createMoveEl("a", "up", "green", "upMove"));
  defaultLi.append(createMoveEl("a", "down", "red", "downMove"));
} 

window.onload = () => {defaultSeting();};

/*--------------------------------------*/
let addNewItem = document.querySelector('.add-item');
addNewItem.addEventListener('click', addListItem, false); 
