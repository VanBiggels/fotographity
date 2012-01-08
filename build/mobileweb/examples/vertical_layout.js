//create table view data object
var data = [
	{title:'Basic', hasChild:true, test:'../examples/vertical_layout_basic.js'},
	 {title:'Table View', hasChild:true, test:'../examples/vertical_layout_table_view.js'}
];


// create table view
var tableview = Ti.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Ti.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Ti.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
Ti.UI.currentWindow.add(tableview);



;