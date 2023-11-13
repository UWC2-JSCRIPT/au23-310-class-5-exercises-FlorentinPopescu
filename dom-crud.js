// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

// create new element
const buyEl = document.createElement('a');

// option A: = create a text node and add it to the new element
const buyElTextNode = document.createTextNode('Buy Now!');
buyEl.appendChild(buyElTextNode);
// option B: - set element inner text 
//buyEl.innerHTML = "Buy Now!";

// set element attribute id to 'cta'
buyEl.setAttribute('id','cta'); 

// append new element after the <p> element of DOM
let p = document.querySelector("p");
p.parentNode.insertBefore(buyEl, p.nextSibling);

// Access (read) the data-color attribute of the <img>,
// log to the console
let imgColor = document.body.getElementsByTagName("img");
let color = imgColor[0].getAttribute("data-color");
console.log(color);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
var listitems = document.getElementsByTagName("li");
for (let i = 0; i < listitems.length; i++)
{
   if (listitems[i].innerHTML == "Turbocharged")
   {
      listitems[i].className = "highlight";
      break;
   }
} 

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
let paragraph = document.querySelector('p');
paragraph.parentNode.removeChild(paragraph);
