
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";

import Products from "./routes/Home/Products";
import Wellcome from "./components/Wellcome";
import AboutUs from "./routes/Home/AboutUs";



function App() { 

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />}>
              <Route index element = {<Wellcome />} />
              <Route path="produtos" element = {<Products />} />
              <Route path="sobre" element = {<AboutUs />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
