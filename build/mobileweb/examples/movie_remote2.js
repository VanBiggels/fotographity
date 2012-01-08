// regression issue for #965

// dynamic url with dynamic encoding (from kosso)
var media_url = "http://phreadz.com/service/encoder.php?g=5LPOKP754&iph=1";
var win = Ti.UI.currentWindow;

var activeMovie = Ti.Media.createVideoPlayer({
	url:media_url,
	backgroundColor:'#111',
	movieControlMode:Ti.Media.VIDEO_CONTROL_DEFAULT,
	scalingMode:Ti.Media.VIDEO_SCALING_MODE_FILL
});

if (parseFloat(Ti.Platform.version) >= 3.2)
{
	win.add(activeMovie);
}

activeMovie.play();

win.addEventListener('close', function() {
	alert("Window closed");
	activeMovie.stop();
});