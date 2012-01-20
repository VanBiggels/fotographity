var win = Titanium.UI.currentWindow;

// used to evenly distribute items on the toolbar
var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

// used to create a fixed amount of space between two items on the toolbar
var fixedSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FIXED_SPACE,
	width:50
});

// system buttons
var action = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.ACTION
});
action.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'ACTION'}).show();
});

var camera = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.CAMERA
});
camera.addEventListener('click', function()
{

var eventWin = Ti.UI.createWindow({ 
   url:'camera_basic.js', 
   title:'Camera',
   modal: true 
}); 

eventWin.open();

});

var compose = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.COMPOSE
});
compose.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'COMPOSE'}).show();
});

var bookmarks = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.BOOKMARKS
});
bookmarks.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'BOOKMARKS'}).show();
});

var search = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.SEARCH
});
search.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'SEARCH'}).show();
});

var add = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.ADD
});
add.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'ADD'}).show();
});

var trash = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.TRASH
});
trash.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'TRASH'}).show();
});

var reply = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REPLY
});
reply.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'REPLY'}).show();
});

var stop = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.STOP
});
stop.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'STOP'}).show();
});

var refresh = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REFRESH
});
refresh.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'REFRESH'}).show();
});

var play = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.PLAY
});
play.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'PLAY'}).show();
});

var pause = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.PAUSE
});
pause.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'PAUSE'}).show();
});

var fastforward = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FAST_FORWARD
});
fastforward.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'FAST_FORWARD'}).show();
});

var rewind = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REWIND
});
rewind.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'REWIND'}).show();
});

var edit = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.EDIT
});
edit.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'EDIT'}).show();
});

var cancel = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.CANCEL
});
cancel.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'CANCEL'}).show();
});

var save = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.SAVE
});
save.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'SAVE'}).show();
});

var organize = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.ORGANIZE
});
organize.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'ORGANIZE'}).show();
});

var done = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.DONE
});
done.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'DONE'}).show();
});

var disclosure = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE
});
disclosure.addEventListener('click', function()
{
	Ti.API.info('FOO');
	Titanium.UI.createAlertDialog({title:'System Button', message:'DISCLOSURE'}).show();
});

var contactadd = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.CONTACT_ADD
});
contactadd.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'CONTACT_ADD'}).show();
});

var nativespinner = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.SPINNER
});
nativespinner.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'SPINNER'}).show();
});

var infolight = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.INFO_LIGHT
});
infolight.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'INFO_LIGHT'}).show();
});

var infodark = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.INFO_DARK
});
infodark.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'INFO_DARK'}).show();
});

//
// CREATE BUTTONS TO CHANGE VIEW
//

	win.rightNavButton = camera;
	win.toolbar = [flexSpace,fixedSpace,flexSpace,save];
// action