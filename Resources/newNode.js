

var infoLabel = Titanium.UI.createLabel({
	color:'#003366',
	text:'Please login',
	font:{fontSize:20,fontFamily:'Bangers'},
	textAlign:'center',
	width:'auto'
});

win.add(infoLabel);
var titleTF = Ti.UI.createTextField({
    top: 30,
    width: '90%',
    height: 30,
    hintText: 'Title',
    borderColor: '#888',
        color:'#FFF',
    borderRadius: 4,
    borderWidth: 1,
    paddingLeft: 10,
    clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
    autocaptalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
    autocorrect: false,
});

var storyTF = Titanium.UI.createTextArea({
	editable: true,
	font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
	suppressReturn:false,
	top: 10,
    width: '90%',
    backgroundColor:'transparent',
    height:100,
    hintText: 'Story',
    borderColor: '#888',
    color:'#FFF',
    borderRadius: 4,
    borderWidth: 1,
    paddingLeft: 10,
    clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
    autocaptalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
    autocorrect: false
});


var resultIcon = Ti.UI.createImageView({
    top: 15,
    width: 'auto',
    height: 'auto',
    image: 'images/icon-locked.png'
});

var label = Titanium.UI.createLabel({
	color:'#999',
	text:'Please login',
	font:{fontSize:20,fontFamily:'Helvetica'},
	textAlign:'center',
	width:'auto'
});


win.add(titleTF);
// win.add(passwordTF);
win.add(storyTF);
win.add(label);
win.add(resultIcon);

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
