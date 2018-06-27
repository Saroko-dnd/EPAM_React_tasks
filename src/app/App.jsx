import React from 'react';
import 'scss-reset-by-igor-saroko';

import Main from './applicationComponents/Main';
import Header from './applicationComponents/Header';
import Footer from './applicationComponents/Footer';

import './App.scss';

function App() {
    return (
        <div className="react-app-site d-flex flex-column">
            <Header />
            <Main className="react-app-main" />
            <Footer />
        </div>
    );
}
export default App;
