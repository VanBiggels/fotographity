var win = Ti.UI.currentWindow;

var activeMovie = Ti.Media.createVideoPlayer({
	contentURL:'../movie.mp4',
	backgroundColor:'#111',
	movieControlStyle: Ti.Media.VIDEO_CONTROL_EMBEDDED,
	scalingMode:Ti.Media.VIDEO_SCALING_MODE_FILL,
	width:100,
	height:100,
	autoplay:true
});

win.add(activeMovie);

// label 
var movieLabel = Ti.UI.createLabel({
	text:'Do not try this at home',
	width:'auto',
	height:25,
	color:'white',
	font:{fontSize:24,fontFamily:'Helvetica Neue'}
});

// add label to view
activeMovie.add(movieLabel);

// label click
movieLabel.addEventListener('click',function()
{
	movieLabel.text = "You clicked the video label. Sweet!";
});

activeMovie.addEventListener('load',function()
{
	// animate label
	var t = Ti.UI.create2DMatrix();
	t = t.scale(3);
	movieLabel.animate({transform:t, duration:500, color:'red'},function()
	{
		var t = Ti.UI.create2DMatrix();
		movieLabel.animate({transform:t, duration:500, color:'white'});
	});
});
activeMovie.addEventListener('complete',function()
{
	Ti.API.debug('Completed!');
	Ti.UI.createAlertDialog({title:'Movie', message:'Completed!'}).show();
	win.close();
});

var thumbnailImage = activeMovie.thumbnailImageAtTime(4.0, Ti.Media.VIDEO_TIME_OPTION_EXACT);
win.add(Ti.UI.createImageView({
	image:thumbnailImage,
	bottom:10,
	width:100,
	height:100
}));

activeMovie.play();

win.addEventListener('close', function() {
	activeMovie.stop();
});