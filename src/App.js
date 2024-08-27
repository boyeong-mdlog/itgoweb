import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Layout from "./components/layouts/Layout";
import "./res/styles/itgoweb.css";
import PUB from "./PUB/PUB";

function App() {
  return (
      <Layout>
          <Routes>
            <Route path="/pub/:pageID" element={<PUB pageID={":pageID"}/>} />
          </Routes>
      </Layout>
  );
}

export default () => (
    <Router>
      <App />
    </Router>
);
