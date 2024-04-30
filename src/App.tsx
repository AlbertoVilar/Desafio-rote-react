
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";

import Products from "./routes/Home/Products";

import AboutUs from "./routes/Home/AboutUs";
import ComputerCategory from "./routes/Home/Products/ProductsCategories";
import NotFound from "./NotFound";
import WellcomeHome from "./routes/Home/WellcomeHome";



function App() { 

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />}>
            <Route index element={<Navigate to="/home"/>} />
              <Route path="home" element = {<WellcomeHome />} />
              <Route path="produtos" element = {<Products />}>
                  <Route path=":computerId" element = {<ComputerCategory />} />
              </Route>

              <Route path="sobre" element = {<AboutUs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
