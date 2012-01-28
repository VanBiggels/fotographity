var win = Titanium.UI.currentWindow;
win.barColor = '#383838';

Titanium.include('newNode.js');

var camera = Titanium.UI.createButton({
	systemButton : Titanium.UI.iPhone.SystemButton.CAMERA
});

//
// CREATE BUTTONS TO CHANGE VIEW
//

// Back Button
var saveNode = Titanium.UI.createButton({
	title : 'Save',
	style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
//
// saveNode.addEventListener( 'click', function() {
//
// });

Ti.UI.currentWindow.setRightNavButton(saveNode);

Ti.UI.currentWindow.setLeftNavButton(camera);

// win.lefttNavButton = camera;
// win.toolbar = [flexSpace,fixedSpace,flexSpace,save];
camera.addEventListener('click', function() {
	putPhoto();
});

saveNode.addEventListener('click', function(e) {
	var xhr = Titanium.Network.createHTTPClient();

	xhr.onload = function() {
		//Just log the responseText for fun
		Ti.API.info(this.responseText);

		//We translate the json string into a neat object
		var response = JSON.parse(this.responseText);

		// //We save a drupal 'cookie'
		// var drupalCookie = response.session_name + '=' + response.sessid;
		// Ti.App.drupalCookie = drupalCookie;
		// //Titanium.App.Properties.setString('drupalCookie', drupalCookie);
		//
		//We make the interface happy
		// resultIcon.image = '../images/icon-check.png';
		label.text = '';
		//We make sure the keyboard is hidden
		titleTF.blur();
		storyTF.blur();
	};

	xhr.onerror = function() {
		Ti.API.info('Error posting node');

		//We clear the global variables (naughty)
		Ti.App.drupalCookie = null;
	};
	// open the client
	xhr.open('POST', 'http://vanbiggels.be/mobile/api/node');

	// create the json string to send
	var nodeObject = {
		"node" : {
			"type" : "topic",
			"title" : titleTF.value,
			"language" : "und",
			"body" : {
				"und" : {
					"0" : {
						"value" : storyTF.value
					}
				}
			}
		}

	}
	var nodeString = JSON.stringify(nodeObject);

	// set the content-type header
	xhr.setRequestHeader('content-type', 'application/json');

	// send the data
	if(Ti.App.drupalCookie == null) {
		Titanium.UI.createAlertDialog({
			title : 'New topic',
			message : 'Please login first'
		}).show();

	} else {
		xhr.send(nodeString);
		Titanium.UI.createAlertDialog({
			title : 'New topic',
			message : 'Your message has been posted successfully'
		}).show();

	}

});
// action