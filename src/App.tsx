import { Fragment, useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { AppContext } from './context/AppContext';
import Store from './types/Store';
import ProductList from './ProductList';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Counter from './Counter';



const queryClient = new QueryClient()


function App() {
    const [store] = useState<Store>({
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
        ]
    });

    return (
        <QueryClientProvider client={queryClient}>
            <AppContext.Provider value={store}>
                <ReactQueryDevtools initialIsOpen={false} />
                <div className="App">
                    <header className="App-header">
                        <Header />
                    </header>
                    <section className="App-content">
                        <Counter />
                        <ProductList />
                    </section>
                    <footer className="App-footer">
                        <Footer />
                    </footer>
                </div>
            </AppContext.Provider>
        </QueryClientProvider>
    );
}

export default App;
