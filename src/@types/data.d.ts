export type coordinates = {
  x: number;
  y: number;
};

export type size = {
  height: number | string;
  width: number | string;
};

export type country_node = {
  id: number;
  title: string;
  amount: number;
  citys: Array<city_node>;
};

export type city_node = {
  id: number;
  title: string;
  amount: number;
  month_data: Array<month_data>;
};

export type month_data = {
  id: number;
  title: string;
  amount: number;
};
