export function strStr(haystack: string, needle: string): number {

    let res = -1
    let j = 0
    for (let i = 0; i < haystack.length; i++) {

        let lastIndexNeedle = j + needle.length - 1
        let lastIndexInHaystack = i + needle.length - 1

        if (lastIndexInHaystack <= haystack.length - 1) {


            if (haystack[i] === needle[j] && needle[lastIndexNeedle] === haystack[lastIndexInHaystack]) {


                    let k = i
    
                    for (j = 0; j < needle.length; j++) {
        
                        if (haystack[k] !== needle[j]) {
                            break
                        }
        
                        if (j === needle.length - 1 && haystack[k] === needle[j]) {
                            return i
                        }
        
                        k++
                    }
        
        
                    j = 0

            


    
            }

        }



    }

    return res
};
