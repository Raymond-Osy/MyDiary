import express from 'express';
import EntriesController from '../controllers/entriesController';

const {
  fetchAllEntries, fetchEntryById,
} = EntriesController;


const router = express.Router();
router.get('/entries', fetchAllEntries);
router.get('/entries/:entryId', fetchEntryById);

export default router;
