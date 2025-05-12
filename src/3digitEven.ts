function isEven(num: number): boolean {
    return num % 2 === 0
}

function isValid(dc: Map<number, number>, num: number): boolean {
    let va = true

    let digits = [];
    let n = num

    while (n > 0) {

        let v = n % 10

        if (dc.get(v) === 0) {
            va = false
            return va
        }

        n = Math.floor(n / 10)
        digits.push(v)
    }

    let digitM = new Map();

    for (const digit of digits) {
        digitM.set(
            digit,
            (digitM.get(digit) || 0) + 1
        )
    }

    for (const digit of digits) {
        if (dc.get(digit)! < digitM.get(digit)) {
            va = false
        }
    }

    return va
}


export function findEvenNumbers(digits: number[]): number[] {
    let output = [];

    const dc = new Map([
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0],
        [8, 0],
        [9, 0]
    ]);


    for (const digit of digits) {
        dc.set(
            digit,
            dc.get(digit)! + 1
        )
    }
    
    for (let i = 100;i < 999;i++) {
        if (isEven(i) && isValid(dc, i)) {
            output.push(i)
        }
    }


    return output
};