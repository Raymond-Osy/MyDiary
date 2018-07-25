import express from 'express';
import EntriesController from '../controllers/entriesController';

const {
  fetchAllEntries, fetchEntryById, createEntry, updateEntry
} = EntriesController;


const router = express.Router();
router.get('/entries', fetchAllEntries);
router.get('/entries/:entryId', fetchEntryById);
router.post('/entries', createEntry);
router.put('/entries/:entryId', updateEntry);

export default router;
