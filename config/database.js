const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
//    console.log('process.env.DATABASE_URL')
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

const db = mongoose.connection; 

db.on('connected', function () {
    console.log(`Connected To MongoDB at ${db.host}; ${db.port}`);
}) 

