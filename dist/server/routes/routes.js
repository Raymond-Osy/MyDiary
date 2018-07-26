'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _entriesController = require('../controllers/entriesController');

var _entriesController2 = _interopRequireDefault(_entriesController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAllEntries = _entriesController2.default.fetchAllEntries;


var router = _express2.default.Router();
router.get('/entries', fetchAllEntries);

exports.default = router;