// When a user clicks the + element, the count should increase by 1 on screen.

let plusEl = document.getElementById('plus');
let minusEl = document.getElementById('minus');
let zeroEl = document.getElementById('zero');

let counter = 0;

plusEl.addEventListener('click', () => {
    
    counter++;
    
    document.getElementById("count").innerHTML = `${counter}`;
    document.getElementById("count").style.color = "blue";
    
    plusEl.style.backgroundColor = 'yellow';
    minusEl.style.backgroundColor = '';
    zeroEl.style.backgroundColor = '';

    console.log(`count increases to ${counter}`);
})

/*-----------------------------------------*/
// When a user clicks the – element, the count should decrease by 1 on screen.
minusEl.addEventListener('click', () => {
    if (counter >= 1) {

        counter--;

        document.getElementById("count").innerHTML = `${counter}`;    
        document.getElementById("count").style.color = "red";
        
        plusEl.style.backgroundColor = '';
        minusEl.style.backgroundColor = 'yellow';
        zeroEl.style.backgroundColor = '';

        console.log(`count decreases to ${counter}`);
    } else if (counter <= 0) {
        document.getElementById("count").innerHTML = 0;
    }
})


/*-----------------------------------------*/
// When a user clicks the 0 element, the count should reset to 0 on screen.
zeroEl.addEventListener('click', () => {
    
    counter = 0;
    
    document.getElementById("count").innerHTML = 0;
    document.getElementById("count").style.color = '';
    
    plusEl.style.backgroundColor = '';
    minusEl.style.backgroundColor = '';
    zeroEl.style.backgroundColor = 'yellow';
    
    console.log(`count resets to ${counter}`);
})