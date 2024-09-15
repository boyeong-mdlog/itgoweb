import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Layout from "./components/layouts/Layout";
import "./res/styles/itgoweb.css";
import Home from "./Pages/Home"
import Notice from "./Pages/Notice";
import Question from "./Pages/Question";
import ItgoTerm from "./Pages/ItgoTerm";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Notice" element={<Notice />}/>
              <Route path="/Question" element={<Question />}/>
              <Route path="/itgoTerm" element={<ItgoTerm />} />
          </Routes>
      </Layout>
  );
}

export default () => (
    <Router>
      <App />
    </Router>
);
