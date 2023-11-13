// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

let ul = document.querySelector('tbody'); 

ul.addEventListener('click', (e) => {
    
    let li = e.target;
    
    li.innerHTML = `(${e.screenX}, ${e.screenY})`;
    li.style.backgroundColor = 'yellow';
   
    li.addEventListener("mouseleave", (e) => {
        li.style.backgroundColor = 'lightgray';
        li.innerHTML = `clicked`;
    });
    
});
