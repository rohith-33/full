var express=require('express');
var app=express();
app.get('/',function(req,res){
    //res.send('Hello world');
    res.sendFile(__dirname+'/frontend/html/index.html');
})
var port=process.env.PORT || 3000 ;
app.listen(port,function(){
     console.log("Site running on http://localhost:"+port);
});