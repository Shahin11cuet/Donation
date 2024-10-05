document.getElementById('donate-btn')
.addEventListener('click', function(event){
event.preventDefault();

const donation = document.getElementById('input-money').value;



const balance = document.getElementById('total-balance').innerText;

const currentMoney= balance - donation;

document.getElementById('total-balance').innerText = currentMoney;


})