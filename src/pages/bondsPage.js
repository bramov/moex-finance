import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import RenderedItems from "./components/renderedItems";

function BondsPage() {
  return (
    <>
      <Header/>
      <RenderedItems market="bonds"/>
      <Footer/>
    </>
  )
}

export default BondsPage;
