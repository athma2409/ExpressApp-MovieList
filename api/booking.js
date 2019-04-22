 var express = require('express');
var router = express.Router();
// var bookingservice = require('../services/bookingService');
var dbService=require('../services/bookingService');


// var bookingList=[{id:1,customer_id:00001,tickets: 4, movie_id:2101, movie_name:'Bahubali 1',movie_time:5,theatre: 'BigC',screen:'Screen-3',city:'Bangalore',movie_date:'2019-03-24',date:'2019-03-23',amount:200,ticket_price:50 }];
router.get('/', function(req, res, next) {
  var callback = function(result){
    res.send(result);
  }
  dbService.getBooking(callback);
});

router.get('/:id', function(req, res, next) {
    res.send(bookingList);

});


router.post('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var booking = req.body;
  dbService.addBooking(booking, callback);
});




router.delete('/:id', function(req, res, next) {
    var callback = function(result){
      //res.send(result);
      res.send({'result':result});
    }
    var bookingId = req.params.id;
    dbService.deleteBooking(bookingId,callback);
  });
  
  router.get('/:id', function(req, res, next) {
    var callback = function(booking){
      res.send(booking);
    }
    var bookingId = req.params.id;
   // var booking = bookingservice.getBookingById(bookingId,callback);
  });
  
  router.put('/:id', function(req, res, next) {
    var callback = function(result){
      res.send(result);
    }
    var bookingId = req.params.id;
    var booking = req.body;
    dbService.updateMovie(booking,callback);
  });


  

module.exports=router;