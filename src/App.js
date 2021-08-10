import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import Top from "./components/Scroll_Top";

const App = () => {
  return <BrowserRouter>
    <Home />
    <Top />
    <Introduction />
    <div style={{width: 100, height: 100}}>asfdkljasd</div>
  </BrowserRouter>
}

export default App;