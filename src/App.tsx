
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";

import Products from "./routes/Home/Products";
import Wellcome from "./components/Wellcome";
import AboutUs from "./routes/Home/AboutUs";
import ComputerCategory from "./routes/Home/Products/ComputerCategory/computer";
import NotFound from "./NotFound";



function App() { 

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />}>
              <Route index element = {<Wellcome />} />
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
