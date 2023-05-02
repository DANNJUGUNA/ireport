import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// user login
const loginUser = (email, password) => {
  return fetch("https://ireporter1.onrender.com/login", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.authorized) {
        const token = data.token;

        return { user: data.user, token: token };
      } else {
        throw new Error("Invalid email or password");
      }
    });
};

// admin login
const adminlogin = (email, password) => {
  return fetch("https://ireporter1.onrender.com/admin", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.authorized) {
        const token = data.token;
 
 
        return { admin: data.admin, token: token };
      } else {
        throw new Error("Invalid email or password");
      }
    });
 };
 
export const AuthContext = createContext({
  user: null,
  token: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
  adminlog: () => {},
  adminSignup: () => {}
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

     if (storedToken && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch (error) {
        console.error(error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedAdmin = localStorage.getItem('amdin');
     if (storedToken && storedAdmin) {
      try {
        setAdmin(JSON.parse(storedAdmin));
        setToken(storedToken);
      } catch (error) {
        console.error(error);
        localStorage.removeItem('user');
        localStorage.removeItem('admin');
      }
    }
  }, []);
 

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    setUser(null);
    setAdmin(null)
    setToken(null);
  };

  // admin signup
  const adminSignup = async (adminData) => {
    if (
      !adminData.first_name ||
      !adminData.surname ||
      !adminData.email ||
      !adminData.password
    ) {
      throw new Error("Email and password are required.");
    }
 
 
    try {
      const res = await fetch("https://ireporter1.onrender.com/signup_admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } else {
        setToken(data.token);
        setUser(data.admin);
        localStorage.setItem("token", data.token);
        localStorage.setItem("admin", JSON.stringify(data.admin));
        Swal.fire({
          icon: "success",
          title: "User created successfully",
        });
 
 
        navigate("/adminlogin");
      }
    } catch (error) {
      console.error(error.message);
 
 
      Swal.fire({
        icon: "error",
        title: "Error creating user",
 
 
        text: error.message,
      });
      throw error;
    }
  };

  // user signup
  const signup = async (userData) => {
    if (
      !userData.first_name ||
      !userData.surname ||
      !userData.email ||
      !userData.password
    ) {
      throw new Error("Email and password are required.");
    }

    try {
      const res = await fetch("https://ireporter1.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } else {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        Swal.fire({
          icon: "success",
          title: "User created successfully",
        });

        navigate("/login");
      }
    } catch (error) {
      console.error(error.message);

      Swal.fire({
        icon: "error",
        title: "Error creating user",

        text: error.message,
      });
      throw error;
    }
  };

  // admin login
  const adminlog = async (email, password) => {
    if (user) {
      Swal.fire({
        icon: "warning",
        title: "Admin is already logged in",
      });
      navigate("/admindashboard");
      return;
    }
    try {
      const { admin, token } = await adminlogin(email, password);
      setUser(admin);
      setToken(token);
      localStorage.setItem("token", token);
      localStorage.setItem("admin", JSON.stringify(admin));
      Swal.fire({
        icon: "success",
        title: "Logged in successfully",
      });


      navigate("/admindashboard");
    } catch (error) {
      console.error(error.message);
      Swal.fire({
        icon: "error",
        title: "Error logging in",
        text: error.message,
      });
      throw error;
    }
  };


  //  user login
  const login = async (email, password) => {
    if (user) {
      console.log("already logged in");
      console.log(token);
      return;
    }
    try {
      const { user, token } = await loginUser(email, password);
      setUser(user);
      setToken(token);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      Swal.fire({
        icon: "success",
        title: "Logged in successfully",
      });

      navigate("/userlandingpage");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, signup, adminlog, adminSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
