import express from 'express';
import EntriesController from '../controllers/entriesController';

const {
  fetchAllEntries
} = EntriesController;


const router = express.Router();
router.get('/entries', fetchAllEntries);


export default router;
