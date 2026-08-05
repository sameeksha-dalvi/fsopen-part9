interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}


const calculateExercises = (dailyExerciseHrs: number[], targetExerciseHrs: number): ExerciseResult => {

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
        ratingDescription = "not too bad but could be better"
    }

    return {
        periodLength: periodLengthVal,
        trainingDays: trainingDaysVal,
        success: successVal,
        rating: rating,
        ratingDescription: ratingDescription,
        target: targetExerciseHrs,
        average: averageVal
    }
}

const { periodLength, trainingDays, success, rating, ratingDescription, target, average } = calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2)

console.log("periodLength: ", periodLength)
console.log("trainingDays: ", trainingDays)
console.log("success: ", success)
console.log("rating: ", rating)
console.log("ratingDescription: ", ratingDescription)
console.log("target: ", target)
console.log("average: ", average)
