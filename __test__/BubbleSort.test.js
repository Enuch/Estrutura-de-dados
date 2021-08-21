import BubbleSort from "../src/arvore/BubbleSort";

test("BubbleSort", () => {
    
    expect(BubbleSort([4,3,6,2,1])).toStrictEqual([1,2,3,4,6]);
});