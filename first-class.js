// firstClass work Area
function handleFirstClasstiketChange(isIncrease){
    const firstClassInput = document.getElementById('firstClass-tiket-count');
    const firstClassCount = parseInt(firstClassInput.value);
    // const firstClassNewCount = firstClassCount -1;
    let firstClassNewCount = firstClassCount;
    if (isIncrease == true) {
        firstClassNewCount = firstClassCount + 1;
    }
    if (isIncrease == false && firstClassCount > 0) {
        firstClassNewCount = firstClassCount - 1;
    }
    firstClassInput.value = firstClassNewCount;
    const firstClassTotal = firstClassNewCount * 150;
    document.getElementById('firstClass-total').innerText = firstClassTotal;
}