const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/', function(req,res){
	console.log(__dirname)
	res.sendFile(__dirname+'/public/num.html')

})


app.get('/test', function(req,res){
	var no=req.query.number;
	if(no%2==0){
		   res.send(no+' is even')
	}
	else{
		   res.send(no+' is odd')
	}
})

app.listen(3000, function(){
	console.log('Example app listening on port 3000')
})