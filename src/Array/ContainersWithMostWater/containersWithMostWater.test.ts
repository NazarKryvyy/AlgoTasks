import {maxArea} from "./index";


describe.skip.each([
    { array: [1,8,6,2,5,4,8,3,7], result: 49 },
    {  array: [1,1], result: 1 },
])(
    "From $array peaks find biggest square between 2 of them ",
    ({ array, result }) => {
        test(`result should have indexes ${result}`, () => {
            const answer = maxArea(array);
            expect(answer).toBe(result);
        });
    }
);