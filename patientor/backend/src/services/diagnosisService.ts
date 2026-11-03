import diagnosisData from '../../data/diagnoses.ts';

import type { Diagnosis } from '../types.ts';

const diagnoses: Diagnosis[] = diagnosisData as Diagnosis[];

const getEntries = () => {
    return diagnoses;
}

const addDiagnoses = () => {
    return null;
};

export default { getEntries, addDiagnoses };