import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/contact";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import Menu from "./components/Menu";
import Portfolios from "./components/Portfolio/Portfolios";
import Top from "./components/Scroll_Top";

const App = () => {
  const [aboutTop, updateAbout] = useState(0);
  const [portTop, updatePort] = useState(0);
  const [contactTop, updateContact] = useState(0);

  const goAbout = () => {
    window.scrollTo({
      top: aboutTop, behavior: "smooth"
    })
  }
  const goPort = () => {
    window.scrollTo({
      top: portTop, behavior: "smooth"
    })
  }
  const goContact = () => {
    window.scrollTo({
      top: contactTop, behavior: "smooth"
    })
  }

  return <BrowserRouter>
    <Home />
    <Menu goAbout={goAbout} goPort={goPort} goContact={goContact} />
    <Top />
    <Introduction updateAbout={updateAbout} />
    <Portfolios updatePort={updatePort} />
    <Contact updateContact={updateContact} />
  </BrowserRouter>
}

export default App;