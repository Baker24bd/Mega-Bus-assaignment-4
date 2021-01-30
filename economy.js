// Economy work area

// document.getElementById('economy-tiket-increase').addEventListener('click', function(){
//     const economyInput = document.getElementById('economy-tiket-count');
//     const economyCount = parseInt(economyInput.value);
//     const economyNewCount = economyCount + 1;
//     economyInput.value = economyNewCount;
//     const economyTotal = economyNewCount * 100;
//     document.getElementById('economy-total').innerText = economyTotal;
// });

// document.getElementById('economy-tiket-decrease').addEventListener('click', function(){
//     const economyInput = document.getElementById('economy-tiket-count');
//     const economyCount = parseInt(economyInput.value);
//     const economyNewCount = economyCount -1;
//     economyInput.value = economyNewCount;
//     const economyTotal = economyNewCount * 100;
//     document.getElementById('economy-total').innerText = economyTotal;
// })

function handleEconomytiketChange(isIncrease){
    const economyInput = document.getElementById('economy-tiket-count');
    const economyCount = parseInt(economyInput.value);
    // const economyNewCount = economyCount -1;
    let economyNewCount = economyCount;
    if (isIncrease == true) {
        economyNewCount = economyCount + 1;
    }
    if (isIncrease == false && economyCount > 0) {
        economyNewCount = economyCount - 1;
    }
    economyInput.value = economyNewCount;
    const economyTotal = economyNewCount * 100;
    document.getElementById('economy-total').innerText = economyTotal;
}