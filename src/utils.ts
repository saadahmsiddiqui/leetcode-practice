export function binarySearch(arr: number[], num: number, start: number, end: number): number {
    if (start >= end && arr[start] !== num) { return -1 }

    let middle = Math.floor(start + end / 2);


    if (arr[middle] === num) {
        return middle;
    } else if (arr[middle] > num) {
        return binarySearch(arr, num, start, middle - 1);
    } else {
        return binarySearch(arr, num, middle + 1, end);
    }

}


export function binarySearchRange(arr: number[], num: number, start: number, end: number): [number, number] {
    if (start >= end && arr[start] !== num) { return [-1, -1] }

    let middle = Math.floor(start + end / 2);


    if (arr[middle] === num) {
        let elStart = middle;
        let elEnd = middle;

        while (arr[elStart] === num) {
            elStart--
        }

        while (arr[elEnd] === num) {
            elEnd++
        }


        return [elStart, elEnd];
    } else if (arr[middle] > num) {
        return binarySearchRange(arr, num, start, middle - 1);
    } else {
        return binarySearchRange(arr, num, middle + 1, end);
    }

}
