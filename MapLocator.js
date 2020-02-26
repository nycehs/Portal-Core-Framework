// to do: 
// - update geoclient app key and ID; put in citywide service desk ticket?
// - geocode when user uses geolocation tool, so when 'select this neighborhood' is pressed we get result
// - can we allow user to select neighborhood by dropping a point?
// - how can we overlay a boundary geojson file? as a reference layer... alter the projection?


//Neighborhood Selector Button
 const outBtn = document.querySelector("#outputButton");
 outBtn.addEventListener("click",update);

// Locator Map
var map = new nyc.ol.FrameworkMap({
    mapTarget: '#map',
    searchTarget: '#map-search',
    startAt: '125 Worth Street',
    geoclientUrl: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example'
    // Developer portal app_key and id don't work, though the nycLib example works
    //geoclientUrl: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=cfed478bf47829a2951bc5a3bbc26422&app_id=2d2a1b38'
  });

//map.locationMgr.mapLocator.zoom = 16;  // zoom the map out just a little to experiment

// update the output div with the chosen geocoded NTA
function update(){
      document.querySelector("#locationOutput").innerHTML = "<br>NTA Code: "+map.location.data.nta+"<br>Neighborhood Name: "+map.location.data.ntaName;
  }

