var express = require('express');
var router = express.Router();
var dbService = require('../services/movieservice');

var movieList=[
    {id:2,name:'Bahubali',year:2017}
]
router.get('/', function(req, res, next) {
  
  var callback = function(result){
    res.send(result);
  }
  dbService.getMovies(callback);
 
});
router.get('/:id', function(req, res, next) {
  var callback = function(movie){
    res.send(movie);
  }
  var movieId = req.params.id;
  var movie = dbService.getMovieById(movieId,callback);
});

router.post('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movie = req.body;
  dbService.addMovie(movie, callback);
});

router.put('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movieId = req.params.id;
  var movie = req.body;
  dbService.updateMovie(movie,callback);
});

router.delete('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var movieId = req.params.id;
  dbService.deleteMovie(movieId,callback);
});


module.exports = router;
// var movieservice = require('../services/movieservice');

// var express = require('express');
// var router = express.Router();
// var dbService=require('../services/movieservice');

// // var movieList=[{id:1,name:"Bahubali",year:"2016"},]



//     router.get('/', function(req, res, next) {
//       var callback = function(result){
//         res.send(result);
//       }
//       dbService.getMovies(callback);
//     });

//     router.get('/:id', function(req, res, next) {
//       var callback = function(movie){
//         res.send(movie);
//       }
//       var movieId = req.params.id;
//       var movie = dbService.getMovieById(movieId,callback);
//     });
    


// router.post('/', function(req, res, next) {
//   var callback = function(result){
//     res.send({'result':result});
//   }
//   var movie = req.body;
//   dbService.addMovie(movie, callback);
// });


// router.delete('/:id', function(req, res, next) {
//   var callback = function(result){
//     //res.send(result);
//     res.send({'result':result});
//   }
//   var movieId = req.params.id;
//   dbService.deleteMovie(movieId,callback);
// });


// router.put('/:id', function(req, res, next) {
//   var callback = function(result){
//     res.send(result);
//   }
//   var movieId = req.params.id;
//   var movie = req.body;
//   dbService.updateMovie(movie,callback);
// });

//     module.exports=router;

    