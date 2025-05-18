export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1; // Last element in nums1's actual part
        let j = n - 1; // Last element in nums2
        let k = m + n - 1; // Last position in nums1
    
        // Compare elements from the end of both arrays
        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k] = nums1[i];
                i--;
            } else {
                nums1[k] = nums2[j];
                j--;
            }
            k--;
        }
    
        // If any elements remain in nums2, add them
        while (j >= 0) {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    };