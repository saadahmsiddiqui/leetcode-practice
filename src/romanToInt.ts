function getIntegerValue(romanNumeral: string): number {
  switch (romanNumeral) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}

function possibleSubtraction(current: string, next: string): number | null {
  if (current === "I") {
    if (next === "V") {
      return 4;
    }

    if (next === "X") {
      return 9;
    }
  } else if (current === "X") {
    if (next === "L") {
      return 40;
    }

    if (next === "C") {
      return 90;
    }
  } else if (current === "C") {
    if (next === "D") {
      return 400;
    }

    if (next === "M") {
      return 900;
    }
  }

  return null;
}

export function romanToInt(s: string): number {
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    let possibleSub = null;

    if (i + 1 < s.length) {
      possibleSub = possibleSubtraction(s[i], s[i + 1]);
    }

    if (possibleSub) {
      num += possibleSub;
      i += 1;
    } else {
      num += getIntegerValue(s[i]);
    }
  }

  return num;
}
