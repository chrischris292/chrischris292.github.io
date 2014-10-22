
//ignore this line....dummy values. Gets overwritten later
var data={AZ:{fillKey:"Republican",electoralVotes:5},CO:{fillKey:"Light Democrat",electoralVotes:5},DE:{fillKey:"Democrat",electoralVotes:32},FL:{fillKey:"UNDECIDED",electoralVotes:29},GA:{fillKey:"Republican",electoralVotes:32},HI:{fillKey:"Democrat",electoralVotes:32},ID:{fillKey:"Republican",electoralVotes:32},IL:{fillKey:"Democrat",electoralVotes:32},IN:{fillKey:"Republican",electoralVotes:11},IA:{fillKey:"Light Democrat",electoralVotes:11},KS:{fillKey:"Republican",electoralVotes:32},KY:{fillKey:"Republican",electoralVotes:32},LA:{fillKey:"Republican",electoralVotes:32},MD:{fillKey:"Democrat",electoralVotes:32},ME:{fillKey:"california",electoralVotes:32},MA:{fillKey:"Democrat",electoralVotes:32},MN:{fillKey:"Democrat",electoralVotes:32},MI:{fillKey:"Democrat",electoralVotes:32},MS:{fillKey:"Republican",electoralVotes:32},MO:{fillKey:"Republican",electoralVotes:13},MT:{fillKey:"Republican",electoralVotes:32},NC:{fillKey:"Republican",electoralVotes:32},NE:{fillKey:"Republican",electoralVotes:32},NV:{fillKey:" Republican",electoralVotes:32},NH:{fillKey:"Light Democrat",electoralVotes:32},NJ:{fillKey:"california",electoralVotes:32},NY:{fillKey:"california",electoralVotes:90},ND:{fillKey:"Republican",electoralVotes:32},NM:{fillKey:"Democrat",electoralVotes:32},OH:{fillKey:"california",electoralVotes:32},OK:{fillKey:"Republican",electoralVotes:32},OR:{fillKey:" Republican",electoralVotes:32},PA:{fillKey:"california",electoralVotes:32},RI:{fillKey:"Democrat",electoralVotes:32},SC:{fillKey:"Republican",electoralVotes:32},SD:{fillKey:"Republican",electoralVotes:32},TN:{fillKey:"Republican",electoralVotes:32},TX:{fillKey:"Republican",electoralVotes:32},UT:{fillKey:"Republican",electoralVotes:32},WI:{fillKey:"Democrat",electoralVotes:32},VA:{fillKey:"Light Democrat",electoralVotes:32},VT:{fillKey:"california",electoralVotes:32},WA:{fillKey:"Washington",electoralVotes:10},WV:{fillKey:"Republican",electoralVotes:32},WY:{fillKey:"Republican",electoralVotes:32},CA:{fillKey:"Republican",electoralVotes:65},CT:{fill:"california",electoralVotes:32},AK:{fillKey:"Republican",electoralVotes:32},AR:{fillKey:"Republican",electoralVotes:32},AL:{fillKey:"Republican",electoralVotes:32}}

