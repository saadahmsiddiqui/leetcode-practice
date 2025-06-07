export function plusOne(digits: number[]): number[] {
    let result: number[] = [];

    let carry = 0
    for (let j = digits.length - 1; j >= 0; j--) {

        if (j === digits.length - 1) {
            const plusOne = digits[j] + 1;

            if (plusOne > 9) {
                result.push(0)
                carry = plusOne - 9
            } else {
                result.push(plusOne)
                carry = 0
            }
        } else if (carry !== 0) {
            const plusOne = digits[j] + 1;

            if (plusOne > 9) {
                result.push(0)
                carry = plusOne - 9
            } else {
                result.push(plusOne)
                carry = 0
            }
        } else {
            result.push(digits[j])
            carry = 0
        }

    }

    if (carry > 0) {
        result.push(carry)
    }

    return result.reverse();
};