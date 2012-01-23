// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
// var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
// var win1 = Titanium.UI.createWindow({  
    // title:'Login',
    // backgroundColor:'#fff',
    // layout: 'vertical',
// });
// var tab1 = Titanium.UI.createTab({  
    // icon:'KS_nav_views.png',
    // title:'Login',
    // window:win1
// });
// 
// var usernameTF = Ti.UI.createTextField({
    // top: 30,
    // width: '60%',
    // height: 30,
    // hintText: 'Username',
    // borderColor: '#888',
    // borderRadius: 4,
    // borderWidth: 1,
    // paddingLeft: 10,
    // clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
    // autocaptalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
    // autocorrect: false,
// });
// 
// var passwordTF = Ti.UI.createTextField({
    // top: 10,
    // width: '60%',
    // height: 30,
    // hintText: 'Password',
    // borderColor: '#888',
    // borderRadius: 4,
    // borderWidth: 1,
    // paddingLeft: 10,
    // clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
    // autocaptalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
    // autocorrect: false,
    // passwordMask: true,
// });
// 
// var loginB = Ti.UI.createButton({
    // title: 'Login',
    // width: '60%',
    // height: 30,
    // top: 20,
// });
// 
// var resultIcon = Ti.UI.createImageView({
    // top: 15,
    // width: 'auto',
    // height: 'auto',
    // image: 'images/icon-locked.png',
// });
// 
// win1.add(usernameTF);
// win1.add(passwordTF);
// win1.add(loginB);
// win1.add(resultIcon);
// 
// loginB.addEventListener('click',function(e){
  // var xhr = Titanium.Network.createHTTPClient();
//   
  // xhr.onload = function()
  // {
    // //Just log the responseText for fun
    // Ti.API.info(this.responseText);
//     
    // //We translate the json string into a neat object
    // var response = JSON.parse(this.responseText);
// 
    // //We save a drupal 'cookie'
    // var drupalCookie = response.session_name + '=' + response.sessid;
    // Ti.App.drupalCookie = drupalCookie;
    // //Titanium.App.Properties.setString('drupalCookie', drupalCookie);
//     
    // //We make the interface happy
    // resultIcon.image = 'images/icon-check.png';
//     
    // //We make sure the keyboard is hidden
    // usernameTF.blur();
    // passwordTF.blur();
  // };
//   
  // xhr.onerror = function () 
  // {
    // Ti.API.info('Invalid username or password');
//     
    // //We clear the global variables (naughty)
    // Ti.App.drupalCookie = null;
//     
    // //We make the interface unhappy
    // resultIcon.image = 'images/icon-close.png';
  // };
//   
  // // open the client
  // xhr.open('POST','http://vanbiggels.be/mobile/api/public/user/login');
//   
  // // create the json string to send 
  // var loginObject = {
    // username: usernameTF.value,
    // password: passwordTF.value,
  // }
  // var loginString=JSON.stringify(loginObject);
//   
  // // set the content-type header
  // xhr.setRequestHeader('content-type','application/json');
//   
  // // send the data
  // xhr.send(loginString);
// });

//
// create controls tab and root window
//
var win2 = Titanium.UI.currentWindow;
win2.barColor = '#000';
win2.color='#FFF';

win2.setBackgroundImage('graphics/bg.png');
win2.setBackgroundColor('transparent');
Titanium.UI.setBackgroundImage('graphics/bg.png');
Titanium.UI.setBackgroundColor('transparent');
// var win2 = Titanium.UI.createWindow({  
    // title:'Latest Articles',
    // backgroundColor:'#fff'
// });
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Latest Articles',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Please login',
	top:10,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

// create table view data object

var nodeTable = Ti.UI.createTableView({
  height: '100%',
  width: '100%',
});

//ADDING EVENTLISTENER TO ROW
nodeTable.addEventListener('click',function(e)
      {
  
          var w = Ti.UI.createWindow({
              title: this.title,
              backgroundColor: '#fff',
              
              });
			  
			w.barColor = '#000';
			w.color='#FFF';
			w.setBackgroundImage('graphics/bg.png');
			w.setBackgroundColor('transparent');

          var i = Ti.UI.createImageView({
              width:200,
              height:200,
              top:10,
              left:10
          });
          
          var t = Ti.UI.createLabel({
              left : 5,
              top : 5,
                            color:'#FFF',

              width : '100%' 
          });
          
          var d = Ti.UI.createLabel({
             left : 5,
             top : 10,
                           color:'#FFF',

             width : '100%' 
          });
          
          var u = Ti.UI.createLabel({
             left : 5,
             top : 15,              color:'#FFF',

             width : '100%' 
          });
          
          var com = Ti.UI.createLabel({
             left : 5,
             top : 20,
                           color:'#FFF',

             width : '100%' 
          });
           
          var xhré = Ti.Network.createHTTPClient();
          xhré.open("GET",this.uri);
          xhré.onload = function(){
              try{
                  
                  var doc=JSON.parse(this.responseText);
                  var desc = doc.body;
                  var und = desc.und;
                  var value2 = und[0].value;
                  var user = doc.name;
                  var comments = doc.comment_count;
                  var title = doc.title;
      
                  t.text=title;
                  d.text=value2;
                  u.text=user;
                  com.text=comments;
                  
              }catch(E){
                  alert(E);
              }
          };
          
          xhré.send();

          w.add(i);
          w.add(t);
          w.add(d);
          w.add(u);
          w.add(com);

          
          //var wb = Ti.UI.createWebView({url:e.row.url});
          //w.add(wb);
          var b = Titanium.UI.createButton({
              title:'Close',
              style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
          });
          w.setLeftNavButton(b);
          b.addEventListener('click',function()
          {
              w.close();
          });
          w.open({modal:true});
      });

win2.add(label2);
win2.add(nodeTable);

win2.addEventListener('focus',function(e){
  if (Ti.App.drupalCookie) {
    label2.visible = false;
    nodeTable.visible = true;
    refreshTableData();
  } else {
    label2.visible = true;
    nodeTable.data = null;
    nodeTable.visible = false;
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
        uri : node.uri
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
//
//  add tabs
//
// tabGroup.addTab(tab1);  
// tabGroup.addTab(tab2);  
// 
// 
// // open tab group
// tabGroup.open();


// Functions

function doLogin(username,password) {
  alert(username.getValue);
}
