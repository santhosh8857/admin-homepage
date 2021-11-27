import "./App.css";
import Chart from "./components/Chart";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";

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
              <Chart />
              <Showcase />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
