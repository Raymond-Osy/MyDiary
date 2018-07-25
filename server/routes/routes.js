import express from 'express';
import EntriesController from '../controllers/entriesController';

const {
  fetchAllEntries, fetchEntryById, createEntry,
} = EntriesController;


const router = express.Router();
router.get('/entries', fetchAllEntries);
router.get('/entries/:entryId', fetchEntryById);
router.post('/entries', createEntry);

export default router;
