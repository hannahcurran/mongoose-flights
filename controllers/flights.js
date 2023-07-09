const Flight = require('../models/flights');

module.exports = {
    new: newFlight,
    create
}

function newFlight(req, res){
    res.render('flights/new', { errorMsg: ''});
}

async function create(req,res){
   flights.create(req.body);
   res.redirect('/flights');
}