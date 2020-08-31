import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header";
import Footer from "../Footer";
import MainContainer from '../MainContainer';

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