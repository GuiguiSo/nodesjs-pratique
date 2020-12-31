const mongoose = require('mongoose');
const config = require('./src/config/env.config');

mongoose.connect(`mongodb://${config.}`)