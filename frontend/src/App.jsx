import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "@/Assets/Style/Import.scss";

import PublicRouter from "@/Pages/Public/Public.router";
const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<PublicRouter />} />
            </Routes>
        </BrowserRouter>

    );
};

export default App;