import "./App.css";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Textarea from "./components/textarea/Textarea";
import Content from "./components/contents/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Textarea />
      <Content />
    </div>
  );
}

export default App;
