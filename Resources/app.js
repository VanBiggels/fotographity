// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundImage('graphics/bg.png');
Titanium.UI.setBackgroundColor('transparent');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();




//
// create base UI tab and root window
//
var win_tab_list_overview = Titanium.UI.createWindow({  
    title:'Topics',
    // url:'map.js',
     url:'windows/drupalFeed.js',
     color: '#fff',
     backgroundImage:'graphics/bg.png' ,
	titleid:'mashups_win_title'
});
var tab_list_overview = Titanium.UI.createTab({  
    icon:'icons/chat.png',
    title:'Topics',
    
    window:win_tab_list_overview
});

//
// create base UI tab and root window
//




var win_tab_foto_new = Titanium.UI.createWindow({  
    title:'New Topic',
    url:'windows/camera.js',
    color: '#fff',
	titleid:'mashups_win_title',
    layout:'vertical'
});
var tab_foto_new = Titanium.UI.createTab({  
    icon:'icons/camera.png',
    title:'Share',
    window:win_tab_foto_new
});



//
// create base UI tab and root window
//
var win_tab_geo_overview = Titanium.UI.createWindow({  
      title:'Nearby',
    url:'windows/maps.js'
});
var tab_geo_overview = Titanium.UI.createTab({  
    icon:'icons/radar.png',
    title:'Nearby',
    window:win_tab_geo_overview
});

//
// create base UI tab and root window
//


var win_tab_settings = Titanium.UI.createWindow({  
      title:'Profile',
    url:'windows/settings.js',
    color: '#fff',

    layout:'vertical'
});
var tab_settings = Titanium.UI.createTab({  
    icon:'icons/settings.png',
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

tabGroup.addEventListener('focus', function(e){
    tabGroup._activeTab = e.tab
    tabGroup._activeTabIndex = e.index
    // if ( tabGroup._activeTabIndex == -1) return;
    Ti.API.info(tabGroup._activeTabIndex);
    Ti.API.info(tabGroup._activeTab.title);
 
    // create property in Ti namespace
    // Ti.API._activeTab = tabGroup._activeTab;
    // Ti.API.info(Ti.API._activeTab.title);
 
});
function tabSwitch(){
	tabGroup.setActiveTab(1);
alert('lol');
};
// open tab group
tabGroup.open();
