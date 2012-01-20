// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();




//
// create base UI tab and root window
//
var win_tab_list_overview = Titanium.UI.createWindow({  
    title:'Camera',
    // url:'map.js',
     url:'drupal.js',
	titleid:'mashups_win_title',
    backgroundColor:'#fff'
});
var tab_list_overview = Titanium.UI.createTab({  
    icon:'icons/KS_chat.png',
    title:'Topics',
    window:win_tab_list_overview
});

//
// create base UI tab and root window
//




var win_tab_foto_new = Titanium.UI.createWindow({  
    title:'Camera',
    url:'camera.js',
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
      title:'Camera',
    url:'map.js',
	titleid:'mashups_win_title',
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
      title:'Profile',
    url:'login_app.js',
    backgroundColor:'#fff'
});
var tab_settings = Titanium.UI.createTab({  
    icon:'icons/KS_settings.png',
    title:'Profile',
    window:win_tab_settings
});



//
//  add tabs
//
tabGroup.addTab(tab_list_overview);  
tabGroup.addTab(tab_foto_new);  
tabGroup.addTab(tab_geo_overview);  
tabGroup.addTab(tab_settings); 



// open tab group
tabGroup.open();
