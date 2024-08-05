/** ----- NOTES -----
 *
 * PROBLEM: Given a string 's' containing various types of brackets, return true/false
 * if all pairs of brackets are balanced.
 *
 * EXAMPLES:
 *
 * 1. '()' -> true
 * 2. '()[]{}' -> true
 * 3. '(]' -> false
 * 4. ']' -> false
 *
 *
 * SOLUTION:
 *
 * Use a stack to keep track of which matching pairs have been seen.
 * When an open bracket is added, add to stack.
 * When a close bracket is added, check top of stack and pop if it matches, else return false.
 *
 * Return stack.length === 0 after all input chars have been checked.
 *
 *
 *
 *
 */

function isValid(s: string): boolean {
  const pairs: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack: string[] = [];

  for (let c of s) {
    if (c in pairs) {
      stack.push(c);
      continue;
    }

    const top = stack.pop();

    if (top === undefined || pairs[top] !== c) {
      return false;
    }
  }


  return stack.length === 0;
};

console.log('isValid("()"): ', isValid('()'));
console.log('isValid("()[]{}"): ', isValid('()[]{}'));
console.log('isValid("(]"): ', isValid('(]'));
console.log('isValid("]"): ', isValid(']'));
