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
  static fetchEntryById(req, res) {
    const id = req.params.entryId;
    const entry = entries.find(entryItem => +entryItem.entryId === +id);
    if (!entry) {
      return res.status(404).json({ message: `Entry with entryId ${id} does not exist` });
    }
    return res.json({ message: 'Entries search was successful', entry });
  }

  /**
   * @static
   * @param {object} req - The request payload sent to the router
   * @param {object} res - The response payload sent back from the controller
   * @returns {object} - status Message and the particular entry created.
   * @memberOf BusinessController
   */
  static createEntry(req, res) {
    const entryId = entries.length === 0 ? 1
      : entries.length + 1;
    const dateTime = new Date();
    const newEntry = req.body;
    newEntry.entryId = entryId;
    newEntry.dateTime = dateTime;
    entries.push(newEntry);
    return res.status(201).send({ message: 'New Entry successfully added', newEntry });
  }

  /**
    * @static
    * @param {object} req - The request payload sent to the router
    * @param {object} res - The response payload sent back from the controller
    * @returns {object} - status Message and the particular updated entry created.
    * @memberOf BusinessController
    */
  static updateEntry(req, res) {
    const id = req.params.entryId;
    const entry = entries.find(entryItem => +entryItem.entryId === +id);
    Object.assign(entry, req.body);
    return res.json({ message: 'entry updated successfully', entry });
  }
}


export default EntriesController;
