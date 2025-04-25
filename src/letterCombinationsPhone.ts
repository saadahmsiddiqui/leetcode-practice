// TODO: optimize later

function getAlphabetsForDigit(digit: number): string[] {
    switch (digit) {
        case 1:
            return [];
        case 2:
            return ['a', 'b', 'c'];
        case 3:
            return ['d', 'e', 'f'];
        case 4:
            return ['g', 'h', 'i'];
        case 5:
            return ['j', 'k', 'l'];
        case 6:
            return ['m', 'n', 'o'];
        case 7:
            return ['p', 'q', 'r', 's'];
        case 8:
            return ['t', 'u', 'v'];
        case 9:
            return ['w', 'x', 'y', 'z'];
    }

    return []
}

function multiplyString(str: string, digitCharacters: string[]): string[] {
    let multiplications = [];

    for (const digitCharacter of digitCharacters) {
        multiplications.push(str + digitCharacter)
    }

    return multiplications
}


function letterCombinations(digits: string): string[] {
    let digitCount = digits.length;

    if (digitCount === 0 || (digitCount === 1 && digits[0] === "1")) return [];
    if (digitCount === 1) return getAlphabetsForDigit(Number(digits[0]))

    let multiplicationLevel = 0;
    let results: string[] = [];

    while (multiplicationLevel < digitCount) {
        let alphabetDigits = getAlphabetsForDigit(Number(digits[multiplicationLevel]))
        if (results.length > 0) {
            let allCombinations = [];

            for (const result of results) {
                allCombinations.push(...multiplyString(result, alphabetDigits))
            }

            results = allCombinations
        } else {
            results = alphabetDigits
        }

        multiplicationLevel++
    }


    return results
};