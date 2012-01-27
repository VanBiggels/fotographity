Ti.include('google_kml.js');
// 
// var mainWindow = Titanium.UI.createWindow({
    // title:'Main',   modal: true
//     
    // });
// 
// var detailWindow = Titanium.UI.createWindow({
    // backButtonTitle: 'Back',
    // modal: true
// });
// 
// var detailTableView = Titanium.UI.createTableView({
    // style: Titanium.UI.iPhone.TableViewStyle.GROUPED
// });
// 
// detailWindow.add(detailTableView);

var win = Titanium.UI.currentWindow;
win.barColor = '#383838';





// // Back Button
// var backBtn = Titanium.UI.createButton({
   // title:'Back',
   // style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
// });
//  
// backBtn.addEventListener( 'click', function() {
    // win.close();
// });
//  
// mainWindow.setLeftNavButton(backBtn);
// 



var mapView = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    latitude:50.847573,
			longitude:5.009766,
			latitudeDelta:0.5,
			longitudeDelta:0.5,
			zoom:15,
			   
    animate: true,
    regionFit: true
});

win.add(mapView);
// mainWindow.open();

win.addEventListener('focus',function(e){
 // checkIn();
});


// 
	Titanium.Geolocation.getCurrentPosition(function(e)
	{
		if (!e.success || e.error)
		{
			currentLocation.text = 'error: ' + JSON.stringify(e.error);
			Ti.API.info("Code translation: "+translateErrorCode(e.code));
			alert('error ' + JSON.stringify(e.error));
			return;
		}

		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		mapview.region = {
			latitude:latitude,
			longitude:longitude,
			latitudeDelta:0.5,
			longitudeDelta:0.5,
			zoom:15,
		};

		// var altitudeAccuracy = e.coords.altitudeAccuracy;
		// Ti.API.info('speed ' + speed);
		// currentLocation.text = 'long:' + longitude + ' lat: ' + latitude;
// 
		// Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
	});
	