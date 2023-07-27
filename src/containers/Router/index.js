import { Home, Main} from '../../pages';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route element={<Main />} path={"/profile"} />
    </Routes>
  </BrowserRouter>
);
