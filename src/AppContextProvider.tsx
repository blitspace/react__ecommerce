import { useState } from "react";
import { AppContext } from "./context/AppContext";
import Store from "./types/Store";


interface AppContextProviderProps {
  children: any;
}

function AppContextProvider({ children }: AppContextProviderProps) {
  const [store, setStore] = useState<Store>({
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
});

  const updateStore = (newStore: Store) => {
    setStore(newStore);
  };


  return (
    <AppContext.Provider value={{
        store,
        updateStore
    }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
