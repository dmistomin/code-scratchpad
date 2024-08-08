/** ----- NOTES -----
 *
 * PROBLEM: Given two strings, `ransomNote` and `magazine`, return true if note can be constructed
 * by using the letters from magazine.
 *
 * EXAMPLES:
 *
 * ransomNote = 'a', magazine = 'b' -> false
 * ransomNote = 'aa', magazine = 'ab' -> false
 * ransomNote = 'aa', magazine = 'aab' -> true
 *
 * SOLUTION:
 *
 * Count letters in magazine and put them in a hashmap [letter]: <count>
 * Do the same for letters in ransomNote
 * Iterate over every letter in ransomNote, check if num letters <= magazine
 * If false,return false
 * Else return true after loop finishes
 *
 */


export function canConstruct(ransomNote: string, magazine: string) {
  const zineFreq: { [letter: string]: number } = {};
  const noteFreq: { [letter: string]: number } = {};

  for (let l of magazine) {
    const val = zineFreq[l] || 0;
    zineFreq[l] = val + 1;
  }

  for (let l of ransomNote) {
    const val = noteFreq[l] || 0;
    noteFreq[l] = val + 1;
  }

  for (const [letter, freq] of Object.entries(noteFreq)) {
    if (!zineFreq[letter] || zineFreq[letter] < freq) {
      return false;
    }
  }

  return true;
}

// console.log('ransomNote = "a", magazine = "b" -> false: ', canConstruct('a', 'b'));
// console.log('ransomNote = "aa", magazine = "ab" -> false: ', canConstruct('aa', 'ab'));
// console.log('ransomNote = "aa", magazine = "aab" -> true: ', canConstruct('aa', 'aab'));

