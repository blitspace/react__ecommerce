import { Fragment, useState } from 'react';
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
import TProductItem from './types/TProductItem';


const queryClient = new QueryClient()

function ProductItem({ image, title, description, price }: TProductItem) {
    return (
        <a href="#" className="group block">
            <img
                src={image}
                alt=""
                className="w-full object-cover aspect-square object-top"
            />

            <div className="mt-3 flex justify-between text-sm">
                <div>
                    <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">{title}</h3>

                    <p
                        className="mt-1.5 text-pretty text-xs text-gray-500"
                        aria-description={description}
                    >
                        {description
                            .split(' ')
                            .slice(0, 20)
                            .join(' ')
                        }...
                    </p>
                </div>

                <p className="text-gray-900">${price}</p>
            </div>
        </a>
    );
}

function Qq() {
    const q = useQuery<TProductItem[]>({
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

    return (<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-12">
        {q?.data?.map((i: TProductItem) => (
            <Fragment key={i.id}>
                <ProductItem {...i} />
            </Fragment>
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
