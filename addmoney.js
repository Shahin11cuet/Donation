
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

//add to transection History

const p = document.createElement('p')
p.innerText = ` You have donated : ${donation} BDT in Noakhali Flood. Tk.balance:${remain} `
document.getElementById('transection-container').appendChild(p);

})

//Feni

document.getElementById('donate-btn2')
.addEventListener('click', function(event){
event.preventDefault();

const donation = addMoneybyid2('input-money2');
document.getElementById('given2').innerText = donation;
document.getElementById('shown2').innerText = donation;

const initialMoney = getTotalbalancebyid('total-balance');

const remain = getremainingmoney(donation,initialMoney) ;

document.getElementById('total-balance').innerText = remain;

console.log(remain);
const p = document.createElement('p')
p.innerText = ` You have donated : ${donation} BDT in Feni Flood. Tk.balance:${remain} `
document.getElementById('transection-container').appendChild(p);

})

//Quota Movement

document.getElementById('donate-btn3')
.addEventListener('click', function(event){
event.preventDefault();

const donation = addMoneybyid3('input-money3');
document.getElementById('given3').innerText = donation;
document.getElementById('shown3').innerText = donation;

const initialMoney = getTotalbalancebyid('total-balance');

const remain = getremainingmoney(donation,initialMoney) ;

document.getElementById('total-balance').innerText = remain;

console.log(remain);
const p = document.createElement('p')
p.innerText = ` You have donated : ${donation} BDT in Quota movement. Tk.balance:${remain} `
document.getElementById('transection-container').appendChild(p);

})