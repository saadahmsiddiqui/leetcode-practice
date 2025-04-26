export function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((a, b) => (a[0]) - (b[0]))

    let newIntervals: number[][] = [];

    for (const interval of intervals) {
        if (newIntervals.length === 0) {
            newIntervals.push(interval);
        } else {
            const lastInterval = newIntervals[newIntervals.length - 1];
            const lastUpperBound = lastInterval[1];
            const thisLowerBound = interval[0];
            const thisUpperBound = interval[1];

            if (thisLowerBound <= lastUpperBound) {
                if (thisUpperBound > lastUpperBound) {
                    newIntervals[newIntervals.length - 1][1] = thisUpperBound
                }
            } else {
                newIntervals.push(interval)
            }

        }
    }




    return newIntervals
};