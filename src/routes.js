import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/SobreMim";
import Home from "./pages/home";
import Menu from "./components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutme" element={<AboutMe />}/>
      </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes;
