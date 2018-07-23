import entries from '../dummyDb/dummyDb';

/**
  * @class entriesController
  * @description CRUD operations on Entries
  */
class EntriesController {
/**
  * @static
  * @param {object} req - The request payload recieved from the router
  * @param {object} res - The response payload sent back from the controller
  * @returns {object} - status Message and list of all entries*
  * @memberOf EntriesController
  */
  static fetchAllEntries(req, res) {
    if (entries.length === 0) {
      return res.status(404).json({ message: 'No entry available at this time', entries });
    }
    return res.json({ message: 'Entries list loaded successfully', entries });
  }

  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - status Message and the particular entry by id.
    * @memberOf BusinessController
    */
}

export default EntriesController;
