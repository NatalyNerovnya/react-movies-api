import React from "react";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Header from "./Header.jsx";
import Footer from "../containers/Footer.jsx";
import MainContainer from './../containers/MainContainer.jsx';

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