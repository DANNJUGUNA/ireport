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

import PublicReportDetails from "./pages/PublicReportDetails";
import About from "./components/About";
import AdminReportDetails from "./pages/AdminReportDetails";

import UserLandingPage from "./pages/UserLandingPage";

import Homepage from "./components/Homepage";
import AuthProvider from "./context/AuthContext";
import UserReportDetails from "./pages/UserReportDetails";

function App() {
  return (

    <BrowserRouter>
      <div className="App">
      
      
        <AuthProvider>
        <Navbar />
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
              <Route path="/publicreportdetails/:reportId" element={<PublicReportDetails />} />
              <Route path="/userreportdetails/:reportId" element={<UserReportDetails />} />
              <Route path="/adminreportdetails/:reportId" element={<AdminReportDetails />} />
              <Route path="/about-us" element={<About />} />
          </Routes>
        </AuthProvider>


        <Footer />
      </div>
  </BrowserRouter>

  );
}

export default App;
