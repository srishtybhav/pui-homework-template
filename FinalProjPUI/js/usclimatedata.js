/* ALL DATA IS PROVIDED BY:

1. NOAA National Climatic Data Center: https://www.ncdc.noaa.gov/index.php
"The temperatures are based on data collected by weather stations throughout each state during the years 1971 to 2000"

2. (Fromv the NOAA csv datasets but displayed in digital format) Current Results.com: https://www.currentresults.com/Weather/US/average-state-temperatures-in-summer.php,
https://www.currentresults.com/Weather/US/average-state-temperatures-in-fall.php, 
https://www.currentresults.com/Weather/US/average-state-temperatures-in-fall.php, 
https://www.currentresults.com/Weather/US/average-state-temperatures-in-spring.php


avgF = [0] of month
avgF = [1] of month
*/


const statedata = {
    "Alabama": {
        Summer: [78.6, 25.9],
        Fall: [63.7	,17.6],
        Winter: [46.5, 8.1],
        Spring: [62.5,16.9],
  
    },
    "Alaska" :{
        Summer: [52.3,	11.3],
        Fall: [26.7,	-2.9],
        Winter: [2.6,	-16.3	],
        Spring: [24.7, -4.1],
    },
    "Arizona" :{
        Summer: [78.1,25.6],
        Fall: [61.3,16.3],
        Winter: [43.6,	6.4],
        Spring: [58.2,14.6],
    },
    "Arkansas":{
        Summer: [78.8,26.0],
        Fall: [61.4,16.3],
        Winter: [41.5,	5.3],
        Spring: [60.3, 15.7],
    },
    "California":{
        Summer: [73.4,	23.0],
        Fall: [60.9,	16.1	],
        Winter: [46.2,	7.9	],
        Spring: [57.1,	13.9],
    },
    "Colorado":{
        Summer: [65.2,	18.4],
        Fall: [45.9	,7.7],
        Winter: [	25.8,	-3.4	],
        Spring: [43.7,	6.5	],
    }, 
    "Connecticut":{
        Summer: [69.2,	20.7],
        Fall: [51.2,	10.7],
        Winter: [28.5,	-1.9	],
        Spring: [47.3,	8.5	],  
    },
    "Delaware":{
        Summer: [74.2,	23.4],
        Fall: [57.4,	14.1],
        Winter: [36.1,	2.3	],
        Spring: [53.3,	11.8],
    },
    "Florida":{
        Summer: [81.0,27.2],
        Fall: [72.7,22.6],
        Winter: [	59.4,	15.2	],
        Spring: [69.9,21.1	],
    },
    "Georgia": {
        summer: [78.7,25.9],
        fall: [64.6,18.1	],
        winter: [47.8,	8.8	],
        spring: [63.1,17.3],
    },
    "Hawaii": {
        summer: [72.2,22.3	],
        fall: [71.8,22.1],
        winter: [67.4,	19.7],
        spring: [68.6,20.3	],
    }, 
    "Idaho": {
        summer: [63.7,17.6],
        fall: [44.8,7.1	],
        winter: [	25.4,	-3.7],
        spring: [43.6,6.4	],
    }, 
    "Illinois": {
        summer: [73.4,23.0],
        fall: [53.8,2.1],
        winter: [28.3, -2.1],
        spring: [51.6,10.9],
    },
    "Indiana" : {
        Summer : [72.4,22.4],
        Fall: [	53.8,12.1],
        Winter: [29.4,	-1.4	],
        Spring: [51.1,10.6],
    },
    "Iowa" : {
        Summer: [71.6,22.0],
        Fall: [49.8,9.9],
        Winter: [21.7,	-5.7	],
        Spring: [48.2,9.0	],
    }, 
    "Kansas": {
        Summer: [76.4,24.7],
        Fall: [	55.4,13.0],
        Winter: [	31.9,	-0.1	],
        Spring: [53.6,12.0],
    },
    "Kentucky" : {
        Summer: [74.5,23.6],
        Fall: [57.0,13.9],
        Winter: [35.9,	2.2	],
        Spring: [55.1,12.8],
    }, 
    "Louisiana" : {
        Summer: [81.1,27.3],
        Fall: [67.4,19.7],
        Winter: [50.9,	10.5],
        Spring: [66.3,19.1],
    }, 
    "Maine" : {
        Summer: [63.7,17.6],
        Fall: [	44.2,6.8],
        Winter: [	16.8,	-8.4],
        Spring: [39.1,3.9],
    },
    "Maryland" : {
        Summer: [73.3,	22.9	],
        Fall: [	56.1,	13.4	],
        Winter: [	34.7,	1.5	],
        Spring: [52.8,	11.6],
    }, 
    "Massachusetts" : {
        Summer: [73.3,	22.9	],
        Fall: [50.3,	10.2	],
        Winter: [	27.4,	-2.6	],
        Spring: [45.7,	7.6		],
    },
    "Michigan" : {
        Summer: [66.2,	19.0],
        Fall: [47.3,	8.5	],
        Winter: [21.7,	-5.7	],
        Spring: [42.6,	5.9	],
    }, 
    "Minnesota" : {
        Summer: [66.8,	19.3	],
        Fall: [	43.5,	6.4],
        Winter: [	12.4,	-10.9	],
        Spring: [41.9,	5.5		],
    },
    "Mississippi" : {
        Summer: [	79.5,	26.4],
        Fall: [64.2,	17.9],
        Winter: [46.7,	8.2	],
        Spring: [63.2,	17.3	],
    },
    "Missouri" : {
        Summer: [	75.4,	24.1],
        Fall: [56.0,	13.3	],
        Winter: [	32.3,	0.2],
        Spring: [54.4,	12.4],
    }, 
    "Montana" : {
        Summer: [64.2,	17.9],
        Fall: [43.0,	6.1	],
        Winter: [21.2,	-6.0	],
        Spring: [42.5,	5.8	],
    }, 
    "Nebraska" : {
        Summer: [	71.8,	22.1	],
        Fall: [49.5,	9.7],
        Winter: [25.7,	-3.5	],
        Spring: [48.2,	9.0	],
    },
    "Nevada" : {
        Summer: [69.0,	20.6],
        Fall: [50.2,	10.1],
        winter: [	32.2,	0.1	],
        Spring: [	48.0,	8.9	],
    },
    "New Hampshire" : {
        Summer: [65.5,	18.6],
        Fall: [46.3,	7.9	],
        Winter: [21.1,	-6.1	],
        Spring: [	42.4,	5.8	],
  
    },
    "New Jersey" : {
        Summer: [72.2,	22.3	],
        Fall: [	54.8,	12.7	],
        Winter: [33.0,	0.6],
        Spring: [50.6,	10.3],
  
    },
  
    "New Mexico" : {
        ummer: [71.4,	21.9	],
        Fall: [53.8,	12.1],
        Winter: [	36.1,	2.3	],
        Spring: [52.4,	11.3	],
  
    }, 
    "New York" : {
        Summer: [66.5,	19.2	],
        Fall: [48.1,	8.9	],
        Winter: [	23.3,	-4.8	],
        Spring: [43.6,	6.4	],
      
    },
    "North Carolina"  : {
        Summer: [75.7,	24.3 ],
        Fall: [	60.2,	15.7],
        Winter: [42.1,	5.6],
        Spring: [58.2,	14.6	],
  
    }, 
    "North Dakota" :  {
        Summer: [66.6,	19.2	],
        Fall: [42.0,	5.6],
        Winter: [12.2,	-11.0	],
        Spring: [41.1,	5.1],
  
    },
    "Ohio"  : {
        Summer: [70.9,	21.6	],
        Fall: [52.9,	11.6],
        Winter: [29.5,	-1.4	],
        Spring: [49.7,	9.8	],
  
    },
    "Oklahoma" : {
        Summer: [79.6,	26.4],
        Fall: [	60.6,	15.9	],
        Winter: [39.1,	3.9	],
        Spring: [	59.1,	15.1],
  
    },
    "Oregon" : {
        Summer: [79.6,	26.4],
        Wall: [48.9,	9.4],
        Winter: [34.0,	1.1],
        Spring: [46.9,	8.3	],
  
    },
    "Pennsylvania" : {
        Summer: [68.6,	20.3],
        Fall: [50.9,	10.5	],
        Winter: [	28.4,	-2.0],
        Spring: [47.4,	8.6	],
  
    },
    "Rhode Island" : {
        Summer: [68.6,	20.3],
        Fall: [	53.1,	11.7],
        Winter: [31.4,	-0.3	],
        Spring: [47.0,	8.3	],
  
    },
    "South Carolina" : {
        Summer: [78.4,	25.8],
        Fall: [63.4,	17.4],
        Winter: [46.1,	7.8],
        Spring: [62.0,	16.7	],
  
    },
    "South Dakota" : {
        Summer: [78.4,	25.8],
        Fall: [	46.4,	8.0],
        Winter: [19.5,	-6.9],
        Spring: [44.8,	7.1	],
  
    },
    "Tennessee" : {
        Summer: [75.6,	24.2],
        Fall: [	58.6,	14.8	],
        Winter: [39.1,	3.9],
        Spring: [	57.3,	14.1	],
  
    },
    "Texas" : {
        Summer: [81.1,	27.3],
        Fall: [	65.5,	18.6	],
        Winter: [47.9,	8.8],
        Spring: [65.1,18.4],
  
    },
    "Utah"  : {
        Summer: [69.6,	20.9],
        Fall: [	49.1,	9.5],
        Winter: [	28.2,	-2.1],
        Spring: [47.5,	8.6],
  
    },
    "Vermont" : {
        Summer: [65.1, 18.4],
        Fall: [45.7,	7.6],
        Winter: [19.4,	-7.0],
        Spring: [41.5,	5.3],
  
    },
    "Virginia"  : {
        Summer: [73.2,	22.9	],
        Fall: [56.5,	13.6],
        Winter: [	36.8,	2.7	],
        Spring: [54.1,	12.3],
  
    },
    "Washington" : {
        Summer: [63.8,	17.7	],
        Fall: [48.5,	9.2	],
        Winter: [33.0,	0.6	],
        Spring: [47.7,	8.7],
  
    }, 
    "West Virginia"  : {
        Summer: [70.2,	21.2	],
        Fall: [	53.3,	11.8],
        Winter: [32.8,	0.4	],
        Spring: [50.9,10.5],
  
    },
    "Wisconsin" : {
        Summer: [66.8,	19.3		],
        Fall: [45.7,	7.6	],
        Winter: [17.2,	-8.2, 46],
        Spring: [42.9,6.1	],
  
    },
    "Wyoming" : {
        Summer: [63.5,	17.5	],
        Fall: [42.5,	5.8],
        Winter: [17.2, -8.2],
        Spring: [40.8, 4.9	],
  
    }
  }
  


  
  
  