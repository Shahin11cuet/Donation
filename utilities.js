
//Input Balance Noakhali

var sum = 0;
function addMoneybyid(id) {



    const input = document.getElementById(id).value;
    const inputNum = parseFloat(input);
    if (isNaN(inputNum) || input.match(/^-\d+$/)) {
        alert("Donation unsuccessful! Please Type a Number")
        return 0;
    }
    else {
        sum = sum + inputNum;
        return sum;
    }

}

//Feni
var sumF = 0;
function addMoneybyid2(id) {

    const input = document.getElementById(id).value;
    const inputNum = parseFloat(input);
    if (isNaN(inputNum) || input.match(/^-\d+$/)) {
        alert("Donation unsuccessful! Please Type a Number")
        return 0;
    }
    else {
        sumF = sumF + inputNum;
        return sumF;
    }



}

//Student
var sumS = 0;
function addMoneybyid3(id) {

    const input = document.getElementById(id).value;
    const inputNum = parseFloat(input);
    if (isNaN(inputNum) || input.match(/^-\d+$/)) {
        alert("Donation unsuccessful! Please Type a Number")
        return 0;
    }
    else {
        sumS = sumS + inputNum;
        return sumS;
    }



}



//Total Input Balance


//total Balance

function getTotalbalancebyid(id) {

    const balanceText = document.getElementById(id).innerText;
    const balance = parseFloat(balanceText);
    return balance;

}

//Money Remaining

function getremainingmoney(incoming, available) {

    const currentMoney = available - incoming;

    return currentMoney;
}

//Section Showing

function showproperties(names) {
    
    var donationElements = document.getElementsByClassName('show-donation');
    for (var i = 0; i < donationElements.length; i++) {
        donationElements[i].classList.add('hidden');
        

    }


    var transectionElements = document.getElementsByClassName('show-transection');
    for (var i = 0; i < transectionElements.length; i++) {
        transectionElements[i].classList.add('hidden');
        
    }


    var targetElements = document.getElementsByClassName(names);
    for (var i = 0; i < targetElements.length; i++) {
        targetElements[i].classList.remove('hidden');
        
    }
}
