/// NOTES ///

/**
 * PROBLEM:
 *
 * Given a binary tree, determine if it is "height-balanced". A tree is "height-balanced"
 * when the depth of the node's children never differs by more than 1 __for every node in tree__.
 *
 * EXAMPLES:
 *
 * 1. root = [1,2,2,3,3,null,null,4,4] -> false (1 is unbalanced, but rest is balanced)
 * 2. root = [] -> true (an empty tree is balanced)
 *
 * SOLUTION:
 *
 * - Have a fn check(node) that returns { maxHeight: (longest child height in node), isBalanced: (both children h diff < 2) }
 * - Call check() on left child. If at any point a single node is unbalanced, whole tree is unbalanced.
 * - isBalanced = Math.abs(check(left).height - check(right).height) < 2
 * - If all sub-calls have run, that means rest of tree is balanced. Check if current node is balanced.
 *
 */

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export function isBalanced(root: TreeNode | null): boolean {
  const check = (n: TreeNode | null): number => {
    if (n === null) {
      return 0
    }

    if (n.left === null && n.right === null) {
      return 1
    }

    const l = check(n.left)

    if (l === -1) {
      return -1
    }

    const r = check(n.right)

    if (r === -1) {
      return -1
    }

    if (Math.abs(l - r) > 1) {
      return -1
    }

    return 1 + Math.max(l, r)
  }

  return check(root) !== -1
}
