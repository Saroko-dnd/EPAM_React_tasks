import React from 'react';
import 'scss-reset-by-igor-saroko';

import Main from './containers/RouteContentContainer';
import Header from './components/Header';
import Footer from './components/Footer';

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
