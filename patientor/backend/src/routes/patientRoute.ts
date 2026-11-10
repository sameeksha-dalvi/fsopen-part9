import express, { type Request, type Response } from 'express';
import patientService from '../services/patientService.ts';
import  type { NewPatientEntry, Patient } from '../types.ts';
import { newPatientParser, errorMiddleware } from '../middleware.ts';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNoSSNEntries());
});

router.post('/', newPatientParser, (req: Request<unknown, unknown, NewPatientEntry>, res: Response<Patient>) => {  
  const addedEntry = patientService.addPatient(req.body);  
  res.json(addedEntry);
});

router.use(errorMiddleware);

export default router;