var win = Titanium.UI.currentWindow;

		win.barColor = '#000';




// Back Button
var backBtn = Titanium.UI.createButton({
   title:'Back',
   style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
 
backBtn.addEventListener( 'click', function() {
    win.close();
});
 
Ti.UI.currentWindow.setLeftNavButton(backBtn);




Titanium.Media.showCamera({

	success:function(event)
	{
		var cropRect = event.cropRect;
		var image = event.media;

		Ti.API.debug('Our type was: '+event.mediaType);
		if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
		{
			var imageView = Ti.UI.createImageView({
				width:win.width,
				height:win.height,
				image:event.media
			});
			win.add(imageView);
		}
		else
		{
			alert("got the wrong type back ="+event.mediaType);
		}
	},
	cancel:function()
	{
	},
	error:function(error)
	{
		// create alert
		var a = Titanium.UI.createAlertDialog({title:'Camera'});

		// set message
		if (error.code == Titanium.Media.NO_CAMERA)
		{
			a.setMessage('No camera found');
		}
		else
		{
			a.setMessage('Unexpected error: ' + error.code);
		}

		// show alert
		a.show();
	},
	saveToPhotoGallery:true,
	allowEditing:true,
	mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
});
