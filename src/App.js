import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div id="content-wrapper" class="d-flex flex-column">
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
