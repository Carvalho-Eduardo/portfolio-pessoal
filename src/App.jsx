
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0d1117] text-slate-100">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
