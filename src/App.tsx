import { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { AppContext } from './context/AppContext';
import Store from './types/Store';
import ProductList from './ProductList';
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ProductItem from './types/ProductItem';


const queryClient = new QueryClient()

function Qq() {
    const q = useQuery<ProductItem[]>({
        queryKey: ['products'],
        queryFn: async () => {
            console.log('%cFetching', 'padding: 4px 12px; background-color: orange');
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            return data;
        }
    });

    if (q.isFetching) {
        return (<h2>Loading...</h2>);
    }

    if (q.isSuccess) {
        console.log(q.data);
    }

    return (<div className="grid grid-cols-4 gap-2">
        {q?.data?.map((i: ProductItem) => (
        <div
            key={i.id}
            className="flex flex-col basis-1/2 md:basis-1/4 bg-gray-100 p-4 rounded-md"
        >
            <div className="mb-2">
                <img src={i.image} className="aspect-square object-cover object-top" />
            </div>
            <h3 className="mb-2"><strong>{i.title}</strong></h3>
            <hr className="mb-2" />
            <p><small>{i.description
                .split(' ')
                .slice(0, 30)
                .join(' ')
            }</small></p>
        </div>
        ))}
    </div>)
}

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
                <div className="App">
                    <header className="App-header">
                        <Header />
                    </header>
                    <section className="App-content">
                        <Qq />
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
