var express=require("express")
var app=express();

var orderController=function(req,resp)
{
	var orders=[
	{id:1,name:"Pooja"},
	{id:2,name:"Sayali"},
	]
	resp.send(orders);
	};
	
	app.get("/orders",orderController);
	 var server=app.listen(8086,function()
	 {
		var host=server.address().address
		var port=server.address().port
		})