
//ignore this line....dummy values. Gets overwritten later
var data={AZ:{fillKey:"Republican",electoralVotes:5},CO:{fillKey:"Light Democrat",electoralVotes:5},DE:{fillKey:"Democrat",electoralVotes:32},FL:{fillKey:"UNDECIDED",electoralVotes:29},GA:{fillKey:"Republican",electoralVotes:32},HI:{fillKey:"Democrat",electoralVotes:32},ID:{fillKey:"Republican",electoralVotes:32},IL:{fillKey:"Democrat",electoralVotes:32},IN:{fillKey:"Republican",electoralVotes:11},IA:{fillKey:"Light Democrat",electoralVotes:11},KS:{fillKey:"Republican",electoralVotes:32},KY:{fillKey:"Republican",electoralVotes:32},LA:{fillKey:"Republican",electoralVotes:32},MD:{fillKey:"Democrat",electoralVotes:32},ME:{fillKey:"california",electoralVotes:32},MA:{fillKey:"Democrat",electoralVotes:32},MN:{fillKey:"Democrat",electoralVotes:32},MI:{fillKey:"Democrat",electoralVotes:32},MS:{fillKey:"Republican",electoralVotes:32},MO:{fillKey:"Republican",electoralVotes:13},MT:{fillKey:"Republican",electoralVotes:32},NC:{fillKey:"Republican",electoralVotes:32},NE:{fillKey:"Republican",electoralVotes:32},NV:{fillKey:" Republican",electoralVotes:32},NH:{fillKey:"Light Democrat",electoralVotes:32},NJ:{fillKey:"california",electoralVotes:32},NY:{fillKey:"california",electoralVotes:90},ND:{fillKey:"Republican",electoralVotes:32},NM:{fillKey:"Democrat",electoralVotes:32},OH:{fillKey:"california",electoralVotes:32},OK:{fillKey:"Republican",electoralVotes:32},OR:{fillKey:" Republican",electoralVotes:32},PA:{fillKey:"california",electoralVotes:32},RI:{fillKey:"Democrat",electoralVotes:32},SC:{fillKey:"Republican",electoralVotes:32},SD:{fillKey:"Republican",electoralVotes:32},TN:{fillKey:"Republican",electoralVotes:32},TX:{fillKey:"Republican",electoralVotes:32},UT:{fillKey:"Republican",electoralVotes:32},WI:{fillKey:"Democrat",electoralVotes:32},VA:{fillKey:"Light Democrat",electoralVotes:32},VT:{fillKey:"california",electoralVotes:32},WA:{fillKey:"Washington",electoralVotes:10},WV:{fillKey:"Republican",electoralVotes:32},WY:{fillKey:"Republican",electoralVotes:32},CA:{fillKey:"Republican",electoralVotes:65},CT:{fill:"california",electoralVotes:32},AK:{fillKey:"Republican",electoralVotes:32},AR:{fillKey:"Republican",electoralVotes:32},AL:{fillKey:"Republican",electoralVotes:32}}

//This is the google data. needs to be changed for different data
var googleData = [["regionCode","name","Search volume index"],["US-CA","California",100],["US-NV","Nevada",29],["US-AZ","Arizona",20],["US-HI","Hawaii",20],["US-UT","Utah",16],["US-WA","Washington",14],["US-OR","Oregon",13],["US-CO","Colorado",13],["US-ID","Idaho",13],["US-DC","District of Columbia",12],["US-NM","New Mexico",11],["US-AK","Alaska",11],["US-TX","Texas",11],["US-MT","Montana",10],["US-MO","Missouri",9],["US-WY","Wyoming",9],["US-IL","Illinois",9],["US-MN","Minnesota",8],["US-NY","New York",8],["US-NE","Nebraska",8],["US-KS","Kansas",8],["US-MI","Michigan",8],["US-MD","Maryland",8],["US-VA","Virginia",8],["US-FL","Florida",8],["US-NJ","New Jersey",8],["US-OK","Oklahoma",8],["US-MA","Massachusetts",8],["US-PA","Pennsylvania",7],["US-OH","Ohio",7],["US-CT","Connecticut",7],["US-GA","Georgia",7],["US-IA","Iowa",7],["US-VT","Vermont",7],["US-AR","Arkansas",7],["US-WI","Wisconsin",7],["US-IN","Indiana",7],["US-NC","North Carolina",7],["US-TN","Tennessee",7],["US-SD","South Dakota",6],["US-SC","South Carolina",6],["US-RI","Rhode Island",6],["US-DE","Delaware",6],["US-ME","Maine",6],["US-NH","New Hampshire",6],["US-ND","North Dakota",6],["US-LA","Louisiana",6],["US-KY","Kentucky",6],["US-AL","Alabama",6],["US-MS","Mississippi",5],["US-WV","West Virginia",5]]
sanitizeData(googleData)


//initializes fill array.
var fills = {
  defaultFill: 'rgba(169, 192, 222, 0.42)'
};

//Creates map array for use in map init. 
createMapDataArray(data,fills, googleData);

//inits the map
mapInit(data, fills, document.getElementById('map_election'));






//Helper functions
//Creates map
function mapInit(dataInput, fillInput, location){
var election = new Datamap({
  scope: 'usa',
  element: location,
  geographyConfig: {
    highlightBorderColor: '#bada55',
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + ' Notorious BIG ' +  data.electoralVotes + ' '
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
  var percentage =  input/100;
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