//This is the google data. needs to be changed for different data
var googleData = [["regionCode","name","Search volume index"],["US-NE","Nebraska",100],["US-MO","Missouri",79],["US-MA","Massachusetts",51],["US-PA","Pennsylvania",50],["US-IL","Illinois",46],["US-KS","Kansas",46],["US-MS","Mississippi",46],["US-IA","Iowa",45],["US-NH","New Hampshire",45],["US-SC","South Carolina",43],["US-TX","Texas",43],["US-AR","Arkansas",42],["US-CA","California",42],["US-RI","Rhode Island",41],["US-CT","Connecticut",41],["US-ME","Maine",41],["US-MI","Michigan",40],["US-VT","Vermont",40],["US-LA","Louisiana",39],["US-SD","South Dakota",39],["US-DE","Delaware",39],["US-NJ","New Jersey",38],["US-NY","New York",38],["US-MN","Minnesota",38],["US-DC","District of Columbia",38],["US-OK","Oklahoma",38],["US-TN","Tennessee",38],["US-MT","Montana",36],["US-NV","Nevada",36],["US-CO","Colorado",36],["US-KY","Kentucky",36],["US-AZ","Arizona",35],["US-NC","North Carolina",35],["US-IN","Indiana",35],["US-GA","Georgia",34],["US-OH","Ohio",33],["US-HI","Hawaii",32],["US-AL","Alabama",32],["US-WA","Washington",31],["US-FL","Florida",31],["US-ND","North Dakota",30],["US-MD","Maryland",30],["US-NM","New Mexico",30],["US-WI","Wisconsin",30],["US-VA","Virginia",29],["US-WY","Wyoming",29],["US-ID","Idaho",27],["US-OR","Oregon",26],["US-WV","West Virginia",24],["US-UT","Utah",24],["US-AK","Alaska",24]];
sanitizeData(googleData)


//initializes fill array.
var fills = {
  defaultFill: 'rgba(169, 192, 222, 0.42)'
};

//Creates map array for use in map init. 
createMapDataArray(data,fills, googleData);

//inits the map
mapInit(data, fills, document.getElementById('map_election'));


$("#WorldSeries").click(function(){
	//reinitialize everything...
	var fills1 = {
		defaultFill: 'rgba(169, 192, 222, 0.42)'
	};  
	var data1={AZ:{fillKey:"Republican",electoralVotes:5},CO:{fillKey:"Light Democrat",electoralVotes:5},DE:{fillKey:"Democrat",electoralVotes:32},FL:{fillKey:"UNDECIDED",electoralVotes:29},GA:{fillKey:"Republican",electoralVotes:32},HI:{fillKey:"Democrat",electoralVotes:32},ID:{fillKey:"Republican",electoralVotes:32},IL:{fillKey:"Democrat",electoralVotes:32},IN:{fillKey:"Republican",electoralVotes:11},IA:{fillKey:"Light Democrat",electoralVotes:11},KS:{fillKey:"Republican",electoralVotes:32},KY:{fillKey:"Republican",electoralVotes:32},LA:{fillKey:"Republican",electoralVotes:32},MD:{fillKey:"Democrat",electoralVotes:32},ME:{fillKey:"california",electoralVotes:32},MA:{fillKey:"Democrat",electoralVotes:32},MN:{fillKey:"Democrat",electoralVotes:32},MI:{fillKey:"Democrat",electoralVotes:32},MS:{fillKey:"Republican",electoralVotes:32},MO:{fillKey:"Republican",electoralVotes:13},MT:{fillKey:"Republican",electoralVotes:32},NC:{fillKey:"Republican",electoralVotes:32},NE:{fillKey:"Republican",electoralVotes:32},NV:{fillKey:" Republican",electoralVotes:32},NH:{fillKey:"Light Democrat",electoralVotes:32},NJ:{fillKey:"california",electoralVotes:32},NY:{fillKey:"california",electoralVotes:90},ND:{fillKey:"Republican",electoralVotes:32},NM:{fillKey:"Democrat",electoralVotes:32},OH:{fillKey:"california",electoralVotes:32},OK:{fillKey:"Republican",electoralVotes:32},OR:{fillKey:" Republican",electoralVotes:32},PA:{fillKey:"california",electoralVotes:32},RI:{fillKey:"Democrat",electoralVotes:32},SC:{fillKey:"Republican",electoralVotes:32},SD:{fillKey:"Republican",electoralVotes:32},TN:{fillKey:"Republican",electoralVotes:32},TX:{fillKey:"Republican",electoralVotes:32},UT:{fillKey:"Republican",electoralVotes:32},WI:{fillKey:"Democrat",electoralVotes:32},VA:{fillKey:"Light Democrat",electoralVotes:32},VT:{fillKey:"california",electoralVotes:32},WA:{fillKey:"Washington",electoralVotes:10},WV:{fillKey:"Republican",electoralVotes:32},WY:{fillKey:"Republican",electoralVotes:32},CA:{fillKey:"Republican",electoralVotes:65},CT:{fill:"california",electoralVotes:32},AK:{fillKey:"Republican",electoralVotes:32},AR:{fillKey:"Republican",electoralVotes:32},AL:{fillKey:"Republican",electoralVotes:32}}
	//ONLY VARIABLE NEEDED TO BE CHANGED HERE AT GOOGLEDATA1...
	var googleData1 = [["regionCode","name","Search volume index"],["US-NE","Nebraska",100],["US-MO","Missouri",79],["US-MA","Massachusetts",51],["US-PA","Pennsylvania",50],["US-IL","Illinois",46],["US-KS","Kansas",46],["US-MS","Mississippi",46],["US-IA","Iowa",45],["US-NH","New Hampshire",45],["US-SC","South Carolina",43],["US-TX","Texas",43],["US-AR","Arkansas",42],["US-CA","California",42],["US-RI","Rhode Island",41],["US-CT","Connecticut",41],["US-ME","Maine",41],["US-MI","Michigan",40],["US-VT","Vermont",40],["US-LA","Louisiana",39],["US-SD","South Dakota",39],["US-DE","Delaware",39],["US-NJ","New Jersey",38],["US-NY","New York",38],["US-MN","Minnesota",38],["US-DC","District of Columbia",38],["US-OK","Oklahoma",38],["US-TN","Tennessee",38],["US-MT","Montana",36],["US-NV","Nevada",36],["US-CO","Colorado",36],["US-KY","Kentucky",36],["US-AZ","Arizona",35],["US-NC","North Carolina",35],["US-IN","Indiana",35],["US-GA","Georgia",34],["US-OH","Ohio",33],["US-HI","Hawaii",32],["US-AL","Alabama",32],["US-WA","Washington",31],["US-FL","Florida",31],["US-ND","North Dakota",30],["US-MD","Maryland",30],["US-NM","New Mexico",30],["US-WI","Wisconsin",30],["US-VA","Virginia",29],["US-WY","Wyoming",29],["US-ID","Idaho",27],["US-OR","Oregon",26],["US-WV","West Virginia",24],["US-UT","Utah",24],["US-AK","Alaska",24]];
	sanitizeData(googleData1);
	//CHANGE TITLE HERE.
	$("#wrap > h1").text("World Series Map Visualization")
	createMapDataArray(data1,fills1, googleData1)
	console.log(data1)
	mapInit(data1, fills1, document.getElementById('map_election'));
});

