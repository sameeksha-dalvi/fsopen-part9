interface InputValues {
    height: number;
    weight: number;
}


const parseArguments = (args: string[]): InputValues => {

    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };
    } else {
        throw new Error('Provided values are not numbers');
    }

};

export const calculateBmi = (h: number, w: number) => {
    const hInMeters = h / 100;
    const bmi = w / (hInMeters * hInMeters);
    //console.log("BMI :", bmi);

    if (bmi >= 40) {
        return "Obese (Class III)";
    } else if (bmi >= 35) {
        return "Obese (Class II)";
    } else if (bmi >= 30) {
        return "Obese (Class I)";
    } else if (bmi >= 25) {
        return "Overweight (Pre-obese)";
    } else if (bmi >= 18.5) {
        return "Normal range";
    } else if (bmi >= 17) {
        return "Underweight (Mild thinness)";
    } else if (bmi >= 16) {
        return "Underweight (Moderate thinness)";
    } else {
        return "Underweight (Severe thinness)";
    }
};


// const height: number = Number(process.argv[2])
// const weight: number = Number(process.argv[3])
if (process.argv[1] === import.meta.filename) {// do not run this code if module is imported
    try {

        //console.log(process.argv)
        const { height, weight } = parseArguments(process.argv);

        console.log(calculateBmi(height, weight));
    } catch (error: unknown) {
        let errorMsg = 'Something went wrong.';
        if (error instanceof Error) {
            errorMsg += ' Error : ' + error.message;
        }
        console.log(errorMsg);
    }
}


