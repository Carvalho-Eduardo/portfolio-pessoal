import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

function App() {
  return (
    <HashRouter>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#080c12] text-slate-100">
        <Header />

        <Suspense fallback={<div className="min-h-screen bg-[#080c12]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projetos/:id" element={<ProjectDetails />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
