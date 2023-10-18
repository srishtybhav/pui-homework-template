class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, calculated, rollURL) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calcPrice = calculated.toFixed(2);
        this.imageURL = rollURL  


        this.element = null;

    }
}

//function that inputs the roll parameters whenever add to cart is onclick
var cart = new Set ();
function addtocart(This) {
    const rollCart = new Roll(rollType, rollGlazing, packSize, rollbasePrice, (glazePrice + rollbasePrice) * packPrice, cinrolls[rollType]["imageFile"]);
    // Check for existing rolls stored in the cart

    if (localStorage.getItem(cart)){
        var cartrolls = JSON.parse(localStorage.getItem(cart));

        cartrolls.push(rollCart);

        localStorage.setItem(cart, JSON.stringify(cartrolls));
    
    } else {
        var cartrolls = [rollCart];
        saveToLocalStorage(cartrolls); //store it
    
    }  

    console.log(cartrolls);
    for (const rolldata of cartrolls) {
        createElement(rollCart);  
    }

}


//create the roll template
function createElement(rollCart){
    const rollListElement = document.querySelector('#roll-list');
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    rollCart.element = clone.querySelector('.rollCart');


    const btnDelete = rollCart.element.querySelector('.removeblock');
    
    btnDelete.addEventListener('click', () => {
        deleteRoll(rollCart);
    })
    rollListElement.append(rollCart.element);

    console.log(rollCart);


    updateElement(rollCart);

}
//update dom elements of each roll
function updateElement(rollCart) {
    //select dom elements
    const rollImageElement = rollCart.element.querySelector('#cartrollimage2');
    const rollTitleElement = rollCart.element.querySelector('#rolltitle');
    const rollBodyElement = rollCart.element.querySelector('#rollpricetext');
    //edit dom elements
    rollImageElement.src = '../assets/products/' + rollCart.imageURL;
    rollTitleElement.innerText = rollCart.type  + " Cinnamon Roll\nGlazing: " + rollCart.glazing + "\nPack Size:" + rollCart.size;
    rollBodyElement.innerText = "$" + rollCart.calcPrice;
    displayTotalPrice(0);

    saveToLocalStorage();
}



//function that deletes roll
function deleteRoll(rollCart) {
    displayTotalPrice(rollCart.calculatedPrice);
    //remove from ui
    rollCart.element.remove();
    //removefromcart
    cart.delete(rollCart);
    console.log(cart);


}



function saveToLocalStorage(cartrolls){
   localStorage.setItem(cart, JSON.stringify(cartrolls)); 

}

function retrieverollsFromLocalStorage(){
    if (! localStorage.getItem(cart)){
        return [];
    }
    return JSON.parse(localStorage.getItem(cart));
    

    
}



/*
//cart of added rolls
const cart = [];
//creates a new roll object adds it to cart
function addNewRoll(rollType, rollGlazing, packSize, rollPrice, calculated, rollURL){
    
    //new roll object created
    const cinnamonroll = new Roll(rollType, rollGlazing, packSize, rollPrice, calculated, rollURL);
    //stored in our cart

    cart.push(cinnamonroll);
    localStorage.setItem('storedroll', cart );
    console.log(cart);
    return cinnamonroll
}


//create the roll template
function createElement(cinnamonroll){
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    cinnamonroll.element = clone.querySelector('.cinnamonroll');
    const rollListElement = document.querySelector('#roll-list');

    const btnDelete = cinnamonroll.element.querySelector('.removeblock');
    
    btnDelete.addEventListener('click', () => {
        deleteRoll(cinnamonroll);
    })
    rollListElement.append(cinnamonroll.element);




    updateElement(cinnamonroll);

}

//update dom elements of each roll
function updateElement(cinnamonroll) {
    //select dom elements
    const rollImageElement = cinnamonroll.element.querySelector('#cartrollimage2');
    const rollTitleElement = cinnamonroll.element.querySelector('#rolltitle');
    const rollBodyElement = cinnamonroll.element.querySelector('#rollpricetext');
    //edit dom elements
    rollImageElement.src = '../assets/products/' + cinnamonroll.imageURL;
    rollTitleElement.innerText = cinnamonroll.type  + " Cinnamon Roll\nGlazing: " + cinnamonroll.glazing + "\nPack Size:" + cinnamonroll.size;
    rollBodyElement.innerText = "$" + cinnamonroll.calculatedPrice;
    displayTotalPrice(0);

    saveToLocalStorage();
}



//function that deletes roll
function deleteRoll(cinnamonroll) {
    displayTotalPrice(cinnamonroll.calculatedPrice);
    //remove from ui
    cinnamonroll.element.remove();
    //removefromcart
    cart.delete(cinnamonroll);
    console.log(cart);


}

//hw 6


function saveToLocalStorage (cinnamonroll) {

    const cartstring = JSON.stringify(cart);
    //convert objects into strings and put them in a local storage key val
    localStorage.setItem('storedroll', cartstring);
    console.log(cartstring);


}


function retrieveFromLocalStorage() {
    //retrieve the objects stored
    const cartstring = localStorage.getItem('storedroll');
    const cart = JSON.parse(cartstring);
    console.log(cart);

    for (const rolldata of  cart) {
        const cinnamonroll = addNewRoll(rolldata.type, rolldata.glazing, rolldata.size, 
            rolldata.basePrice, rolldata.calcPrice, rolldata.imageURL);

        createElement(cinnamonroll);

    }

}

if (localStorage.getItem('storedroll')!= null) {
    retrieveFromLocalStorage();
}
*/