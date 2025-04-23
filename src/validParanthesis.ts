function shouldPush(paranthesis: string): boolean {
  if (
    paranthesis[0] === "(" ||
    paranthesis[0] === "{" ||
    paranthesis[0] === "["
  ) {
    return true;
  }
  return false;
}

function isClosingLastOpenedParanthesis(
  currentCloser: string,
  recentlyOpened: string
): boolean {
  if (currentCloser === ")" && recentlyOpened === "(") {
    return true;
  } else if (currentCloser === "}" && recentlyOpened === "{") {
    return true;
  } else if (currentCloser === "]" && recentlyOpened === "[") {
    return true;
  } else {
    return false;
  }
}

export function isValid(s: string): boolean {
  let stack = [];
  let isValid = true;

  for (let i = 0; i < s.length; i++) {
    let shouldPushInStack = shouldPush(s[i]);
    if (shouldPushInStack) {
      stack.push(s[i]);
    } else {
      let recentlyOpened = stack[stack.length - 1];
      let currentCloser = s[i];

      let _isClosingLastOpenedParanthesis = isClosingLastOpenedParanthesis(
        currentCloser,
        recentlyOpened
      );

      if (_isClosingLastOpenedParanthesis) {
        stack.splice(stack.length - 1, 1);
      } else {
        isValid = false;
        break
      }
    }
  }

  if (stack.length > 0) {
    isValid = false;
  }

  return isValid;
}
