export function numEquivDominoPairs(dominoes: number[][]): number {
    let obj: Record<string, number> = {};
    let count = 0;
    let getKey = (a: number, b: number) => {
        if (a > b) {
            return `${a}-${b}`
        }
        return `${b}-${a}`;
    }


    for (let i = 0; i < dominoes.length; i++) {
        let [a, b] = dominoes[i];
    
        let key = getKey(a,b)
        count += (obj[key] || 0);

        obj[key] = (obj[key] || 0) + 1
    } 
    
    return count;
}
