/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "./types"

function isLeaf(node: TreeNode | null) {
    return node?.right === null && node?.left === null
 }

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {

    if (root) {
        if (root.val === targetSum && isLeaf(root)) {
            return true
        }

        return hasPathSum(
            root.left,
            targetSum-root.val
        ) || hasPathSum(
            root.right,
            targetSum-root.val
        )
    }

    return false
};