const mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/posdb'
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to db successfuly ...');
    }
});