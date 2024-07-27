import axios from "axios";
import { sortList } from "../components/Sort";

export interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  composition: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export class PizzaAPI {
  static async getAll(
    category?: number,
    sort?: number,
    search = "",
    page = 0
  ): Promise<Pizza[]> {
    const { data } = await axios.get<Pizza[]>(
      "https://658fd4fccbf74b575eca2c05.mockapi.io/pizza/",
      {
        params: {
          category: category && category > 0 ? category : null,
          sortBy: sort !== undefined ? sortList[sort].field : null,
          order: sort !== undefined ? sortList[sort].order : null,
          title: search,
          page: page + 1,
          limit: 4,
        },
      }
    );
    return data;
  }

  static async getByIds(ids: number[]): Promise<Pizza[]> {
    const { data } = await axios.get<Pizza[]>(
      "https://658fd4fccbf74b575eca2c05.mockapi.io/pizza/",
      {
        params: {
          id: ids.join("|"),
        },
      }
    );

    return data;
  }
}
