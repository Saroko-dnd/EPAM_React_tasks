import React from 'react';
import 'scss-reset-by-igor-saroko';

import Main from './containers/RouteContentContainer';
import Footer from './components/Footer';
import SiteHeader from './containers/SiteHeader';

import './App.scss';

function App() {
    return (
        <div
            id="ovveride-bootstrap"
            className="react-app-site d-flex flex-column"
        >
            <SiteHeader />
            <Main className="react-app-main" />
            <Footer />
        </div>
    );
}
export default App;
