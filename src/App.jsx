import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import SnacksPage from "./pages/SnacksPage";
import StudentsPage from "./pages/StudentsPage";
import StudentDetailPage from "./pages/StudentDetailPage";
import CreateStudentPage from "./pages/CreateStudentPage";

function App() {
  return (
    // AppProvider wraps everything so all pages can access global state
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            {/* Default route → redirect to snacks page */}
            <Route path="/" element={<Navigate to="/snacks" replace />} />
            <Route path="/snacks" element={<SnacksPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/students/:id" element={<StudentDetailPage />} />
            <Route path="/create-student" element={<CreateStudentPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
