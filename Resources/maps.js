Ti.include('google_kml.js');

var mainWindow = Titanium.UI.createWindow({
    title:'Main',   modal: true
    
    });

var detailWindow = Titanium.UI.createWindow({
    backButtonTitle: 'Back',
    modal: true
});

var detailTableView = Titanium.UI.createTableView({
    style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

detailWindow.add(detailTableView);

var mapView = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {
        latitude: 38.9130129619191,
        longitude: -77.1011888683184,
        latitudeDelta:0.1,
        longitudeDelta:0.1
    },
    animate: true,
    regionFit: true
});

mainWindow.add(mapView);
mainWindow.open();

