import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CopyrightText from "../components/copyright";
export default function Index(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
      <CopyrightText />
    </>
  );
}
