import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import Header from "./components/Header"
import MeetPage from "./pages/meetPage";
import ExperiencePage from "./pages/experiencePage";
import ProjectsPage from "./pages/projectsPage";
import ContactPage from "./pages/contactPage";

function App() {
  return (
      <BrowserRouter > 
        <Header />
        <Routes>
          <Route path="/" element={<MeetPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
