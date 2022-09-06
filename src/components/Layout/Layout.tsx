import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";
import {
  HOME,
  LOGIN,
  MY_COLLECTION,
  HOW_IT_WORKS,
  FAQ,
  PRIVACY_POLICY,
  TERMS_OF_USE,
} from "../../constants/routes";

const Layout = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <ScrollToTop>
      <Routes>{/* <Route path={HOME} element={<Home/>} /> */}</Routes>
    </ScrollToTop>
  </BrowserRouter>
);

export default Layout;
