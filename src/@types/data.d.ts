export type coordinates = {
  x: number;
  y: number;
};

export type size = {
  height: number | string;
  width: number | string;
};

export type Group = {
  id: number;
  amount: number;
  children: Item[];
};

export type Item = {
  id: number;
  name: string;
  amount: number;
  belongGroupId: number;
  tag: string;
  description: string;
};
