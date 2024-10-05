
//Input Balance

var sum = 0;
function addMoneybyid(id){

const input = document.getElementById(id).value;
const inputNum = parseFloat(input);

sum = sum + inputNum;
return sum;


}
//Total Input Balance


//total Balance

function getTotalbalancebyid(id){

    const balanceText = document.getElementById(id).innerText;
    const balance = parseFloat(balanceText);
    return balance;

}

//Money Remaining

function getremainingmoney(incoming,available){

   const currentMoney = available - incoming;

   return currentMoney;
}