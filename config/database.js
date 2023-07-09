const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

//will want to add this to projetc each time to check if conencted to the database successfully
db.on('connected', function(){
    console.log(`Connected to MongoDB ${db.name} at ${db.host}: ${db.port}`);
});