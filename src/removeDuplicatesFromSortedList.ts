function binSearch(arr: number[], num: number, start: number, end: number) {
    let middle = Math.floor((start + end) / 2)

    if (end === start && arr[start] !== num || start > end) {
        return null
    }

    if (num < arr[middle]) {
        return binSearch(arr, num, start, middle)
    } else if (num > arr[middle]) {
        return binSearch(arr, num, middle + 1, end)
    } else if (num === arr[middle]) {
        return middle
    }
}


export function removeDuplicates(nums: number[]): number {
    let uniqueSet = new Set();
    let shouldContinue = true;
    let idx = 0;

    while (shouldContinue) {
        const element = nums[idx]
        if (!uniqueSet.has(element)) {
            uniqueSet.add(element)

            let duplicateIdx = idx + 1;
            let duplicateCount = 0;
            let shouldKeepFindingDups = true
            while (shouldKeepFindingDups) {
                let indx = binSearch(nums, element, duplicateIdx, nums.length - 1);
                if (indx !== null) {
                    duplicateCount += 1
                    duplicateIdx += 1
                } else {
                    shouldKeepFindingDups = false
                }
            }

            if (duplicateCount > 0) {
                nums.splice(idx + 1, duplicateCount)
            }

        }

        idx += 1
        
        if (idx >= nums.length) {
            shouldContinue = false
        }
    }

    return uniqueSet.size
};