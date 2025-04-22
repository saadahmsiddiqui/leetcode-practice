export function numRabbits(answers: number[]): number {
    let colorBuckets = new Map();
    let result = 0;

    for (const answer of answers) {
        colorBuckets.set(answer, (colorBuckets.get(answer) || 0) + 1)
        if (colorBuckets.get(answer) === answer + 1) {
            result += colorBuckets.get(answer)
            colorBuckets.delete(answer)
        }
    }


    for (const unanswered of colorBuckets.keys()) {
        result+=unanswered+1
    }

    return result
};