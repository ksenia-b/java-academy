import { Home, Main, ProfileInfo} from '../../pages';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout  from "../../layout/index";


export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route  element={<Layout />} >
          <Route element={<Main/>}  path={"profile"} />
          <Route element={<ProfileInfo />} path={"profile/info"} />
      </Route>
    </Routes>
  </BrowserRouter>
);