$("#WorldCup").click(function(){
	//reinitialize everything...
	var fills1 = {
		defaultFill: 'rgba(169, 192, 222, 0.42)'
	};  
	var data1={AZ:{fillKey:"Republican",electoralVotes:5},CO:{fillKey:"Light Democrat",electoralVotes:5},DE:{fillKey:"Democrat",electoralVotes:32},FL:{fillKey:"UNDECIDED",electoralVotes:29},GA:{fillKey:"Republican",electoralVotes:32},HI:{fillKey:"Democrat",electoralVotes:32},ID:{fillKey:"Republican",electoralVotes:32},IL:{fillKey:"Democrat",electoralVotes:32},IN:{fillKey:"Republican",electoralVotes:11},IA:{fillKey:"Light Democrat",electoralVotes:11},KS:{fillKey:"Republican",electoralVotes:32},KY:{fillKey:"Republican",electoralVotes:32},LA:{fillKey:"Republican",electoralVotes:32},MD:{fillKey:"Democrat",electoralVotes:32},ME:{fillKey:"california",electoralVotes:32},MA:{fillKey:"Democrat",electoralVotes:32},MN:{fillKey:"Democrat",electoralVotes:32},MI:{fillKey:"Democrat",electoralVotes:32},MS:{fillKey:"Republican",electoralVotes:32},MO:{fillKey:"Republican",electoralVotes:13},MT:{fillKey:"Republican",electoralVotes:32},NC:{fillKey:"Republican",electoralVotes:32},NE:{fillKey:"Republican",electoralVotes:32},NV:{fillKey:" Republican",electoralVotes:32},NH:{fillKey:"Light Democrat",electoralVotes:32},NJ:{fillKey:"california",electoralVotes:32},NY:{fillKey:"california",electoralVotes:90},ND:{fillKey:"Republican",electoralVotes:32},NM:{fillKey:"Democrat",electoralVotes:32},OH:{fillKey:"california",electoralVotes:32},OK:{fillKey:"Republican",electoralVotes:32},OR:{fillKey:" Republican",electoralVotes:32},PA:{fillKey:"california",electoralVotes:32},RI:{fillKey:"Democrat",electoralVotes:32},SC:{fillKey:"Republican",electoralVotes:32},SD:{fillKey:"Republican",electoralVotes:32},TN:{fillKey:"Republican",electoralVotes:32},TX:{fillKey:"Republican",electoralVotes:32},UT:{fillKey:"Republican",electoralVotes:32},WI:{fillKey:"Democrat",electoralVotes:32},VA:{fillKey:"Light Democrat",electoralVotes:32},VT:{fillKey:"california",electoralVotes:32},WA:{fillKey:"Washington",electoralVotes:10},WV:{fillKey:"Republican",electoralVotes:32},WY:{fillKey:"Republican",electoralVotes:32},CA:{fillKey:"Republican",electoralVotes:65},CT:{fill:"california",electoralVotes:32},AK:{fillKey:"Republican",electoralVotes:32},AR:{fillKey:"Republican",electoralVotes:32},AL:{fillKey:"Republican",electoralVotes:32}}
	//ONLY VARIABLE NEEDED TO BE CHANGED HERE AT GOOGLEDATA1...
	var googleData1 = [["regionCode","name","Search volume index"],["US-CO","Colorado",100],["US-IN","Indiana",99],["US-WA","Washington",98],["US-LA","Louisiana",96],["US-MD","Maryland",94],["US-IL","Illinois",92],["US-NV","Nevada",91],["US-AZ","Arizona",90],["US-PA","Pennsylvania",89],["US-WI","Wisconsin",89],["US-TX","Texas",87],["US-KS","Kansas",87],["US-NE","Nebraska",86],["US-NY","New York",86],["US-MI","Michigan",84],["US-NJ","New Jersey",84],["US-MA","Massachusetts",84],["US-IA","Iowa",82],["US-MO","Missouri",81],["US-MT","Montana",81],["US-SD","South Dakota",81],["US-MN","Minnesota",81],["US-ND","North Dakota",81],["US-CA","California",80],["US-OH","Ohio",79],["US-GA","Georgia",78],["US-NC","North Carolina",78],["US-DC","District of Columbia",77],["US-WY","Wyoming",77],["US-FL","Florida",77],["US-CT","Connecticut",76],["US-MS","Mississippi",76],["US-ID","Idaho",75],["US-NM","New Mexico",74],["US-HI","Hawaii",73],["US-WV","West Virginia",72],["US-TN","Tennessee",72],["US-KY","Kentucky",71],["US-NH","New Hampshire",71],["US-UT","Utah",71],["US-DE","Delaware",71],["US-AK","Alaska",70],["US-RI","Rhode Island",70],["US-VT","Vermont",69],["US-SC","South Carolina",69],["US-OK","Oklahoma",68],["US-ME","Maine",64],["US-VA","Virginia",63],["US-AR","Arkansas",63],["US-AL","Alabama",57],["US-OR","Oregon",57]]
	sanitizeData(googleData1);
	//CHANGE TITLE HERE.
	$("#wrap > h1").text("FIFA World Cup")
	createMapDataArray(data1,fills1, googleData1)
	mapInit(data1, fills1, document.getElementById('map_election'));
});

