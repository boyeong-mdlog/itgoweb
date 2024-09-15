import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Layout from "./components/layouts/Layout";
import "./res/styles/itgoweb.css";
import Home from "./Pages/Home"
import Notice from "./Pages/Notice";
import Question from "./Pages/Question";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Notice" element={<Notice />}/>
              <Route path="/Question" element={<Question />}/>
          </Routes>
      </Layout>
  );
}

export default () => (
    <Router>
      <App />
    </Router>
);
