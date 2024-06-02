import { createContext } from "react";
import Store from "../types/Store";

export const AppContext = createContext<Store | undefined>(undefined);