$("#NBA").click(function(){
	//reinitialize everything...
	var fills1 = {
		defaultFill: 'rgba(169, 192, 222, 0.42)'
	};  
	var data1={AZ:{fillKey:"Republican",electoralVotes:5},CO:{fillKey:"Light Democrat",electoralVotes:5},DE:{fillKey:"Democrat",electoralVotes:32},FL:{fillKey:"UNDECIDED",electoralVotes:29},GA:{fillKey:"Republican",electoralVotes:32},HI:{fillKey:"Democrat",electoralVotes:32},ID:{fillKey:"Republican",electoralVotes:32},IL:{fillKey:"Democrat",electoralVotes:32},IN:{fillKey:"Republican",electoralVotes:11},IA:{fillKey:"Light Democrat",electoralVotes:11},KS:{fillKey:"Republican",electoralVotes:32},KY:{fillKey:"Republican",electoralVotes:32},LA:{fillKey:"Republican",electoralVotes:32},MD:{fillKey:"Democrat",electoralVotes:32},ME:{fillKey:"california",electoralVotes:32},MA:{fillKey:"Democrat",electoralVotes:32},MN:{fillKey:"Democrat",electoralVotes:32},MI:{fillKey:"Democrat",electoralVotes:32},MS:{fillKey:"Republican",electoralVotes:32},MO:{fillKey:"Republican",electoralVotes:13},MT:{fillKey:"Republican",electoralVotes:32},NC:{fillKey:"Republican",electoralVotes:32},NE:{fillKey:"Republican",electoralVotes:32},NV:{fillKey:" Republican",electoralVotes:32},NH:{fillKey:"Light Democrat",electoralVotes:32},NJ:{fillKey:"california",electoralVotes:32},NY:{fillKey:"california",electoralVotes:90},ND:{fillKey:"Republican",electoralVotes:32},NM:{fillKey:"Democrat",electoralVotes:32},OH:{fillKey:"california",electoralVotes:32},OK:{fillKey:"Republican",electoralVotes:32},OR:{fillKey:" Republican",electoralVotes:32},PA:{fillKey:"california",electoralVotes:32},RI:{fillKey:"Democrat",electoralVotes:32},SC:{fillKey:"Republican",electoralVotes:32},SD:{fillKey:"Republican",electoralVotes:32},TN:{fillKey:"Republican",electoralVotes:32},TX:{fillKey:"Republican",electoralVotes:32},UT:{fillKey:"Republican",electoralVotes:32},WI:{fillKey:"Democrat",electoralVotes:32},VA:{fillKey:"Light Democrat",electoralVotes:32},VT:{fillKey:"california",electoralVotes:32},WA:{fillKey:"Washington",electoralVotes:10},WV:{fillKey:"Republican",electoralVotes:32},WY:{fillKey:"Republican",electoralVotes:32},CA:{fillKey:"Republican",electoralVotes:65},CT:{fill:"california",electoralVotes:32},AK:{fillKey:"Republican",electoralVotes:32},AR:{fillKey:"Republican",electoralVotes:32},AL:{fillKey:"Republican",electoralVotes:32}}
	//ONLY VARIABLE NEEDED TO BE CHANGED HERE AT GOOGLEDATA1...
	var googleData1 = [["regionCode","name","Search volume index"],["US-TX","Texas",100],["US-FL","Florida",89],["US-IL","Illinois",73],["US-OK","Oklahoma",73],["US-CA","California",71],["US-NY","New York",71],["US-GA","Georgia",71],["US-HI","Hawaii",65],["US-MA","Massachusetts",64],["US-LA","Louisiana",64],["US-DC","District of Columbia",64],["US-NV","Nevada",60],["US-MI","Michigan",60],["US-UT","Utah",60],["US-OH","Ohio",60],["US-AZ","Arizona",60],["US-MD","Maryland",58],["US-WA","Washington",57],["US-NC","North Carolina",56],["US-NJ","New Jersey",56],["US-MS","Mississippi",55],["US-CO","Colorado",54],["US-MN","Minnesota",54],["US-SC","South Carolina",53],["US-MO","Missouri",52],["US-KS","Kansas",52],["US-TN","Tennessee",52],["US-IN","Indiana",51],["US-NM","New Mexico",51],["US-KY","Kentucky",50],["US-AL","Alabama",50],["US-CT","Connecticut",49],["US-PA","Pennsylvania",49],["US-AR","Arkansas",48],["US-NE","Nebraska",48],["US-ND","North Dakota",47],["US-DE","Delaware",46],["US-RI","Rhode Island",45],["US-WI","Wisconsin",45],["US-OR","Oregon",45],["US-VA","Virginia",45],["US-ID","Idaho",44],["US-IA","Iowa",44],["US-VT","Vermont",42],["US-SD","South Dakota",42],["US-MT","Montana",42],["US-AK","Alaska",41],["US-WV","West Virginia",40],["US-NH","New Hampshire",38],["US-WY","Wyoming",37],["US-ME","Maine",36]];
	sanitizeData(googleData1);
	//CHANGE TITLE HERE.
	$("#wrap > h1").text("NBA Finals Visualization")
	createMapDataArray(data1,fills1, googleData1)
	mapInit(data1, fills1, document.getElementById('map_election'));
});

