import { createContext } from "react";
import Store from "../types/Store";


export const defaultStore: Store = {
    theme: {
        darkMode: false,
    },
    menu: [
        {
            label: 'About',
            url: '',
        },
        {
            label: 'Careers',
            url: '',
        },
        {
            label: 'History',
            url: '',
        },
        {
            label: 'Services',
            url: '',
        },
        {
            label: 'Projects',
            url: '',
        },
        {
            label: 'Blogs',
            url: '',
        },
    ],
};

export const AppContext = createContext<Store | undefined>(undefined);
