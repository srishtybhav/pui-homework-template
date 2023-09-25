
// Selected elements
const Glazing = document.querySelector('#Glazing');
const Packing = document.querySelector('#PackSize');
const Price = document.querySelector('.detailedprice');

// default global variable inputs before selection
const basePrice = 2.49;
const packPrice = 1; //default multiplier
const glazePrice = 0; //default multiplier


//Default Price shown before selecting
Price.innerHTML = "$" + basePrice; 

/* make the value for each option property the price change*/
const dropdownOptions = {
    name: ["Keep Original", "Sugar Milk", "Vanilla Milk", "Double Chocolate"],
    glazingadd: [0,0,0.50,1.50,], //addition
    size: [1,3,6,12],
    packingmultiplier: [1,3,5,10] //multiplier
}


//populate the dropdowns with 4 options since length of both glazing and packing options are 4

for (var i=0; i < 4 ; i++){ 
    /*var option = document.createElement('option');*/
    Glazing.innerHTML +=  "<option>" + dropdownOptions.name[i] + "</option>";
    Packing.innerHTML += "<option>" + dropdownOptions.size[i] + "</option>";
    //Glazing.addEventListener('change', glazingChange);


}

function glazingChange(This) {
    // get index of selected glazing option not value

    //var selected_option = Packing.value;
    var packing_index = Packing.selectedIndex; // variable that stores index of selected packing
    var glazing_index = Glazing.selectedIndex; // variable that stores index of selected glazing

    // select specific item from object lists: packPrice and glazePrice
    
    var packPrice = (dropdownOptions.packingmultiplier[packing_index]); //reassignvariable based on index.
    var glazePrice = (dropdownOptions.glazingadd[glazing_index]); //reassignvariable based on index.

  
    // update the price ...
    let currentprice = (glazePrice + basePrice) * packPrice; //multiply the glazing by the pack size
    Price.innerHTML = "$" + (Math.round(currentprice * 100)/100); //round to 4 decimal places for money format
  

}



