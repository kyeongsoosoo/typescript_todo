import { type } from "os";

export type ListItem = {
  name: string;
  alpha2Code: string;
  callingCodes?: string[];
  capital: string;
  region: string;
};

type List = {
  loading: boolean;
  list?: ListItem[] | null;
};

export default List;
