import patientData from '../../data/patients.ts';

import type { Patient, NoSSNPatient } from '../types.ts';


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

const addPatient = () => {
    return null;
};

export default { getPatient, getNoSSNEntries, addPatient };