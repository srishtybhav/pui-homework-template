
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


//populate the dropdowns with 4 options since length of both glazing and packing options are 4

for (var i=0; i < 4 ; i++){ 
    /*var option = document.createElement('option');*/
    Glazing.innerHTML +=  "<option>" + dropdownOptions.glaze.name[i] + "</option>";
    Packing.innerHTML += "<option>" + dropdownOptions.pack.size[i] + "</option>";
    //Glazing.addEventListener('change', glazingChange);


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