$("#NFL").click(function(){
	//reinitialize everything...
	var fills1 = {
		defaultFill: 'rgba(169, 192, 222, 0.42)'
	};  
	var data1={AZ:{fillKey:"Republican",electoralVotes:5},CO:{fillKey:"Light Democrat",electoralVotes:5},DE:{fillKey:"Democrat",electoralVotes:32},FL:{fillKey:"UNDECIDED",electoralVotes:29},GA:{fillKey:"Republican",electoralVotes:32},HI:{fillKey:"Democrat",electoralVotes:32},ID:{fillKey:"Republican",electoralVotes:32},IL:{fillKey:"Democrat",electoralVotes:32},IN:{fillKey:"Republican",electoralVotes:11},IA:{fillKey:"Light Democrat",electoralVotes:11},KS:{fillKey:"Republican",electoralVotes:32},KY:{fillKey:"Republican",electoralVotes:32},LA:{fillKey:"Republican",electoralVotes:32},MD:{fillKey:"Democrat",electoralVotes:32},ME:{fillKey:"california",electoralVotes:32},MA:{fillKey:"Democrat",electoralVotes:32},MN:{fillKey:"Democrat",electoralVotes:32},MI:{fillKey:"Democrat",electoralVotes:32},MS:{fillKey:"Republican",electoralVotes:32},MO:{fillKey:"Republican",electoralVotes:13},MT:{fillKey:"Republican",electoralVotes:32},NC:{fillKey:"Republican",electoralVotes:32},NE:{fillKey:"Republican",electoralVotes:32},NV:{fillKey:" Republican",electoralVotes:32},NH:{fillKey:"Light Democrat",electoralVotes:32},NJ:{fillKey:"california",electoralVotes:32},NY:{fillKey:"california",electoralVotes:90},ND:{fillKey:"Republican",electoralVotes:32},NM:{fillKey:"Democrat",electoralVotes:32},OH:{fillKey:"california",electoralVotes:32},OK:{fillKey:"Republican",electoralVotes:32},OR:{fillKey:" Republican",electoralVotes:32},PA:{fillKey:"california",electoralVotes:32},RI:{fillKey:"Democrat",electoralVotes:32},SC:{fillKey:"Republican",electoralVotes:32},SD:{fillKey:"Republican",electoralVotes:32},TN:{fillKey:"Republican",electoralVotes:32},TX:{fillKey:"Republican",electoralVotes:32},UT:{fillKey:"Republican",electoralVotes:32},WI:{fillKey:"Democrat",electoralVotes:32},VA:{fillKey:"Light Democrat",electoralVotes:32},VT:{fillKey:"california",electoralVotes:32},WA:{fillKey:"Washington",electoralVotes:10},WV:{fillKey:"Republican",electoralVotes:32},WY:{fillKey:"Republican",electoralVotes:32},CA:{fillKey:"Republican",electoralVotes:65},CT:{fill:"california",electoralVotes:32},AK:{fillKey:"Republican",electoralVotes:32},AR:{fillKey:"Republican",electoralVotes:32},AL:{fillKey:"Republican",electoralVotes:32}}
	//ONLY VARIABLE NEEDED TO BE CHANGED HERE AT GOOGLEDATA1...
	var googleData1 = [["regionCode","name","Search volume index"],["US-CO","Colorado",100],["US-IN","Indiana",99],["US-WA","Washington",97],["US-LA","Louisiana",96],["US-MD","Maryland",94],["US-IL","Illinois",92],["US-NV","Nevada",91],["US-AZ","Arizona",91],["US-WI","Wisconsin",89],["US-PA","Pennsylvania",89],["US-TX","Texas",87],["US-KS","Kansas",87],["US-NY","New York",86],["US-NE","Nebraska",86],["US-NJ","New Jersey",85],["US-MA","Massachusetts",84],["US-MI","Michigan",84],["US-MT","Montana",82],["US-IA","Iowa",82],["US-SD","South Dakota",81],["US-MO","Missouri",81],["US-ND","North Dakota",80],["US-MN","Minnesota",80],["US-CA","California",80],["US-OH","Ohio",79],["US-GA","Georgia",79],["US-NC","North Carolina",77],["US-DC","District of Columbia",77],["US-FL","Florida",77],["US-WY","Wyoming",77],["US-CT","Connecticut",77],["US-MS","Mississippi",77],["US-ID","Idaho",75],["US-NM","New Mexico",73],["US-HI","Hawaii",73],["US-WV","West Virginia",72],["US-TN","Tennessee",72],["US-DE","Delaware",71],["US-KY","Kentucky",71],["US-UT","Utah",71],["US-NH","New Hampshire",70],["US-AK","Alaska",70],["US-RI","Rhode Island",70],["US-VT","Vermont",69],["US-SC","South Carolina",68],["US-OK","Oklahoma",68],["US-ME","Maine",63],["US-VA","Virginia",63],["US-AR","Arkansas",63],["US-AL","Alabama",57],["US-OR","Oregon",57]];
	sanitizeData(googleData1);

	//CHANGE TITLE HERE.
	$("#wrap > h1").text("Super Bowl Visualization")
	createMapDataArray(data1,fills1, googleData1)
	mapInit(data1, fills1, document.getElementById('map_election'));
});

