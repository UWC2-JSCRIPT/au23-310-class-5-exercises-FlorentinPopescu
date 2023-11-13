// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
let moreinfo = document.getElementById('more-info');
moreinfo.addEventListener('click', (e) => {
  e.preventDefault();
  alert("Here's some info");
  e.stopPropagation();
});

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
document.getElementById('dog').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Bow wow!');
  e.stopPropagation();
});
