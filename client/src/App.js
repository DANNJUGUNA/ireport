import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddReport from "./components/AddReport";
import PublicReports from "./pages/PublicReports";

import AdminLogin from "./components/Admin/AdminLogin";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>

          <Route path="/reports" element={<PublicReports />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/addreport" element={<AddReport/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
