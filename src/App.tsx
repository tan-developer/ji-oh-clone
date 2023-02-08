import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { TListProduct, Product } from "./Interface/interface";

import Navigation from "./Components/Navigation/Navigation";
import MenuOverlay from "./Components/ModelMenu/modal";
import Home from "./Components/Home/Home";

import Shop from "./Components/Shop/Shop";
import ShopContextProvider from "./Context/ShopContext";

const App: React.FC = () => {
  const [isActive, updateActive] = useState<boolean>(false);

  const adjustState = () => {
    updateActive(!isActive);
  };

  const routeNav = (
    <>
      <Navigation toggle={adjustState} />
      <MenuOverlay isActive={isActive} />
    </>
  );
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={routeNav}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="press" element={<Blogs />} /> */}
            {/* <Route path="story" element={<Contact />} /> */}
            {/* <Route path="collections" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
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
