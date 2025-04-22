function maxArea(height: number[]) {
    let starter = 0;
    let ender = height.length - 1;
    let maxA = 0

    while (ender > starter) {
        let h = Math.min(height[starter], height[ender])
        let start = starter+1
        let end = ender+1

        maxA = Math.max(maxA, h*(end-start))

        if (height[starter]<height[ender]) {
            starter++
        } else {
            ender--
        }
    }

    return maxA
};