//Helper functions
//Creates map
function mapInit(dataInput, fillInput, location){
$(location).empty();
	var election = new Datamap({
	  scope: 'usa',
	  element: location,
	  geographyConfig: {
		highlightBorderColor: '#bada55',
	   popupTemplate: function(geography, dataParam) {
		  return '<div class="hoverinfo">' + geography.properties.name + ' Percentage of Searches:  ' +  dataParam.electoralVotes + '%'
		},
		highlightBorderWidth: 3
	  },
	  fills: fillInput,
	data:dataInput
	});
	election.labels();
}



//Input:  data string from google
//Ouput:  names are sanitized for use with mapinit. 
function sanitizeData(googleData){
  for(i = 0; i<googleData.length;i++)
  {
    var locationString = googleData[i][0];
    locationString = locationString.replace("US-","");
    googleData[i][0] = locationString
  }
}


//Input: value from search index
//Output: RGBA String
function calculateOpacity(input)
{
  var percentage = .1+  (input*.9)/100;

  var string = "rgba(169, 192, 222, "
  string = string + percentage + ")";
  return string;
}
function createMapDataArray(data,fills, googleData)
{
   for(i = 1; i<googleData.length;i++)
    {
      var stateCode = googleData[i][0];
      try{
        data[stateCode].electoralVotes = googleData[i][2];
        var RGBAString = calculateOpacity(googleData[i][2]);
        var state1 = googleData[i][1];
        fills[state1]= RGBAString;
        data[stateCode].fillKey = state1;
      }
      catch(err){
        console.log(stateCode)
      }
    }
}
