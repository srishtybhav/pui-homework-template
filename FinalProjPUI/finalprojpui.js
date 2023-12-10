//https://youtu.be/WtoyIiOp5Aw?si=f0eqlrE3cFj-B3kI used as a reference for some portions

document.addEventListener('DOMContentLoaded', () => {
  const Popup = document.getElementById('state-popup');
  const avgTempFCARD = document.getElementById('avgweathercardF');
  const avghighcard = document.getElementById('avgHcard');
  const avglowcard = document.getElementById("avgLcard");
  const stateNamepopup = document.getElementById('statename');
  const avgTemppopupF = document.getElementById('avgtempF');
  const stateNameOnCard = document.getElementById('statenamecard');
  const selectedSeasonElement = document.querySelector('.selected-season');
  const selectedSeasonElementCard = document.querySelector('.selected-seasoncard');
  const outfitimg = document.getElementById("outfitimage");

  //interpolating creates a gradient
  //scaleSequential maps numeric inputs to a range
  const heatmapColorsgradient = d3.scaleSequential(d3.interpolateBlues);
  heatmapColorsgradient.domain([0, 100]);

  //the whole us map
  const usmap = d3.select('#svg2');
  //individual states selected by each path
  const states = usmap.selectAll('path');


var currentseason; 
  //the seasons on the card and popup will be updated to show the selected dropdown
    window.updateSelectedSeason = async (selectedSeason) => {
      selectedSeasonElement.textContent =`Selected Season: ${selectedSeason}`;
      selectedSeasonElementCard.textContent =`Selected Season: ${selectedSeason}`;
      
      //stores the selected season in the global variable
      currentseason = selectedSeason;

      if (selectedSeason = "Select Season"){
        hidePopup();
      }

    };


  //function that calls the popup
  window.showPopup = (stateNamepopup, event) => {

    //coordinates of mouse events pointers
    const {clientX, clientY} = event;
    const popupWidth = Popup.offsetWidth;
    const popupHeight = Popup.offsetHeight;

    const xPosition = clientX + 5;
    const yPosition = clientY - popupHeight - 5;

    stateNamepopup.innerHTML = stateNamepopup;
    
    //positioning of popup
    Popup.style.left = `${xPosition}px`;
    Popup.style.top = `${yPosition}px`;   

    //remove the hidden class that tells the display not to be shown
    Popup.classList.remove('hidden');
  };


  //function that calls the popup to be hidden
  window.hidePopup = () => {
    Popup.classList.add('hidden');

  }; 



  //for each state's path...
  document.querySelectorAll('path').forEach((state) => {
    const stateId = state.id;

  
    //if clicked the state on the card is adjusted
    state.addEventListener('click', (event) => {

      var currenthigh = statedata[stateId][currentseason][2];
      var currentlow = statedata[stateId][currentseason][3];
      var currentavg = statedata[stateId][currentseason][0];

      //the farenheight to celcius calculation
      var celciushigh = ((currenthigh -32) * (5/9)).toFixed(1); //i realized i could just use the celcius conversion formula rather than manually putting it all in the dataset
      var celciuslow = ((currentlow -32) *(5/9)).toFixed(1);// "

      stateNameOnCard.innerHTML = "State: " + stateId;
      avgTempFCARD.innerHTML = "Average Temperature: " + currentavg + "°F or " + statedata[stateId][currentseason][1] + "°C";
      avghighcard.innerHTML = "Average High: " + currenthigh + "°F or " +celciushigh + "°C";
      avglowcard.innerHTML = "Average Low: " + currentlow + "°F or " + celciuslow + "°C";

      //the outfit images given for each range
      if (currentlow < 20){ 
        outfitimg.src = "../FinalProjPUI/images/below20degreeweather.jpg";
      } else if (((currentavg + currentlow)/2) < 35) {
        outfitimg.src = "../FinalProjPUI/images/20-40_degree_weather.jpg";
      } else if (currentavg >= 35 && currentavg < 55){
        outfitimg.src = "../FinalProjPUI/images/40-50_degree_weather.jpg";
      } else if (currentavg >= 55 && currentavg < 65){
        outfitimg.src = "../FinalProjPUI/images/55-65_degree_weather.jpg";
      } else if (currentavg >= 65 && currentavg < 70){     
        outfitimg.src = "../FinalProjPUI/images/65-70_degree_weather.jpg";  
      } else if (currentavg >= 70 && currentavg < 80){ //mild warm weather
        outfitimg.src = "../FinalProjPUI/images/70-80_degree_weather.jpg";  
      } else if (currenthigh >= 80){ //80 degrees and above is the temp people consider to be hot
        outfitimg.src = "../FinalProjPUI/images/80_degrees_and_upweather.jpg";
      }
    });
    

    //if the state is hovered over
    state.addEventListener('mouseover', (event) => {
      stateNamepopup.innerHTML = "State: " + stateId;
      avgTemppopupF.innerHTML = "Average Temperature: " + statedata[stateId][currentseason][0] + "°F or " + statedata[stateId][currentseason][1] + "°C";
    });
  });


  document.addEventListener('click', (event) => {
    if (!Popup.contains(event.target)){
      hidePopup();
    }
  });

});


//figure out the range of temperatures (use farenheights for the sake of this)
/*
80 degrees an up
70-80
60-70
50-60
40-50
30-40 
20-30
30 degrees and below: wear clothing that is layered, trenchcoats

*/


/* if ( avghigh.innerHTML >=  ) */

