function increaseQuantity(button) {
    const amountButton = button.parentElement.querySelector('.amount');
    let currentAmount = parseInt(amountButton.textContent);
    currentAmount++;
    amountButton.textContent = currentAmount;
}

function decreaseQuantity(button) {
    const amountButton = button.parentElement.querySelector('.amount');
    let currentAmount = parseInt(amountButton.textContent);
    
    if (currentAmount > 0) {
        currentAmount--;
        amountButton.textContent = currentAmount;
    }
}

function buyNow(button) {
    const box = button.parentElement;
    const quantity = parseInt(box.querySelector('.amount').textContent);
    
    if (quantity > 0) {
        alert(`You're ordering ${quantity} item(s). Thank you!`);
        box.querySelector('.amount').textContent = '0';
    } else {
        alert('Please select a quantity first!');
    }
}