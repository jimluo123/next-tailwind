import { Group, Item } from "src/@types/data";

function randomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const dataGenerator = (
  GroupSize: number,
  ItemSize: number,
  ItemMin: number,
  ItemMax: number
) => {
  const data = [];
  for (let i = 0; i < GroupSize * ItemSize; i++) {
    data.push({
      id: i,
      amount: randomInt(ItemMin, ItemMax), // y
      name: `Node ${i}`,
      description: `Description ${i}`,
      tag: randomInt(1, 12), // x
      belongGroupId: randomInt(0, GroupSize),
    });
  }

  return data;
};
