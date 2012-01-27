var win1 = Titanium.UI.currentWindow;
win1.barColor = '#383838';
win1.layout='vertical';
win1.setBackgroundImage('../graphics/bg.png');
win1.setBackgroundColor('transparent');
// Back Button
var backBtn = Titanium.UI.createButton({
   title:'Back',
   style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
 
backBtn.addEventListener( 'click', function() {
    win1.close();
});
 
Ti.UI.currentWindow.setLeftNavButton(backBtn);


var about = Titanium.UI.createLabel({
	color:'#999',
	text:"This app is brought to you by\nBilliau Glenn & Van Grootel Vincent. It's created in Appcelerator as part of a school task for the course called 'development for mobile platforms'.\nThis app is supported by a\nDrupal 7 backend. ",
	top:10,
	height:200,

	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'80%',
	left:30
});
var twitGlenn = Titanium.UI.createLabel({
	color:'#999',
	text:'Twitter: @billiauglenn',
	top:10,    height: 30,

	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
var twitGlennBtn = Titanium.UI.createButton({
   title:'Visit Twitter',
    width: '60%',
    height: 30,
    top: 10,
});
var twitVincé = Titanium.UI.createLabel({
	color:'#999',
	text:'Twitter: @vanbiggels',
	top:10,
    height: 30,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
var twitVincéBtn = Titanium.UI.createButton({
   title:'Visit Twitter',
    width: '60%',
    height: 30,
    top: 10,
});

win1.add(about);
win1.add(twitGlenn);
win1.add(twitGlennBtn);
win1.add(twitVincé);
win1.add(twitVincéBtn);

twitGlennBtn.addEventListener('click', function(e)
{
//open link in safari - application will close
Titanium.Platform.openURL('http://m.twitter.com/billiauglenn');
});
twitVincéBtn.addEventListener('click', function(e)
{
//open link in safari - application will close
Titanium.Platform.openURL('http://m.twitter.com/vanbiggels');
});

