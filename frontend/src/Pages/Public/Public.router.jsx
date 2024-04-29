import { Calendar, Conection, Error404, Geolocalisation, Inscription, Search, Zone } from "@/Pages/Public/Index";
import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "@/Layouts/Layout";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/conection" />} />
                <Route path="/home" element={<Calendar />} />
                <Route path="/contact" element={<Conection />} />
                <Route path="/contact" element={<Geolocalisation />} />
                <Route path="/contact" element={<Inscription />} />
                <Route path="/contact" element={<Search />} />
                <Route path="/contact" element={<Zone />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;
