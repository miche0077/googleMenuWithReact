import "./styles/App.css";

import Header from "./components/Header";
import Search from "./components/search";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="App">
      <Header  />
      <Search />
      <Buttons type="submit" prop1="Pesquisa Google" prop2="Estou com sorte"/>
      <Footer />
    </div>
  );
  }

export default App;
