function updateProductQuantity(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateSubTotal();
}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
//calculationg total
function calculateSubTotal() {
    const phoneTotal = getInputValue('phone') * 1220;
    const caseTotal = getInputValue('case') * 50;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}



// phone increasing and decreasing
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductQuantity('phone', 1220, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductQuantity('phone', 1220, false);
})



//Handle product Increasing and decreasing

document.getElementById('case-plus').addEventListener('click', function () {
    // const productInput = document.getElementById('case-number');
    // const productNumber = productInput.value;
    // productInput.value = parseInt(productNumber) + 1;
    updateProductQuantity('case', 50, true);

})
document.getElementById('case-minus').addEventListener('click', function () {
    // const productInput = document.getElementById('case-number');
    // const productNumber = productInput.value;
    // productInput.value = parseInt(productNumber) - 1;
    updateProductQuantity('case', 50, false);

})