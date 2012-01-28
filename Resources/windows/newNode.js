var infoLabel = Titanium.UI.createLabel({
	color : '#003366',
	text : 'Please login',
	font : {
		fontSize : 20,
		fontFamily : 'Bangers'
	},
	textAlign : 'center',
	width : 'auto'
});

win.add(infoLabel);

var titleTF = Ti.UI.createTextField({
	top : 30,
	width : '90%',
	height : 30,
	hintText : 'Title',
	borderColor : '#888',
	color : '#FFF',
	top : 10,
	borderRadius : 4,
	borderWidth : 1,
	paddingLeft : 10,
	clearButtonMode : Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
	autocaptalization : Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
	autocorrect : false,
});

var storyTF = Titanium.UI.createTextArea({
	editable : true,
	font : {
		fontSize : 20,
		fontFamily : 'Marker Felt',
		fontWeight : 'bold'
	},
	suppressReturn : false,
	top : 10,
	width : '90%',
	backgroundColor : 'transparent',
	height : 100,
	hintText : 'Story',
	borderColor : '#888',
	color : '#FFF',
	borderRadius : 4,
	borderWidth : 1,
	paddingLeft : 10,
	clearButtonMode : Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
	autocaptalization : Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
	autocorrect : false
});

var resultIcon = Ti.UI.createImageView({
	top : 15,
	width : 'auto',
	height : 'auto',
	image : 'images/icon-locked.png'
});

var label = Titanium.UI.createLabel({
	color : '#999',
	text : 'Please login',
	font : {
		fontSize : 20,
		fontFamily : 'Helvetica'
	},
	textAlign : 'center',
	width : 'auto'
});

var photo = Ti.UI.createImageView({
	top : 10,
	width : 200,
	height : 200
})

win.add(label);
win.add(titleTF);
win.add(storyTF);
win.add(photo);

function putPhoto() {
	Titanium.Media.showCamera({

		success : function(event) {
			var cropRect = event.cropRect;
			var image = event.media;

			Ti.API.debug('Our type was: ' + event.mediaType);
			if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				photo.image = image;
			} else {
				alert("got the wrong type back =" + event.mediaType);
			}
		},
		cancel : function() {
		},
		error : function(error) {
			// create alert
			var a = Titanium.UI.createAlertDialog({
				title : 'Camera'
			});

			// set message
			if(error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('No camera found');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}

			// show alert
			a.show();
		},
		saveToPhotoGallery : true,
		allowEditing : true,
		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
	});
};

//
//
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
// Ti.UI.currentWindow.setLeftNavButton(backBtn);
//
//