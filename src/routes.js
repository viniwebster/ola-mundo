import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/SobreMim";
import Home from "./pages/home";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao/>}>
            <Route index element={<Home />}/>
            <Route path="sobremim" element={<AboutMe />}/>
          </Route>

          <Route path="posts/:id/*" element={<Post />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
     <Rodape />
    </BrowserRouter>
    )
}

export default AppRoutes;
