import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { AppContext } from './context/AppContext';
import Store from './types/Store';


function App() {
  const [store] = useState<Store>({
    theme: {
      darkMode: false,
    }
  });

  return (
    <AppContext.Provider value={store}>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <section className="App-content">
          {store?.theme?.darkMode ? "Dark Mode" : "Light Mode"}
        </section>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
