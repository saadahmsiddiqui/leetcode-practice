
function binSearch(arr: number[], num: number, start: number, end: number): [null | number, null | number] | undefined {
    let middle = Math.floor((start + end) / 2)

    if (end === start && arr[start] !== num || start > end) {
        return [null, start]
    }

    if (num < arr[middle]) {
        return binSearch(arr, num, start, middle)
    } else if (num > arr[middle]) {
        return binSearch(arr, num, middle + 1, end)
    } else if (num === arr[middle]) {
        return [middle, null]
    }
}


function searchInsert(nums: number[], target: number): number {
    const isInNums: [null | number, null | number] | undefined = binSearch(nums, target, 0, nums.length)

    if (isInNums) {
        if (isInNums[0] === null) {
            return isInNums[1] as number
        } else {
            return isInNums[0]
        }
    
    }

    return -1
};