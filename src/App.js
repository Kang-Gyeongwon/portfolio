import { BrowserRouter } from "react-router-dom";
import Contact from "./components/contact";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import Portfolios from "./components/Portfolio/Portfolios";
import Top from "./components/Scroll_Top";

const App = () => {
  return <BrowserRouter>
    <Home />
    <Top />
    <Introduction />
    <Portfolios />
    <Contact />
  </BrowserRouter>
}

export default App;