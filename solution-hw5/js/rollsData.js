

//console.log(rollPrice);

// we dont want duplicates in the cart for now so we will create a cart set. easier to remove items
//let cart = new Set();

// class roll which constructs a new cart taking the parameters of the roll flavor, glazing, packing size, and base price (NOT the total price)
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, calcPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calculatedPrice = "$" + calcPrice.toFixed(2);
    }
}

var cart = [ new Roll ("Original" , "Sugar Milk" , "1",(cinrolls["Original"]["basePrice"]),(dropdownOptions.glaze.glazingadd[1] + cinrolls["Original"]["basePrice"]) * dropdownOptions.pack.packingmultiplier[0]) , 
            new Roll ("Walnut" , "Vanilla Milk" , "12",(cinrolls["Walnut"]["basePrice"]), (dropdownOptions.glaze.glazingadd[2] + cinrolls["Walnut"]["basePrice"]) * dropdownOptions.pack.packingmultiplier[3]),
            new Roll ("Raisin" , "Sugar Milk" , "3",(cinrolls["Raisin"]["basePrice"]), (dropdownOptions.glaze.glazingadd[1] + cinrolls["Raisin"]["basePrice"]) * dropdownOptions.pack.packingmultiplier[1]),
            new Roll ("Apple" , "Original" , "3",(cinrolls["Apple"]["basePrice"]), (dropdownOptions.glaze.glazingadd[0] + cinrolls["Apple"]["basePrice"]) * dropdownOptions.pack.packingmultiplier[1]),
]
console.log(cart);



for (const cinnamonroll of cart) {
    console.log(cinnamonroll);
    createElement(cinnamonroll);
  }

function createElement(cinnamonroll) {
    const template = document.querySelector('#roll-template');
    console.log(template);
    const clone = template.content.cloneNode(true);
    cinnamonroll.element = clone.querySelector('.cinnamonroll');
    console.log(template.content);
}
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

