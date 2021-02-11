import React from "react";
import Header from "./components/header";
import RenderedItems from "./components/renderedItems";
import Footer from "./components/footer";

function SharesPage() {
  return (
    <>
      <Header/>
      <RenderedItems market="shares"/>
      <Footer/>
    </>
  )
}

export default SharesPage;
