import express from 'express';
import patientService from '../services/patientService.ts';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNoSSNEntries());
});

router.post('/', (_req, res) => {
    res.send('Saving Patient Data');
});


export default router;