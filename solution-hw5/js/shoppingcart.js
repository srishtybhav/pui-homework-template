
// Selected elements
const Glazing = document.querySelector('#Glazing');
const Packing = document.querySelector('#PackSize');
const Price = document.querySelector('.detailedprice');

// default global variable inputs before selection

let packPrice = 1; //default multiplier
let glazePrice = 0; //default multiplier
var rollGlazing = 'Keep Original';
var packSize = '1';

/* make the value for each option property the price change*/
const dropdownOptions = {
    "glaze" : {
            name: ["Keep Original", "Sugar Milk", "Vanilla Milk", "Double Chocolate"],
            glazingadd: [0,0,0.50,1.50,], //addition
        },
    "pack" : {
            size: [1,3,6,12],
            packingmultiplier: [1,3,5,10] //multiplier
        }
}


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

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, rollURL, calcPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.imageURL = rollURL;
        this.calculatedPrice = calcPrice.toFixed(2);
        this.element = null;
    }
}

//set of added rolls
const cart = new Set();
//add a new role template
function addrolltopage(rollType, rollGlazing, packSize, rollPrice, rollURL, calcPrice) {
    // Create a new notecard object. The Notecard constructor takes three
    // arguments: the image URL, title text,  and body text.
    const cinnamonroll = new Roll(rollType, rollGlazing, packSize, rollPrice, rollURL, calcPrice);
  
    // Add the notecard object to our notecard Set, which keeps track of all
    // the notecards in our application.
    cart.add(cinnamonroll);
  
    return cinnamonroll;
  }


//create the roll template
function createElement(cinnamonroll){
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    cinnamonroll.element = clone.querySelector('.cinnamonroll');
    const rollListElement = document.querySelector('#roll-list');
    /*
    const cinnamonroll1price = (Number(cinnamonroll1.calculatedPrice))
    const cinnamonroll2price = (Number(cinnamonroll2.calculatedPrice))
    const cinnamonroll3price = (Number(cinnamonroll3.calculatedPrice))
    const cinnamonroll4price = (Number(cinnamonroll4.calculatedPrice))
    */
    const btnDelete = cinnamonroll.element.querySelector('.removeblock');
    btnDelete.addEventListener('click', () => {
        deleteRoll(cinnamonroll);
    })
    rollListElement.append(cinnamonroll.element);




    updateElement(cinnamonroll);

}


//update dom elements of each roll
function updateElement(cinnamonroll, totalcost) {
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
//roll objects added

const cinnamonroll1 = addrolltopage(
    "Original" , 
   "Sugar Milk" ,
   "1",
   cinrolls["Original"]["basePrice"],
   "original-cinnamon-roll.jpg",
  (dropdownOptions.glaze.glazingadd[1] + cinrolls["Original"]["basePrice"]) * dropdownOptions.pack.packingmultiplier[0]
  );



const cinnamonroll2 = addrolltopage("Walnut" ,
   "Vanilla Milk" ,
    "12",
    (cinrolls["Walnut"]["basePrice"]),
    "walnut-cinnamon-roll.jpg",
     (dropdownOptions.glaze.glazingadd[2] + cinrolls["Walnut"]["basePrice"]) * dropdownOptions.pack.packingmultiplier[3]
    );

const cinnamonroll3 = addrolltopage(
    "Raisin" ,
     "Sugar Milk" ,
    "3",
    (cinrolls["Raisin"]["basePrice"]),
    "raisin-cinnamon-roll.jpg",
    (dropdownOptions.glaze.glazingadd[1] + cinrolls["Raisin"]["basePrice"]) * dropdownOptions.pack.packingmultiplier[1]
    );

const cinnamonroll4 = addrolltopage(
        "Apple" ,
         "Original" ,
        "3",
        (cinrolls["Apple"]["basePrice"]),
        "apple-cinnamon-roll.jpg",
        (dropdownOptions.glaze.glazingadd[0] + cinrolls["Apple"]["basePrice"]) * dropdownOptions.pack.packingmultiplier[1]
    );


for (const cinnamonroll of cart) {
        console.log(cinnamonroll);
        createElement(cinnamonroll);
    
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





//populate the dropdowns with 4 options since length of both glazing and packing options are 4

for (var i=0; i < 4 ; i++){ 
    var option = document.createElement('option');
    Glazing.innerHTML +=  "<option>" + dropdownOptions.glaze.name[i] + "</option>";
    Packing.innerHTML += "<option>" + dropdownOptions.pack.size[i] + "</option>";
    Glazing.addEventListener('change', glazingChange);
}



function glazingChange(This) {
    // get index of selected glazing option not value
    // reference video for selecting value(wasnt ultimatley needed) https://www.youtube.com/watch?v=1_hAT8uEG-w

    // = Packing.value;
    var packing_index = Packing.selectedIndex; // variable that stores index of selected packing
    var glazing_index = Glazing.selectedIndex; // variable that stores index of selected glazing

    // select specific item from object lists: packPrice and glazePrice
    packSize = (dropdownOptions.pack.size[packing_index]); // reassign what the pack size is based on selected 
    rollGlazing = (dropdownOptions.glaze.name[glazing_index]);  // reassign what the glazing is based on selected   
    packPrice = (dropdownOptions.pack.packingmultiplier[packing_index]); //reassign variable based on index.
    glazePrice = (dropdownOptions.glaze.glazingadd[glazing_index]); //reassign variable based on index.

  
    // update the price ...
    let currentprice = (glazePrice + rollbasePrice) * packPrice; //multiply the glazing by the pack size
    rollPrice.innerHTML = "$" + ((currentprice * 100)/100).toFixed(2); // money format
    
    //console.log(rollGlazing); 
    //console.log(packSize);

}



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

// we dont want duplicates in the cart for now so we will create a cart set. easier to remove items
//let cart = new Set();

// class roll which constructs a new cart taking the parameters of the roll flavor, glazing, packing size, and base price (NOT the total price)

