function getInputFieldValueFromInput(id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function donationValueAmount(id){
    const getValueByText = parseFloat(document.getElementById(id).innerText);
    return getValueByText
}

