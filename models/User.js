/*
 * Copyright (c) 2018 TopCoder, Inc. All rights reserved.
 */
/**
 * This defines user model.
 */
'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const constants = require('../constants');

const Schema = mongoose.Schema;

const schema = new Schema({
  userProviderId: {type: Number, required: true},
  username: {type: String, required: true},
  role: {type: String, required: true, enum: _.values(constants.USER_ROLES)},
  type: {type: String, required: true, enum: _.values(constants.USER_TYPES)},
  // gitlab token data
  accessToken: String,
  accessTokenExpiration: Date,
  refreshToken: String
});

schema.index({userProviderId: 1});
schema.index({username: 1});
schema.index({role: 1});
schema.index({type: 1});

module.exports = schema;
