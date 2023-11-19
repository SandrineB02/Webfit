import { Contact, Error404, Home } from "@/Pages/Public/Index";
import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "@/Layouts/Layout";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;
