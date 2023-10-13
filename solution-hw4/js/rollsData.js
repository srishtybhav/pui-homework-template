const cinrolls = {
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

// query search html urls for the keys that correspond to the rolls list
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// the specific heading title and change it to the corresponding text when clicking an item in gallery
const headerElement = document.querySelector('#Productdetailtitle');
headerElement.innerHTML = rollType + " Cinnamon Roll";

// the specific image and change it to the corresponding image when clicking an item in gallery
const rollImage = document.querySelector('#cinnamonrolldetailimage');
rollImage.src = '../assets/products/' + cinrolls[rollType]["imageFile"];

// the specific price on detail page and change the total calculated price based on new base prices in rolls list
const rollPrice = document.querySelector('.detailedprice');
rollPrice.innerHTML = '$' + cinrolls[rollType]["basePrice"];
const rollbasePrice = cinrolls[rollType]["basePrice"];
//console.log(rollPrice);


// empty cart which will be loaded into when add to cart button
cart = [
    
]




// class roll which constructs a new cart taking the parameters of the roll flavor, glazing, packing size, and base price (NOT the total price)
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//function that inputs the roll parameters whenever add to card is onclick
function addtocart(This) {

    const rollCart = new Roll(rollType, rollGlazing, packSize, rollbasePrice );

    cart.push(rollCart);
    console.log(cart);
}
