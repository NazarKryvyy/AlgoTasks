/*

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:

        1
      /   \
   null    2
         /   \
        3     null

Input: root = [1,null,2,3]
Output: [1,3,2]
*/

/**
 * Definition for a binary tree node.
 */

 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

export function inorderTraversal(root: TreeNode | null): number[] {
    const stack:Array<TreeNode | null> = []
    const res = []
    let current = root
    while(current || stack.length) {
        if(current){
            stack.push(current)
            current = current.left
        } else if (stack.length) {
            current = stack.pop()!;
            res.push(current.val);
            current = current.right;
        }
    }
    return res
};
