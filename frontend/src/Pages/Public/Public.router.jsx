import {
  Calendar,
  Error404,
  Inscription,
  Search,
  Zone,
} from "@/Pages/Public/Index";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "@/Layouts/Layout";
import ConectionLayout from "../../Layouts/ConectionLayout";
import { Conection, Localisation } from "./Index";

const PublicRouter = () => {
  return (
    <Routes>
      <Route
        path="/conection"
        element={
          <ConectionLayout>
            <Conection />
          </ConectionLayout>
        }
      />

      <Route element={<Layout />}>
        <Route path="" element={<Navigate to="/conection" />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/localisation" element={<Localisation />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/search" element={<Search />} />
        <Route path="/zone" element={<Zone />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
