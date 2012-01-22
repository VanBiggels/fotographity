var win2 = Titanium.UI.currentWindow;
win2.barColor = '#000';
win2.color='#FFF';

win2.setBackgroundImage('graphics/bg.png');
win2.setBackgroundColor('transparent');
Titanium.UI.setBackgroundImage('graphics/bg.png');
Titanium.UI.setBackgroundColor('transparent');
// Back Button
var refreshBtn = Titanium.UI.createButton({
   title:'Refresh',
   style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
 
refreshBtn.addEventListener( 'click', function() {
   refreshTableData();
});
 
Ti.UI.currentWindow.setLeftNavButton(refreshBtn);



var label = Titanium.UI.createLabel({
	color:'#999',
	text:'Please login ',
	font:{fontSize:20,fontFamily:'Helvetica'},
	textAlign:'center',
	width:'auto'
});
 
//Create table view

var nodeTable = Ti.UI.createTableView({
  height: '100%',
  width: '100%',
  	color:'#FFF',
    maxRowHeight:'30',
    //Set BG transparent
    backgroundColor:'#FFF',
    //Set row color - white
});

		nodeTable.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({title:node.title});
			// var wb = Ti.UI.createWebView({url:node.uri});
			var wb = Ti.UI.createView({url:node.uri});
			w.add(wb);
			var b = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.barColor = '#000';
w.backgroundColor='#FFF';

			w.setLeftNavButton(b);
			b.addEventListener('click',function()
			{
				w.close();
			});
			w.open({modal:true});
		});
		
		

win2.add(label);
win2.add(nodeTable);

win2.addEventListener('focus',function(e){
  if (!Ti.App.drupalCookie) {
    label.visible = false;
    nodeTable.visible = true;
    refreshBtn.visible=true;
    refreshTableData();
  } else {
    label.visible = true;
    nodeTable.data = null;
    nodeTable.visible = false;
    refreshBtn.visible=false;
  }
});

function refreshTableData() {
  var nodes = [];
  var xhr = Titanium.Network.createHTTPClient();
  xhr.onload = function()
  {
    //Just log the responseText for fun
    Ti.API.info(this.responseText);
    
    //We translate the json string into a neat object
    var response = JSON.parse(this.responseText);
 
    for (var i in response) {
      node = response[i];
      var row = Ti.UI.createTableViewRow({
        title : node.title,
      });
      nodes.push(row);
    }
    nodeTable.data = nodes; 
  };
  
  xhr.onerror = function () 
  {
    Ti.API.info('Unable to fetch nodes from Drupal');
    nodeTable.data = nodes; 
  };
  
  // open the client
  xhr.open('GET','http://vanbiggels.be/mobile/api/node');
  xhr.setRequestHeader('content-type','application/json');
  
  // fetch the cookie and set as header
  var drupalCookie = Ti.App.Properties.getString('drupalCookie');
  xhr.setRequestHeader('Cookie',drupalCookie);
  
  xhr.send();
}



// Functions

function doLogin(username,password) {
  alert(username.getValue);
}
