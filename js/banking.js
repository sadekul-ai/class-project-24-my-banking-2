
//Deposit

document.getElementById('deposit-button').addEventListener('click', function(){
    let inputAmount = parseInt(document.getElementById('input-deposit').value);

    if (inputAmount < 1){
        return alert('Minimum Value should be 1 USD')
    }

    let previousAmount = parseInt(document.getElementById('total-deposit').innerText);
    let totalDeposit = inputAmount + previousAmount ;
    // let totalDeposit.innerText = sum  
    document.getElementById('total-deposit').innerHTML = totalDeposit; 

    //Clear
    document.getElementById('input-deposit').value = '';

    let totalBalance = inputAmount + previousAmount;
    document.getElementById('total-balance').innerHTML = totalBalance; 
})

//Withdraw

document.getElementById('withdraw-button').addEventListener('click', function(){
    let inputAmount = parseInt(document.getElementById('input-withdraw').value);

    if (inputAmount < 1){
        return alert('Minimum Value should be 1 USD')
    }

    let previousAmount = parseInt(document.getElementById('total-withdraw').innerText);
    let totalWithdraw = previousAmount + inputAmount;
    // let totalWithdraw.innerText = sum  
    document.getElementById('total-withdraw').innerHTML = totalWithdraw; 

    //Clear
    document.getElementById('input-withdraw').value = '';

    let previousBalance = document.getElementById('total-balance').innerText;
    let totalBalance = previousBalance - inputAmount;
    document.getElementById('total-balance').innerHTML = totalBalance; 
})
