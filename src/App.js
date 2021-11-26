import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Header />
            <div class="container-fluid">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
