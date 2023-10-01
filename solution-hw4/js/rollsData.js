const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};


const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const headerElement = document.querySelector('#Productdetailtitle');
headerElement.innerHTML = rollType + " Cinnamon Roll";

const rollImage = document.querySelector('#cinnamonrolldetailimage');
rollImage.src = '../assets/products/' + rolls[rollType]["imageFile"];

const rollPrice = document.querySelector('.detailedprice');
rollPrice.innerHTML = '$' + rolls[rollType]["basePrice"];
const rollbasePrice = rolls[rollType]["basePrice"];
//console.log(rollPrice);



cart = {


}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addtocart(This) {

    const rollCart = new Roll(rollType, rollGlazing, packSize, rollbasePrice );
    console.log(rollCart);
;
}
