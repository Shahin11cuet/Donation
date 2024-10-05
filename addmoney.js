
//Noakhali
document.getElementById('donate-btn')
.addEventListener('click', function(event){
event.preventDefault();

const donation = addMoneybyid('input-money');
document.getElementById('given').innerText = donation;
document.getElementById('shown').innerText = donation;

const initialMoney = getTotalbalancebyid('total-balance');

const remain = getremainingmoney(donation,initialMoney) ;

document.getElementById('total-balance').innerText = remain;

console.log(remain);

})

//Feni

document.getElementById('donate-btn2')
.addEventListener('click', function(event){
event.preventDefault();

const donation = addMoneybyid('input-money2');
document.getElementById('given2').innerText = donation;
document.getElementById('shown2').innerText = donation;

const initialMoney = getTotalbalancebyid('total-balance');

const remain = getremainingmoney(donation,initialMoney) ;

document.getElementById('total-balance').innerText = remain;

console.log(remain);

})

//Quota Movement

document.getElementById('donate-btn3')
.addEventListener('click', function(event){
event.preventDefault();

const donation = addMoneybyid('input-money3');
document.getElementById('given3').innerText = donation;
document.getElementById('shown3').innerText = donation;

const initialMoney = getTotalbalancebyid('total-balance');

const remain = getremainingmoney(donation,initialMoney) ;

document.getElementById('total-balance').innerText = remain;

console.log(remain);

})