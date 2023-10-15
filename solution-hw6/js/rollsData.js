
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
const calcrollPrice = rollPrice.innerText
rollPrice.innerHTML = cinrolls[rollType]["basePrice"];
const rollbasePrice = cinrolls[rollType]["basePrice"];

/*
//const cartImage = document.querySelector('#cartrollimage2');
//console.log(cartImage);
//function that inputs the roll parameters whenever add to cart is onclick
function addtocart(This) {
    const rollCart = new Roll(rollType, rollGlazing, packSize, rollPrice);
    // Check for existing rolls stored in the cart

    if (localStorage.getItem(cart)){
        var cartrolls = JSON.parse(localStorage.getItem(cart));

        cartrolls.push(rollCart);

        localStorage.setItem(cart, JSON.stringify(cartrolls));
    
    } else {
        var cartrolls = [rollCart];
        saveToLocalStorage(cartrolls); //store it
    
    }  
    //console.log(cartrolls);


    //cartImage.src = '../assets/products/' + cinrolls[(cartrolls[0].type)]["imageFile"]; 

    console.log(cartrolls);  

}
*/

/*
function saveToLocalStorage(cartrolls){
   localStorage.setItem(cart, JSON.stringify(cartrolls)); 
}

function retrieverollsFromLocalStorage(){
    if (! localStorage.getItem(cart)){
        return [];
    }
    return JSON.parse(localStorage.getItem(cart));

}


function addrolltopage(cartrolls){

    for (i = 0; i < cartrolls.length; i++ ){

        //console.log(rolls[(cartrolls[i].type)]["imageFile"]);
        //console.log(cartrollImage.src);
    }
}
*/

