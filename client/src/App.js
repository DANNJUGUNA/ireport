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
import Homepage from "./components/Homepage";


function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>

          <Route path="/reports" element={<PublicReports />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/addreport" element={<AddReport/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/adminsignup" element={<AdminSignup/>}/>
          <Route path="/admindashboard" element={<AdminDashboard/>} />

          <Route path="/viewreportdetails" element={<ViewReportDetails />} />
          <Route path="/adminreportdetails" element={<AdminReportDetails />} />


        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
