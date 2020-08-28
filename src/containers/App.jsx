import React from "react";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MainContainer from './MainContainer.jsx';

import '../styles/App.css';

const App = () =>  (
    <>
        <Header />
        <ErrorBoundary>
            <MainContainer />
        </ErrorBoundary>
        <Footer />
    </>
);

export default App;