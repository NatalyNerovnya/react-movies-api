import React from "react";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Header from "./Header.jsx";
import MainContainer from './../containers/MainContainer.jsx';

import '../styles/App.css';

const App = () =>  (
    <>
        <Header />
        <ErrorBoundary>
            <MainContainer />
            <h1>We are working in {process.env.NODE_ENV !== 'production'? "dev" : "prod"} mode</h1>
        </ErrorBoundary>
    </>
);

export default App;