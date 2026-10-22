import express from 'express';
import { calculateBmi } from './bmiCalculator.ts';
import { calculateExercises } from './exerciseCalculator.ts';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {

    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    if (
        !req.query.height ||
        !req.query.weight ||
        !Number.isFinite(height) ||
        !Number.isFinite(weight)
    ) {
        return res.status(400).json({
            error: 'malformatted parameters'
        });
    }
    const result = calculateBmi(height, weight);
    res.json({
        height: height,
        weight: weight,
        bmi: result
    });
});


app.post('/exercises', (req, res) => {


    const { daily_exercises, target } = req.body;

    if (daily_exercises === undefined || target === undefined) {
        return res.status(400).json({ error: 'parameters missing' });
    }

    if (typeof target !== 'number') {
        return res.status(400).json({ error: 'malformatted parameters' });
    }

    if (!daily_exercises.every((n: number) => typeof n === 'number')) {
        return res.status(400).json({ error: 'malformatted parameters' });
    }

    const result = calculateExercises(daily_exercises, target);

    res.json(result);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});