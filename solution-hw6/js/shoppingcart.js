class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, calculated, rollURL) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calcPrice = calculated.innerText;
        this.imageURL = rollURL  


        this.element = null;

    }
}

//cart of added rolls
const cart = [];

function addNewRoll(rollType, rollGlazing, packSize, rollPrice, calculated, rollURL){
    const cinnamonroll = new Roll(rollType, rollGlazing, packSize, rollPrice, calculated, rollURL);

    cart.push(cinnamonroll);
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

//total price function
function displayTotalPrice(subtractionamount){
    
    let totalcost = 61.83 - subtractionamount;
    
    const totalpriceofrolls = document.querySelector("#totalprice");
    totalpriceofrolls.innerText = "$" + totalcost;



}
console.log(cart);


function addtocart(This) {
    const cinnamonroll = new Roll(rollType, rollGlazing, packSize, rollbasePrice, rollPrice.innerHTML, (cinrolls[rollType]["imageFile"]) );
    // Check for existing rolls stored in the cart
    var cartrolls = JSON.parse(localStorage.getItem(cart))
    var cartrollsstring = JSON.stringify(cartrolls)
    if (localStorage.getItem(cart)){
        var cartrolls = JSON.parse(localStorage.getItem(cart));

        cartrolls.push(cinnamonroll);

        localStorage.setItem(cart, cartrollsstring);
    
    } else {
        var cartrolls = [cinnamonroll];
        saveToLocalStorage(cartrolls); //store it
        retrieverollsFromLocalStorage(cartrolls);
    
    } 
    console.log(cartrolls);

}


function saveToLocalStorage(){
    var cartrolls = Array.from(cart);
    var cartrollsstring = JSON.stringify(cartrolls)
   localStorage.setItem(cart, cartrollsstring); 
}

function retrieverollsFromLocalStorage(){
    var cartrolls = JSON.parse(localStorage.getItem(cart))
    var cartrollsstring = JSON.stringify(cartrolls)

    for (const rollData of cart ) {
        const cinnamonroll = addrolltopage(rollData.type, rollData.glazing, rollData.size, rollData.basePrice, rollData.calcPrice, rollData.imageURL);
        createElement(cinnamonroll);
    }

}

if (localStorage.getItem(cart) != null) {
    retrieverollsFromLocalStorage();
  }





//localStorage.clear();