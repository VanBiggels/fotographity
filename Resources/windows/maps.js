Ti.include('google_kml.js');
var win = Titanium.UI.currentWindow;
win.barColor = '#383838';

var mapView = Titanium.Map.createView({
	mapType : Titanium.Map.STANDARD_TYPE,
	latitudeDelta : 0.005,
	longitudeDelta : 0.005,
	zoom : 15,

	animate : true,
	regionFit : true,
	userLocation : true
});

win.add(mapView);
// mainWindow.open();

win.addEventListener('focus', function(e) {
	// checkIn();
});
//
Titanium.Geolocation.getCurrentPosition(function(e) {
	if(!e.success || e.error) {
		currentLocation.text = 'error: ' + JSON.stringify(e.error);
		Ti.API.info("Code translation: " + translateErrorCode(e.code));
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
		latitude : latitude,
		longitude : longitude,
		latitudeDelta : 0.005,
		longitudeDelta : 0.005,
		zoom : 15,
	};
	mapview.location = {
		latitudeDelta : 0.005,
		longitudeDelta : 0.005
	};

});
