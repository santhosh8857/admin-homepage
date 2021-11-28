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
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Header />
            <div className="container-fluid">
              <Dashboard />
              <Chart />
              {/* Projects & illustrations */}
              <Showcase />
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
