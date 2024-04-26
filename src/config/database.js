const mongoose = require('mongoose');
const config = require('./index');

mongoose.connect(`mongodb://${config.database.host}:${config.database.port}/${config.database.dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Database connection error:', err));

module.exports = mongoose.connection;
