function addBin(c1: string, c2: string) {
    if (c1 === '1') {
        if (c2 === '1') {
            return [0, 1]
        } else {
            return [1, null]
        }
    } else {
        if (c2 === '1') {
            return [1, null]
        } else {
            return [0, null]
        }
    }

}


export function addBinary(a: string, b: string): string {
    let result = ""
    let biggerString = a.length > b.length ? a : b
    let smallerString = a.length < b.length ? a : b

    if (a.length === b.length) {
        biggerString = a
        smallerString = b
    }


    let biggerIdx = biggerString.length - 1
    let smallerIdx = smallerString.length - 1

    let carry = null
    for (;biggerIdx >= 0; biggerIdx--) {
        if (smallerIdx >= 0) {

            const bit1 = biggerString[biggerIdx]
            const bit2 = smallerString[smallerIdx]
            const carryBit = carry

            if (carryBit === null) {
                const [addResult, addCarry] = addBin(bit1, bit2)
                result = `${addResult}${result}`
                carry = addCarry
            } else {
                if (carryBit !== null && bit1 === '1' && bit2 === '1') {
                    result = `1${result}`
                    carry = 1
                } else if (carryBit !== null && (bit1 === '1' || bit2 === '1')) {
                    result = `0${result}`
                    carry = 1
                } else if (carryBit !== null && (bit1 === '0' && bit2 === '0')) {
                    result = `1${result}`
                    carry = null
                }
            }


            smallerIdx--
        } else {
            if (carry !== null) {
                const [addResult, addCarry] = addBin(biggerString[biggerIdx], carry.toString());
                result = `${addResult}${result}`                
                carry = addCarry
            } else {
                result = `${biggerString[biggerIdx]}${result}`
            }
        }

    }

    if (carry !== null) result = `1${result}`

    return result
};