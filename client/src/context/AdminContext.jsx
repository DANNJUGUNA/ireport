import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const adminlogin=(email,password)=>{
    return fetch('https://ireporter1.onrender.com/admin',{
      method: "POST",
          headers: 
         {
          'content-Type': "application/json"
         } ,
         body: JSON.stringify({email: email, password: password})
    })
    .then(response=>response.json())
        .then(data=>{
          if(data.authorized){
            const token=data.token
    
            return {admin: data.user,token:token}
          }
          else{
            throw new Error("Invalid email or password")
          }})
  }
  export const AdminContext = createContext({
    admin: null,
    token: null,
    logout1: ()=>{},
    adminlog:()=>{}
  });

  const AdminAuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
     const storedToken = localStorage.getItem("token");
    const storedAdmin = localStorage.getItem("admin");

    if (storedToken && storedAdmin) {
      setAdmin(storedAdmin);
      setToken(storedToken);
     
   
    }
  }, []);


  const logout1 = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('token');
    setAdmin(null);
    setToken(null);
  };
  const adminlog= async(email,password)=>{
    if(admin){
      Swal.fire({
        icon: 'warning',
        title: 'Admin is already logged in',
      });
      navigate('/admindashboard')
      return;
    }
    try{
      const{admin,token}=await adminlogin(email,password)
      setAdmin(admin)
      setToken(token)
      localStorage.setItem('token',token)
    localStorage.setItem('admin',JSON.stringify(admin))
    Swal.fire({
      icon: 'success',
      title: 'Logged in successfully',
    });
   
    navigate('/admindashboard')
    }catch(error){
      console.error(error.message)
    Swal.fire({
      icon: 'error',
      title: 'Error logging in',
      text: error.message,
    });
    throw error;
    }
   }

    return (
        <AdminContext.Provider value={{ admin, token,logout1,adminlog }}>
    
          {children}
        </AdminContext.Provider>
      );
  }
  export default AdminAuthProvider