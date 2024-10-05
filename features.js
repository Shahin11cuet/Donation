document.getElementById('show-donation-form').addEventListener('click', function() {

showproperties('show-donation');



})

document.getElementById('show-history-list').addEventListener('click', function() {

    showproperties('show-transection');
    
    
    })

    const defaultColor = 'bg-white'; 
const activeColor = 'bg-lime-300';
const buttons = document.querySelectorAll('.btn1');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    
    buttons.forEach((b) => {
      b.classList.add(defaultColor);
      b.classList.remove(activeColor);
    });
    
    btn.classList.remove(defaultColor);
    btn.classList.add(activeColor);
  });
});