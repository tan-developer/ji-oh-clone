import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, HashRouter } from "react-router-dom";
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
import Footer from "./Components/Footer/Footer";
import Press from "./Components/Press/Press";
import Story from "./Components/Story/Story";
import Collections from "./Components/Collections/Collections";
import NoPage from "./Components/404/404";
import Contact from "./Components/Contact/Contact";

const LazyShop = React.lazy(() => import("./Components/Shop/Shop"));

const App: React.FC = () => {
  
  const [isActive, updateActive] = useState<boolean>(false);
  const [isCartActive, updateHover] = useState<boolean>(false);

  const adjustState = () => {
    updateActive(!isActive);
  };

  const routeNav = (
    <>
      <Navigation toggle={adjustState} updateCartActive={updateHover} />
      <MenuOverlay isActive={isActive} updateActive={updateActive} />
      <PopupCart isCartActive={isCartActive} updateHover={updateHover} />
    </>
  );

  return (
    <>
      <ShopContextProvider>
        <ProductPageContextProvider>
          <CartContext>
<HashRouter>

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
                  <Route path="/press" element={<Press/>} />
                  <Route path="/story" element={<Story />} />
                  <Route path="/collections" element={<Collections />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </HashRouter>
          </CartContext>
        </ProductPageContextProvider>
      </ShopContextProvider>
      <Footer />
    </>
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
