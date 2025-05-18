export function lengthOfLongestSubstring(s: string): number {
    let maxLen = 0;
    let winStart = 0;
    let winEnd = 0;

    let existingSet = new Set();

    while (winStart < s.length - 1) {
        console.log(`Start: ${s[winStart]} End: ${s[winEnd]}`);
        const charEnd = s.charCodeAt(winEnd);

        if (!existingSet.has(charEnd)) {
            existingSet.add(charEnd);
            winEnd++;

            if (winEnd > s.length) {
                maxLen = Math.max(winEnd-winStart - 1, maxLen);
                break
            }
        } else {
            maxLen = Math.max(winEnd - winStart, maxLen);
            existingSet.clear()
            winStart++
            winEnd = winStart
        }
        
    }


    return maxLen
};