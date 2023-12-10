/* ALL DATA IS PROVIDED BY:

1. NOAA National Climatic Data Center: https://www.ncdc.noaa.gov/index.php
"The temperatures are based on data collected by weather stations throughout each state during the years 1971 to 2000"

2. (Fromv the NOAA csv datasets but displayed in digital format) Current Results.com: https://www.currentresults.com/Weather/US/average-state-temperatures-in-summer.php,
https://www.currentresults.com/Weather/US/average-state-temperatures-in-fall.php, 
https://www.currentresults.com/Weather/US/average-state-temperatures-in-fall.php, 
https://www.currentresults.com/Weather/US/average-state-temperatures-in-spring.php


avgF = [0] of season
avgF = [1] of season
avgH = [2] of season
avgL = [3] of season
*/


const statedata = {
    "Alabama": {
        Summer: [78.6, 25.9, 90.2,66.8],
        Fall: [63.7	,17.6, 86,	41.6 ],
        Winter: [46.5, 8.1, 60.7,34.5],
        Spring: [62.5,16.9, 82.8,43.9],
  
    },
    "Alaska" :{
        Summer: [52.3,	11.3, 62.3,	41.9],
        Fall: [26.7, -2.9, 48.3, 7.3],
        Winter: [2.6, -16.3, 16.2, -2.4],
        Spring: [24.7, -4.1, 48.9,3.5],
    },
    "Arizona" :{
        Summer: [78.1,25.6, 95.2, 59.9],
        Fall: [61.3,16.3, 87.9, 38.1],
        Winter: [43.6,	6.4, 59.3,	29.9],
        Spring: [58.2,14.6, 82.6,38],
    },
    "Arkansas":{
        Summer: [78.8,26.0, 95.2, 66.7],
        Fall: [61.4,16.3 ,84.5, 40],
        Winter: [41.5,	5.3, 54.3,30.5],
        Spring: [60.3, 15.7, 79.9,40.9],
    },
    "California":{
        Summer: [73.4, 23.0, 90.9, 55.5],
        Fall: [60.9, 16.1, 85.2, 39.6],
        Winter: [46.2, 7.9, 57.3, 34.2],
        Spring: [57.1, 13.9, 75.6, 39.3],
    },
    "Colorado":{
        Summer: [65.2,	18.4, 82.9,	47.6],
        Fall: [45.9	,7.7, 73.6, 22.2],
        Winter: [25.8,-3.4, 41.8,13.7],
        Spring: [43.7,	6.5, 67.1, 23.4],
    }, 
    "Connecticut":{
        Summer: [69.2, 20.7, 82.9, 56],
        Fall: [51.2, 10.7, 73.9, 32.6],
        Winter: [28.5, -1.9, 38.7, 20],
        Spring: [47.3, 8.5, 69.5,27.1],  
    },
    "Delaware":{
        Summer: [74.2, 23.4, 87.3,	62.4],
        Fall: [57.4, 14.1, 79, 37.6],
        Winter: [36.1, 2.3, 46.5, 26.5],
        Spring: [53.3, 11.8, 74.2,	34.3],
    },
    "Florida":{
        Summer: [81.0,27.2, 91.6,	70.9],
        Fall: [72.7,22.6, 89,	55],
        Winter: [	59.4,	15.2, 72.6,	47],
        Spring: [69.9,21.1, 87.5,44.4],
    },
    "Georgia": {
        Summer: [78.7,25.9, 91,47],
        Fall: [64.6, 18.1, 84.4,66.8],
        Winter: [47.8, 8.8, 61.9,42.9],
        Spring: [63.1,17.3, 83.4,35.5],
    },
    "Hawaii": {
        Summer: [80,26.6,	84,	68.5],
        Fall: [71.8,22.1, 83.8,	67],
        Winter: [67.4,	19.7, 78.1,	62.5],
        Spring: [68.6,20.3, 80.4,63.5],
    }, 
    "Idaho": {
        Summer: [63.7,17.6, 82.3,43.7],
        Fall: [44.8,7.1	, 71.2,	23.5],
        Winter: [25.4,-3.7, 37.4, 16.9],
        Spring: [43.6,6.4, 62.9	,63.5],
    }, 
    "Illinois": {
        Summer: [73.4,23.0, 85.8, 61.5],
        Fall: [53.8,2.1, 78.5,33],
        Winter: [28.3, -2.1, 39.7,18.6],
        Spring: [51.6,10.9, 74.1,31.5],
    },
    "Indiana" : { 
        Summer : [72.4,22.4, 83.5,60.5],
        Fall: [	53.8,12.1, 77.9,33.1],
        Winter: [29.4,-1.4, 40.1, 19.8],
        Spring: [51.1,10.6, 73.6,31.1],
    },
    "Iowa" : {
        Summer: [71.6,22.0, 83.9,59.2],
        Fall: [49.8,9.9, 75.4,	27.4,],
        Winter: [21.7,	-5.7, 33.2,	10.9],
        Spring: [48.2,9.0, 71.1,26.5],
    }, 
    "Kansas": {
        Summer: [76.4,24.7 ,91.5,61.7],
        Fall: [	55.4,13.0, 69.4,30.8],
        Winter: [31.9, -0.1, 47.2,	19.5],
        Spring: [53.6,12.0, 76.4,32],
    },
    "Kentucky" : {
        Summer: [74.5,23.6, 89.5, 61.9],
        Fall: [57.0,13.9, 80.7, 35.2],
        Winter: [35.9,	2.2, 64.1, 39.8],
        Spring: [55.1,12.8, 76.7, 35.3],
    }, 
    "Louisiana" : {
        Summer: [81.1,27.3, 92.2,70.7],
        Fall: [67.4,19.7, 88.2,	47.1],
        Winter: [50.9,	10.5, 30.7,	5.7],
        Spring: [66.3,19.1, 84.4,49.2],
    }, 
    "Maine" : {
        Summer: [63.7,17.6, 77.2, 49.5],
        Fall: [	44.2,6.8, 68,26.3],
        Winter: [16.8,-8.4, 45.7,25.3],
        Spring: [39.1,3.9, 74.3,33.4],
    },
    "Maryland" : {
        Summer: [73.3,22.9 ,86.9,61.7],
        Fall: [	56.1,13.4, 78.4,36.5],
        Winter: [34.7,1.5, 45.7,25.3],
        Spring: [52.8,11.6],
    }, 
    "Massachusetts" : {
        Summer: [73.3,	22.9, 81.9,	54.9],
        Fall: [50.3, 10.2, 73,	31.8],
        Winter: [27.4,-2.6, 39.8, 17.1],
        Spring: [45.7,	7.6	, 78.4,	36.5],
    },
    "Michigan" : {
        Summer: [66.2, 19.0 ,80.3,	52.9],
        Fall: [47.3,8.5, 78.4,28.8],
        Winter: [21.7, -5.7, 32.8, 12.8],
        Spring: [42.6,5.9,73,31.8],
    }, 
    "Minnesota" : {
        Summer: [66.8,19.3, 88.2, 53.6],
        Fall: [	43.5,6.4, 69.8,	21.6],
        Winter: [12.4,-10.9, 24.9, 0.9],
        Spring: [41.9,5.5, 78.4,28.8],
    },
    "Mississippi" : {
        Summer: [79.5,26.4,91.2, 68],
        Fall: [64.2,17.9,86.8, 42.5],
        Winter: [46.7,8.2, 60.6	, 35.2],
        Spring: [63.2,17.3, 69.8, 21.6],
    },
    "Missouri" : {
        Summer: [75.4,24.1,87, 63],
        Fall: [56.0,13.3,79.8, 34.4],
        Winter: [32.3,0.2, 45.6, 21.5],
        Spring: [54.4,	12.4, 86.8,	42.5],
    }, 
    "Montana" : {
        Summer: [64.2,	17.9, 91.7,	45.8],
        Fall: [43.0,6.1, 69.9, 20.6],
        Winter: [21.2,	-6.0, 42.6,	11.4],
        Spring: [42.5,	5.8, 79.8,	34.4],
    }, 
    "Nebraska" : {
        Summer: [71.8,	22.1, 87.3,	56.4],
        Fall: [49.5, 9.7, 77.6,	25],
        Winter: [25.7, -3.5, 40, 13.9],
        Spring: [48.2, 9.0, 69.9, 20.6],
    },
    "Nevada" : {
        Summer: [69.0,	20.6 ,89.9,	50],
        Fall: [50.2, 10.1, 79.6, 27.6],
        Winter: [32.2,0.1, 46.9	,21.1],
        Spring: [48.0,8.9, 77.6,25],
    },
    "New Hampshire" : {
        Summer: [65.5,	18.6 ,79.1,	50.8],
        Fall: [46.3, 7.9, 70, 27],
        Winter: [21.1, -6.1, 33.9,9.5],
        Spring: [42.4, 5.8, 79.6, 27.6],

    },
    "New Jersey" : {
        Summer: [72.2,	22.3, 85.7,	59.6],
        Fall: [	54.8, 12.7, 77.2, 35.5],
        Winter: [33.0, 0.6, 45,	23.2],
        Spring: [50.6, 10.3, 70,27],
  
    },
  
    "New Mexico" : {
        Summer: [71.4,21.9, 87.8,54.4],
        Fall: [53.8,	12.1, 80.4,	29],
        Winter: [	36.1,	2.3, 54,21.7],
        Spring: [52.4,	11.3, 80.4,	29],
  
    }, 
    "New York" : {
        Summer: [66.5,	19.2 ,79.7,	53.4],
        Fall: [48.1,8.9	, 80.4,	29.6],
        Winter: [	23.3,	-4.8, 32.9,	12.9],
        Spring: [43.6,	6.4, 80.4,	29.6],
      
    },
    "North Carolina"  : {
        Summer: [75.7,	24.3 ,88.1	,63.8 ],
        Fall: [	60.2,	15.7, 71.9	,38.6],
        Winter: [42.1,	5.6,54.8,	30.3 ],
        Spring: [58.2,	14.6, 71.9,	38.6],
  
    }, 
    "North Dakota" :  {
        Summer: [66.6, 19.2 ,81.5, 51.8	],
        Fall: [42.0, 5.6, 71.1,	18.5],
        Winter: [12.2, -11.0, 24.5,1],
        Spring: [41.1, 5.1, 71.1, 18.5],
  
    },
    "Ohio"  : {
        Summer: [70.9, 21.6, 84, 58.8],
        Fall: [52.9, 11.6, 76.6	,33.1],
        Winter: [29.5, -1.4, 39.5, 20.3 ],
        Spring: [49.7, 9.8, 76.6 ,33.1	],
  
    },
    "Oklahoma" : {
        Summer: [79.6, 26.4, 93.8, 65.9],
        Fall: [	60.6, 15.9, 85.1,37.4],
        Winter: [39.1, 3.9, 54.6, 26.6],
        Spring: [59.1, 15.1, 85.1,	37.4],
  
    },
    "Oregon" : {
        Summer: [79.6,	26.4 ,82.2,	44.5],
        Wall: [48.9,	9.4, , 74.1,30.1,],
        Winter: [34.0,	1.1, 44.3,	25.2],
        Spring: [46.9,	8.3, 74.1,	30.1],
  
    },
    "Pennsylvania" : {
        Summer: [68.6, 20.3, 82.3,	55.6],
        Fall: [50.9, 10.5, 73.8,31.7	],
        Winter: [28.4, -2.0, 39.2, 18.5],
        Spring: [47.4, 8.6, 73.8, 31.7],
  
    },
    "Rhode Island" : {
        Summer: [68.6, 20.3 ,81.9, 55.6],
        Fall: [	53.1, 11.7, 73.8,34.6],
        Winter: [31.4, -0.3, 42.7, 20.7],
        Spring: [47.0, 8.3, 73.8, 34.6],
  
    },
    "South Carolina" : {
        Summer: [78.4, 25.8, 92.9, 66.9],
        Fall: [63.4, 17.4, 84.5,41.9],
        Winter: [46.1, 7.8, 58.7, 34.3],
        Spring: [62.0, 16.7, 84.5, 41.9],
  
    },
    "South Dakota" : {
        Summer: [78.4, 25.8, 88.3, 54.1],
        Fall: [	46.4, 8.0, 75.2,22.1 ],
        Winter: [19.5, -6.9, 32.8, 8.2],
        Spring: [44.8, 7.1, 75.2, 22.1],
  
    },
    "Tennessee" : {
        Summer: [75.6, 24.2 , 87.9, 63.3],
        Fall: [	58.6, 14.8, 82	,36.9],
        Winter: [39.1, 3.9, 52,	28.4],
        Spring: [	57.3, 14.1, 82, 36.9],
  
    },
    "Texas" : {
        Summer: [81.1, 27.3, 94.6,	68.7],
        Fall: [	65.5, 18.6 ,88.2,43.6],
        Winter: [47.9,	8., 63.9, 34.8],
        Spring: [65.1,18.4, 88.2, 43.6],
  
    },
    "Utah"  : {
        Summer: [69.6, 20.9, 86.2, 50.8],
        Fall: [	49.1, 9.5, 76.7,25.7],
        Winter: [28.2, -2.1, 43.1, 17.7],
        Spring: [47.5, 8.6, 76.7,25.7],
  
    },
    "Vermont" : {
        Summer: [65.1, 18.4 ,76.3,	50.5],
        Fall: [45.7, 7.6, 69,26.5],
        Winter: [19.4, -7.0, 32.3,	7.9],
        Spring: [41.5, 5.3, 69,26.5],
  
    },
    "Virginia"  : {
        Summer: [73.2,	22.9 ,83.6,	60.88],
        Fall: [56.5, 13.6, 78.6,35.4],
        Winter: [36.8, 2.7, 49.2,26.3],
        Spring: [54.1, 12.3, 78.6,35.4],
  
    },
    "Washington" : {
        Summer: [63.8, 17.7, 80.4, 46.7],
        Fall: [48.5, 9.2, 70.8,30.7	],
        Winter: [33.0, 0.6, 41.9,25.8],
        Spring: [47.7, 8.7, 70.8,30.7],
  
    }, 
    "West Virginia"  : {
        Summer: [70.2, 21.2 ,83.2, 57.2],
        Fall: [	53.3, 11.8, 76.5, 32.5],
        Winter: [32.8, 0.4, 44.3, 22.5],
        Spring: [50.9,10.5, 76.5, 32.5],
  
    },
    "Wisconsin" : {
        Summer: [66.8,	19.3, 80.4,	53.7],
        Fall: [45.7, 7.6, 70.3,25.3],
        Winter: [17.2, -8.2, 28.8, 6.7],
        Spring: [42.9,6.1, 70.3, 25.3 ],
  
    },
    "Wyoming" : {
        Summer: [63.5,	17.5, 82.1,	44.1],
        Fall: [42.5, 5.8, 70.3,19.2],
        Winter: [17.2, -8.2,34.9, 11.1],
        Spring: [40.8, 4.9, 70.3, 19.2],
  
    }
  }
  


  
  
  