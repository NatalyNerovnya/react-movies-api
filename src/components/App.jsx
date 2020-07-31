import React, { Component } from "react";

import '../styles/App.css';

const App = () =>  (
    <h1>We are working in {process.env.NODE_ENV !== 'production'? "dev" : "prod"} mode</h1>
);

export default App;