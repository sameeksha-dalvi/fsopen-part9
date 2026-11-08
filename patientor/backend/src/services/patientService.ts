import patientData from '../../data/patients.ts';
import { v1 as uuid } from 'uuid';

import type { NewPatientEntry, Patient, NoSSNPatient } from '../types.ts';

const pateints: Patient[] = patientData as Patient[];

const getPatient = (): Patient[] => {
    return patientData;
}

const getNoSSNEntries = (): NoSSNPatient[] => {
    return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
    const id = uuid();
    const newPatientEntry = {
        id: id,
        ...entry
    }
    pateints.push(newPatientEntry);
    return newPatientEntry;
};



export default { getPatient, getNoSSNEntries, addPatient };