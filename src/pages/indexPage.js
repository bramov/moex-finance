import React from "react";
import RenderedItems from "./components/renderedItems";
import Footer from "./components/footer";
import Header from "./components/header";

function IndexPage() {
  return (
    <>
      <Header/>
      <RenderedItems market="index"/>
      <Footer/>
    </>
  )
}

export default IndexPage;
