/*
 * Copyright (c) 2017 TopCoder, Inc. All rights reserved.
 */
'use strict';

/**
 * Initialize and export all model schemas.
 * @author TCSCODER
 * @version 1.0
 */
const config = require('config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const connection = mongoose.createConnection(config.MONGODB_URL);

/* eslint-disable global-require */
const models = {
  Issue: connection.model('Issue', require('./Issue'))
};
/* eslint-enable global-require */


module.exports = models;