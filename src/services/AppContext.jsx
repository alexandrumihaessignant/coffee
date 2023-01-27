import {createContext} from "react";
import {LocalData} from "../constants/LocalData";

export const AppContext = createContext({
  activeItems: [],
  items: {
    'hot-coffee': [],
    'iced-coffee': LocalData.IcedCoffee,
    'deserts': []
  }
});
