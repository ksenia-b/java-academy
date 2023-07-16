import { Home } from "../../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route  index element={<Home />} />
    </Routes>
  </BrowserRouter>
);
