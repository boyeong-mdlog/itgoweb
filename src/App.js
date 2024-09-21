import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Layout from "./components/layouts/Layout";
import "./res/styles/itgoweb.css";
import Home from "./Pages/Home"
import Notice from "./Pages/Notice";
import Question from "./Pages/Question";
import ItgoTerm from "./Pages/ItgoTerm";
import PrivacyTerm from "./Pages/PrivacyTerm";
import LocationTerm from "./Pages/LocationTerm";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Notice" element={<Notice />}/>
              <Route path="/Question" element={<Question />}/>
              <Route path="/itgoTerm" element={<ItgoTerm />} />
              <Route path="/privacyPolicyTerm" element={<PrivacyTerm />} />
              <Route path="/locationTerm" element={<LocationTerm />} />
          </Routes>
      </Layout>
  );
}

export default () => (
    <Router>
      <App />
    </Router>
);
