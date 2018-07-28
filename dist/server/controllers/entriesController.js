'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dummyDb = require('../dummyDb/dummyDb');

var _dummyDb2 = _interopRequireDefault(_dummyDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  * @class entriesController
  * @description CRUD operations on Entries
  */
var EntriesController = function () {
  function EntriesController() {
    _classCallCheck(this, EntriesController);
  }

  _createClass(EntriesController, null, [{
    key: 'fetchAllEntries',

    /**
      * @static
      * @param {object} req - The request payload recieved from the router
      * @param {object} res - The response payload sent back from the controller
      * @returns {object} - status Message and list of all entries*
      * @memberOf EntriesController
      */
    value: function fetchAllEntries(req, res) {
      if (_dummyDb2.default.length === 0) {
        return res.status(404).json({ message: 'No entry available at this time', entries: _dummyDb2.default });
      }
      return res.json({ message: 'Entries list loaded successfully', entries: _dummyDb2.default });
    }

    /**
      * @static
      * @param {object} req - The request payload sent to the router
      * @param {object} res - The response payload sent back from the controller
      * @returns {object} - status Message and the particular entry by id.
      * @memberOf BusinessController
      */

  }, {
    key: 'fetchEntryById',
    value: function fetchEntryById(req, res) {
      var id = req.params.entryId;
      var entry = _dummyDb2.default.find(function (entryItem) {
        return +entryItem.entryId === +id;
      });
      if (!entry) {
        return res.status(404).json({ message: 'Entry with entryId ' + id + ' does not exist' });
      }
      return res.json({ message: 'Entries search was successful', entry: entry });
    }

    /**
     * @static
     * @param {object} req - The request payload sent to the router
     * @param {object} res - The response payload sent back from the controller
     * @returns {object} - status Message and the particular entry created.
     * @memberOf BusinessController
     */

  }, {
    key: 'createEntry',
    value: function createEntry(req, res) {
      var entryId = _dummyDb2.default.length === 0 ? 1 : _dummyDb2.default.length + 1;
      var dateTime = new Date();
      var newEntry = req.body;
      newEntry.entryId = entryId;
      newEntry.dateTime = dateTime;
      _dummyDb2.default.push(newEntry);
      return res.status(201).send({ message: 'New Entry successfully added', newEntry: newEntry });
    }

    /**
      * @static
      * @param {object} req - The request payload sent to the router
      * @param {object} res - The response payload sent back from the controller
      * @returns {object} - status Message and the particular updated entry created.
      * @memberOf BusinessController
      */

  }, {
    key: 'updateEntry',
    value: function updateEntry(req, res) {
      var id = req.params.entryId;
      var entry = _dummyDb2.default.find(function (entryItem) {
        return +entryItem.entryId === +id;
      });
      Object.assign(entry, req.body);
      return res.json({ message: 'entry updated successfully', entry: entry });
    }
  }]);

  return EntriesController;
}();

exports.default = EntriesController;