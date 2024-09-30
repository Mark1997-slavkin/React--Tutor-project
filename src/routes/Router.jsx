import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import HomePage from "../pages/Home.page";
import BookPage from "../pages/Book.page";
import FavoritesPage from "../pages/Favorites.page";
import Aboutpage from "../pages/About.page";
import Contactpage from "../pages/Contact.page";


export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.BOOKPAGE} element={<BookPage />} />
      <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTES.ABOUT} element={<Aboutpage />} />
      <Route path={ROUTES.CONTACT} element={<Contactpage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
}
