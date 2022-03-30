import { inorderTraversal } from "./inOrderTraversal";

describe.each([
  {
    tree: {
      val: 1,
      left: null,
      right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
    },
    result: [1, 3, 2],
  },
  {
    tree: {
      val: 1,
      left: null,
      right: null,
    },
    result: [1],
  },
])("From $tree return inorder $result", ({ tree, result }) => {
  test(`result should be equal ${result}`, () => {
    const inorderArray = inorderTraversal(tree);
    expect(inorderArray).toEqual(result);
  });
});
