



class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, calculated, rollURL) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calcPrice = calculated;
        this.imageURL = rollURL  


        this.element = null;

    }
}

function addToCart () {
    var calculatedPrice = ((glazePrice + rollbasePrice) * packPrice).toFixed(2);
    cinnamonroll = addNewRoll(rollType,rollGlazing, packSize, rollbasePrice, calculatedPrice, cinrolls[rollType]["imageFile"] );
    

    saveToLocalStorage();
}


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
