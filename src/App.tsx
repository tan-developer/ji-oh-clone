import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { TListProduct, Product } from "./Interface/interface";

import Navigation from "./Components/Navigation/Navigation";
import MenuOverlay from "./Components/ModelMenu/modal";
import Home from "./Components/Home/Home";
import LoadingOverLay from "./Components/Overlay/LoadingOverLay";

import Shop from "./Components/Shop/Shop";

const asyncTimeout = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const useProduct = () => {
  const {isLoading  ,data} = useQuery(
    ["PRODUCT"],
    async () => {
      const { data } = await axios.get(
        "https://api.npoint.io/0f87a6b8ae838d2f1ffa"
      );
      await asyncTimeout(1000)
      return data;
    },
    {
      enabled: true,
      refetchOnMount: false,
    }
  );

  return {isLoading, product : data}
};

const App: React.FC = () => {
  const {isLoading, product} = useProduct()
  const [isActive, updateActive] = useState<boolean>(false);

  const adjustState = () => {
    updateActive(!isActive);
  };

  console.log(product , isLoading)

  const routeNav = (
    <>
      <Navigation toggle={adjustState} />
      <MenuOverlay isActive={isActive} />
    </>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={routeNav}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop listProduct={product} isLoading={isLoading} />} />
          {/* <Route path="press" element={<Blogs />} /> */}
          {/* <Route path="story" element={<Contact />} /> */}
          {/* <Route path="collections" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


  // console.log(shopProduct)

  // return (
  //   <React.Fragment>
  //

  //     <Navigation toggle={adjustState} />
  //     <MenuOverlay isActive={isActive} />

  //     <div className="content-container">
  //       <Shop listProduct={shopProduct}/>
  //     </div>
  //     {/* <LoadingOverLay />   */}
  //   </React.Fragment>
  // );