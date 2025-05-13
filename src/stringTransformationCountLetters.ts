function applyTransformation(counts: Map<string, number>) {
    let newMap = new Map();

    for (const [key, val] of counts.entries()) {
        if (key === 'z') {
            newMap.set('a', (newMap.get('a') ?? 0) + val)
            newMap.set('b', (newMap.get('b') ?? 0) + val)
        } else {
            if (val === 0) {
                newMap.set(key, newMap.get(key) ?? 0);
            } else {
                newMap.set(key, newMap.get(key) ?? 0);
                newMap.set(String.fromCharCode(key.charCodeAt(0) + 1)[0], val);
            }
        }
    }

 
    return newMap;
}

// abcyy
// bcdzz

export function lengthAfterTransformations(s: string, t: number): number {
    let counts = new Map([
        ['a', 0],
        ['b', 0],
        ['c', 0],
        ['d', 0],
        ['e', 0],
        ['f', 0],
        ['g', 0],
        ['h', 0],
        ['i', 0],
        ['j', 0],
        ['k', 0],
        ['l', 0],
        ['m', 0],
        ['n', 0],
        ['o', 0],
        ['p', 0],
        ['q', 0],
        ['r', 0],
        ['s', 0],
        ['t', 0],
        ['u', 0],
        ['v', 0],
        ['w', 0],
        ['x', 0],
        ['y', 0],
        ['z', 0],
    ])

    for (let i = 0; i < s.length; i++) {
        counts.set(s[i], (counts.get(s[i]) ?? 0) + 1)
    }


    let transformations = t;
    while (transformations > 0) {
        counts = applyTransformation(counts);
        transformations-=1;
    }


    const MOD = 1e9 + 7
    return Array.from(counts.values()).reduce((agg, curr) => {
        return (agg + curr)
    }, 0) % MOD;

};