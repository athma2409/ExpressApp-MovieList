var express = require('express');

var app = express();

var customerList = [
{id:1, name:'Vivek', email:'vivek@gmail.com', phone:'78787878', address:'India'},
{id:2, name:'Kamal', email:'kamal@gmail.com', phone:'9724232340', address:'Asia'}
];


var movieList=[

    {id:1,name:"Movie1",year:"2001",image:"" ,production_house:"1234",type:"Normal",language:"telugu",date:"21-2-2001"},
    {id:2,name:"Movie2",year:"2002",image:"" ,production_house:"4321",type:"Normal",language:"telugu",date:"21-2-2001"},

  
]

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/customer', function (req, res) {
	res.send(customerList);
});
app.get('/movies', function (req, res) {
	res.send(movieList);
});
console.log("Hello Express App");

var server = app.listen(3001, function () {
	console.log('Example app listening at 3001');
});
