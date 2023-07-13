const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

async function index(req, res) {
    try {
        const flights = await Flight.find({});
        res.render('flights/index', { flights });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }

}

async function show(req, res) {
    
    try {
        const flight = await Flight.findById(req.params.id);
        // console.log(details, '****');
        res.render('flights/show', { title: 'Flight Details', flight });
    }
    catch (err) {
        console.log(err);
        res.redirect('/flights');
     
    }

}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
}

async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    }
    catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message })
    }
}

module.exports = { 
    new: newFlight,
    create,
    index,
    show
};