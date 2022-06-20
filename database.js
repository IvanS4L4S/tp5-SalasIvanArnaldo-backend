const mongoose = require('mongoose');
const URI = 'mongodb://localhost/parte1db';
mongoose.connect(URI)
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err))
module.exports = mongoose;
