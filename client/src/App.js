import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddReport from "./components/AddReport";
import PublicReports from "./pages/PublicReports";
import AdminLogin from "./components/Admin/AdminLogin";

import AdminSignup from "./components/Admin/AdminSignup";
import AdminDashboard from "./components/Admin/AdminDashboard";

import ViewReportDetails from "./pages/ViewReportDetails";
import About from "./components/About";
import AdminReportDetails from "./pages/AdminReportDetails";

import UserLandingPage from "./pages/UserLandingPage";

import Homepage from "./components/Homepage";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      
        <AuthProvider>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/reports" element={<PublicReports />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addreport" element={<AddReport />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/userlandingpage" element={<UserLandingPage />} />
              <Route path="/adminsignup" element={<AdminSignup />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/viewreportdetails" element={<ViewReportDetails />} />
              <Route path="/adminreportdetails" element={<AdminReportDetails />} />
              <Route path="/about-us" element={<About />} />
          </Routes>
        </AuthProvider>


        <Footer />
      </div>
  </BrowserRouter>
  );
}

export default App;
