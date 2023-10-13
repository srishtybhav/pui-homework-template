

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

