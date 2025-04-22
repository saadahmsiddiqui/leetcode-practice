export function longestCommonPrefix(strs: string[]): string {
    let result = "";
    
    let longestWordLength = 0;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length > longestWordLength) {
            longestWordLength = i
        }
    }

    let longestWord = strs[longestWordLength];
    let longestPrefixScores = new Map();

    for (let i = 0; i < strs.length; i++) {
        let prefixScorer = 0;

        while (longestWord[prefixScorer] === strs[i][prefixScorer] && prefixScorer < longestWord.length) {
            longestPrefixScores.set(
                prefixScorer,
                (longestPrefixScores.get(prefixScorer) || 0) + 1
            );
            prefixScorer++;
        }        
    }

    if (longestPrefixScores.get(0) === 0) {
        return result;
    } else {
        if (longestPrefixScores.get(0) !== strs.length) {
            return result;
        } else {
            let indexWithMaxScore = 0;
            let maxScore = longestPrefixScores.get(indexWithMaxScore);
            while (longestPrefixScores.get(indexWithMaxScore) === maxScore) {
                indexWithMaxScore++
            }

            return strs[0].substring(0, indexWithMaxScore)
        }
    }
}