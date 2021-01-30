// economy and FirstClass area
function handleTiketChange(tiket, isIncrease){
    const tiketInput = document.getElementById(tiket + '-tiket-count');
    const tiketCount = parseInt(tiketInput.value);
    // const tiketNewCount = tiketCount -1;
    let tiketNewCount = tiketCount;
    if (isIncrease == true) {
        tiketNewCount = tiketCount + 1;
    }
    if (isIncrease == false && tiketCount > 0) {
        tiketNewCount = tiketCount - 1;
    }
    tiketInput.value = tiketNewCount;
    // const tiketTotal = tiketNewCount * 150;
    let tiketTotal = 0;
    if(tiket == 'economy'){
        tiketTotal = tiketNewCount * 100;
    }
    if(tiket == 'firstClass'){
        tiketTotal = tiketNewCount * 150;
    }
    document.getElementById(tiket + '-total').innerText = tiketTotal;
     calculateSubtotal();
}


// Subtotal price work area
function calculateSubtotal() {
    const economyInput = document.getElementById('economy-tiket-count');
    const economyCount = parseInt(economyInput.value); 

    const firstClassCount = getInputValue('firstClass')
    // const firstClassInput = document.getElementById('firstClass-tiket-count');
    // const firstClassCount = parseInt(firstClassInput.value);
    const subtotalPrice = economyCount * 100 + firstClassCount * 150;
    document.getElementById('Subtotal-price').innerText = subtotalPrice;


    // vat area
    const vat = subtotalPrice * 0.1;
    document.getElementById('vat-amount').innerText = vat;

    // Total price area
    const grandTotal = subtotalPrice + vat;
    document.getElementById('total-amount').innerText = grandTotal;
    
}

function getInputValue(tiket) {
    const tiketInput = document.getElementById(tiket + '-tiket-count');
    const tiketCount = parseInt(tiketInput.value);
    return tiketCount;
}



