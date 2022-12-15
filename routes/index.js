const express = require('express'); 
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index.html', {message: 'Render from router'});
});

router.get('/graphs', function(req, res) {
    res.render('graphs.html', {message: 'Render from router'});
});

router.get('/monitor', function(req, res) {
    res.render('monitor.html', {message: 'Render from router'});
});


module.exports = router;