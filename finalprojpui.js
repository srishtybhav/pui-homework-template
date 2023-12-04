//https://youtu.be/WtoyIiOp5Aw?si=f0eqlrE3cFj-B3kI used as a reference for some portions

document.addEventListener('DOMContentLoaded', () => {
  const Popup = document.getElementById('state-popup');
  const card = document.getElementById('outfit-card');
  const avgTempFCARD = document.getElementById('avgweathercardF');
  const avgTempCCARD = document.getElementById('avgweathercardC');
  const stateNamepopup = document.getElementById('statename');
  const avgTemppopupF = document.getElementById('avgtempF');
  const avgTemppopupC = document.getElementById('avgtempC');
  const stateNameOnCard = document.getElementById('statenamecard');
  const seasonoption = document.querySelector('#Season');
  const selectedSeasonElement = document.querySelector('.selected-season');
  const selectedSeasonElementCard = document.querySelector('.selected-seasoncard');


  //interpolating creates a gradient
  //scaleSequential maps numeric inputs to a range
  const heatmapColorsgradient = d3.scaleSequential(d3.interpolateBlues);
  heatmapColorsgradient.domain([0, 100]);

  //the whole us map
  const usmap = d3.select('#svg2');
  //individual states selected by each path
  const states = usmap.selectAll('path');

  //fetch temperatures from api
  /*async function fetchTemperatureData(selectedSeason){
    const apiKey = '46d5433b1deb69e95f4c8a2441e262cb';
    const city = 'San Francisco'; 
    const temperaturedataapiURL = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;
    let response = await fetch(temperaturedataapiURL);
    let result = await response.json();
    console.log('Temperature data:', result);


    const avgtemperaturedata = {};
    result.list.forEach(entry => {
      const cityName = entry.city; 
      const temperature = entry.main.temp_max;
      avgtemperaturedata[city] = temperature;
    });

  
    console.log('Temperature data:', avgtemperaturedata);
    return avgtemperaturedata;
  }
  */

var currentseason; 
  //the seasons on the card and popup will be updated to show the selected dropdown
    window.updateSelectedSeason = async (selectedSeason) => {
      selectedSeasonElement.textContent =`Selected Season: ${selectedSeason}`;
      selectedSeasonElementCard.textContent =`Selected Season: ${selectedSeason}`;
      
      //stores the selected season in the global variable
      currentseason = selectedSeason;




      //use await for asynch
      //const avgtemperaturedata = await fetchTemperatureData(selectedSeason);
      /*states.style('fill', (d,i) => {
        const statesname = d.id;
        const temperature = avgtemperaturedata[statesname];
        console.log('Temperature', temperature);
        return temperature ? heatmapColorsgradient(temperature) : 'lightgray';
      })
      */

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
    
    //positioning
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
      stateNameOnCard.innerHTML = "State: " + stateId;
      avgTempFCARD.innerHTML = "Average Temperature: " + statedata[stateId][currentseason][0] + "°F or " + statedata[stateId][currentseason][1] + "°C";
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

