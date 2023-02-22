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
import ProductPage from "./Components/Product/Product";
import ProductPageContextProvider from "./Context/ProductPageContext";
import CartContext from "./Context/CartContext";
import PopupCart from "./Components/Cart/PopupCart";

const LazyShop = React.lazy(() => import("./Components/Shop/Shop"));

const App: React.FC = () => {
  const [isActive, updateActive] = useState<boolean>(false);
  const [isCartActive, updateHover] = useState<boolean>(false);

  const adjustState = () => {
    updateActive(!isActive);
  };
  console.log(isCartActive);
  const routeNav = (
    <>
      <Navigation toggle={adjustState} updateCartActive={updateHover} />
      <MenuOverlay isActive={isActive} />
    </>
  );
  return (
    <ShopContextProvider>
      <ProductPageContextProvider>
        <CartContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={routeNav}>
                <Route index element={<Home />} />
                <Route
                  path="/shop"
                  element={
                    <React.Suspense fallback="">
                      <LazyShop />
                    </React.Suspense>
                  }
                />
                <Route path={`/shop/*`} element={<ProductPage />} />
                {/* <Route path="press" element={<Blogs />} /> */}
                {/* <Route path="story" element={<Contact />} /> */}
                {/* <Route path="collections" element={<Contact />} /> */}
                {/* <Route path="*" element={<NoPage />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
          <PopupCart isCartActive={isCartActive} updateHover={updateHover}/>

        </CartContext>
      </ProductPageContextProvider>
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
