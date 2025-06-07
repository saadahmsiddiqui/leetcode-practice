export function lengthOfLastWord(s: string): number {
    let res = 0

    s = s.trim()
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            i = -1
        } else {
            res+=1
        }
    }

    return res
};