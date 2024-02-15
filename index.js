const prices = {
    hotdog: 4.65,
    fries: 3.75,
    drinks: 1.89
};

function showMoney(fpNum) {
    let roundedNum = Math.round(fpNum * 100) / 100;
    let result = roundedNum.toString();
    let splitString = result.split('.');

    if (result.indexOf('.') == -1) {
        result += '.00';
    } else if (splitString[1].length == 1) {
        result += '0';
    }
    return result;
}

function getorder() {
    let quantities = {
        hotdog: 0,
        fries: 0,
        drinks: 0
    };

    
    for (let item in quantities) {
        let quantity = parseInt(prompt(`How many ${item} do you want to order?`));
        quantities[item] = quantity; 
    }

    let subtotal = 0;

  
    for (let item in quantities) {
        subtotal += quantities[item] * prices[item];
    }

    let discount = 0;
    let beforeSubtotal = showMoney(subtotal);

    if (subtotal >= 25) {
        discount = subtotal * 0.1;
        subtotal -= discount;
    }

    let tax = subtotal * 0.0625;
    let finalTotal = subtotal + tax;

    let hotDogCost = showMoney(quantities.hotdog * prices.hotdog);
    let friesCost = showMoney(quantities.fries * prices.fries);
    let drinksCost = showMoney(quantities.drinks * prices.drinks);
    discount = showMoney(discount);
    subtotal = showMoney(subtotal);
    tax = showMoney(tax);
    finalTotal = showMoney(finalTotal);

    document.getElementById('showOrder').innerHTML =
        `<p> You got ${quantities.hotdog} Hotdogs which costs $${hotDogCost}</p>
        <p> You got ${quantities.fries} Fries which costs $${friesCost}</p>
        <p> You got ${quantities.drinks} Drinks which costs $${drinksCost}</p>
        <p> Subtotal before discount: $${beforeSubtotal} </p>
        <p> Discount (if applicable): $${discount} </p>
        <p> Subtotal after discount: $${subtotal} </p>
        <p> Tax: $${tax} </p>
        <p> Final amount: $${finalTotal} </p>`;
        
    document.getElementById('showOrder').style.display = 'block';
}
