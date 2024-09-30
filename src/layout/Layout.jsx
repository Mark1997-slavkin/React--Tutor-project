import React, { useEffect } from "react";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { colors } from "@mui/material";
import Header from "./header/Header.component";



export default function Layout({ children }) {


  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
