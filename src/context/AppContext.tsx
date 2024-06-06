import { createContext } from "react";
import Store from "../types/Store";


// export const defaultStore: Store = {
//     theme: {
//         darkMode: false,
//     },
//     menu: [
//         {
//             label: 'About',
//             url: '',
//         },
//         {
//             label: 'Careers',
//             url: '',
//         },
//         {
//             label: 'History',
//             url: '',
//         },
//         {
//             label: 'Services',
//             url: '',
//         },
//         {
//             label: 'Projects',
//             url: '',
//         },
//         {
//             label: 'Blogs',
//             url: '',
//         },
//     ],
// };

export type TStore = {
    store: Store,
    updateStore: (newStore: Store) => void,
};

export const AppContext = createContext<TStore | undefined>(undefined);
