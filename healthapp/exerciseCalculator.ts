interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

interface InputValuesExercise {
    targetVal: number;
    dailyHrs: number[];
}

const parseArgumentsExercise = (args: string[]): InputValuesExercise => {

    console.log("args.length", args.length);
    if (args.length < 5) throw new Error('Not enough arguments');

    if (args.slice(2).every(arg => !isNaN(Number(arg)))) {
        return {
            targetVal: Number(args[2]),
            dailyHrs: args.slice(3).map(hr => Number(hr))
        };
    } else {
        throw new Error('provided values were not numbers!');
    }
};

export const calculateExercises = (dailyExerciseHrs: number[], targetExerciseHrs: number): ExerciseResult => {

    const periodLengthVal = dailyExerciseHrs.length;

    //calulate trainingDays
    let trainingDaysVal = 0;
    let totalHrs = 0;
    dailyExerciseHrs.forEach((value: number) => {
        if (value > 0) {
            trainingDaysVal++;
        }

        totalHrs += value;
        //console.log("for each loop: ", value)
        //console.log("totalHrs: ", totalHrs)
    });



    const averageVal = totalHrs / periodLengthVal;

    //calulate success
    const successVal = averageVal >= targetExerciseHrs;

    //calulate rating

    let rating = 1;
    let ratingDescription = "very bad need to improve a lot";
    if (averageVal >= targetExerciseHrs) {
        rating = 3;
        ratingDescription = "great keep going";
    } else if (averageVal >= targetExerciseHrs - 1) {
        rating = 2;
        ratingDescription = "not too bad but could be better";
    }

    return {
        periodLength: periodLengthVal,
        trainingDays: trainingDaysVal,
        success: successVal,
        rating: rating,
        ratingDescription: ratingDescription,
        target: targetExerciseHrs,
        average: averageVal
    };
};
if (process.argv[1] === import.meta.filename) {
    //console.log(process.argv.slice(3))
    try {
        const { targetVal, dailyHrs } = parseArgumentsExercise(process.argv);

        //console.log("target ",targetVal)
        console.log("dailyHrs ", dailyHrs);
        //calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2)

        //const { periodLength, trainingDays, success, rating, ratingDescription, target, average } = calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2)

        const { periodLength, trainingDays, success, rating, ratingDescription, target, average } = calculateExercises(dailyHrs, targetVal);

        console.log("periodLength: ", periodLength);
        console.log("trainingDays: ", trainingDays);
        console.log("success: ", success);
        console.log("rating: ", rating);
        console.log("ratingDescription: ", ratingDescription);
        console.log("target: ", target);
        console.log("average: ", average);
    } catch (error: unknown) {
        let errorMsg = 'Something went wrong.';
        if (error instanceof Error) {
            errorMsg += ' Error : ' + error.message;
        }
        console.log(errorMsg);
    }
}


