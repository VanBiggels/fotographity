// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();




//
// create base UI tab and root window
//
var win_tab_list_overview = Titanium.UI.createWindow({  
    title:'tab_list_overview',
    backgroundColor:'#fff'
});
var tab_list_overview = Titanium.UI.createTab({  
    icon:'icons/KS_chat.png',
    title:'Topics',
    window:win_tab_list_overview
});

var label_tab_list_overview = Titanium.UI.createLabel({
	color:'#999',
	text:'I am tab_list_overview',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win_tab_list_overview.add(label_tab_list_overview);

//
// create base UI tab and root window
//




var win_tab_foto_new = Titanium.UI.createWindow({  
    title:'Camera',
    url:'camera_basic.js',
	titleid:'mashups_win_title',
    backgroundColor:'#fff'
});
var tab_foto_new = Titanium.UI.createTab({  
    icon:'icons/KS_camera.png',
    title:'Share',
    window:win_tab_foto_new
});



//
// create base UI tab and root window
//
var win_tab_geo_overview = Titanium.UI.createWindow({  
    title:'tab_geo_overview',
       title:'Geo Overview',
    url:'/Resources/drupal.js',
    backgroundColor:'#fff'
});
var tab_geo_overview = Titanium.UI.createTab({  
    icon:'icons/KS_radar.png',
    title:'Nearby',
    window:win_tab_geo_overview
});

//
// create base UI tab and root window
//


var win_tab_settings = Titanium.UI.createWindow({  
    title:'tab_settings',
    backgroundColor:'#fff'
});
var tab_settings = Titanium.UI.createTab({  
    icon:'icons/KS_settings.png',
    title:'Profile',
    window:win_tab_settings
});

var label_tab_settings = Titanium.UI.createLabel({
	color:'#999',
	text:'I am tab_settings',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win_tab_settings.add(label_tab_settings);






var win5 = Titanium.UI.createWindow({
	// url:'camera_basic.js',
	url:'/windows/TwitterWindow.js',
	titleid:'mashups_win_title'
});
var tab5 = Titanium.UI.createTab({
	icon:'icons/KS_settings.png',
	titleid:'mashups_win_title',
	window:win5
});


//
//  add tabs
//
tabGroup.addTab(tab_list_overview);  
tabGroup.addTab(tab_foto_new);  
tabGroup.addTab(tab_geo_overview);  
tabGroup.addTab(tab_settings); 
tabGroup.addTab(tab5); 



// open tab group
tabGroup.open();
