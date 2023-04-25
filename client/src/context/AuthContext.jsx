
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const loginUser=(email,password)=>{
  return fetch('/login',
      {
        method: "POST",
        headers: 
       {
        'content-Type': "application/json"
       } ,
       body: JSON.stringify({email: email, password: password})
      }
      )
      .then(response=>response.json())
      .then(data=>{
        if(data.authorized){
          const token=data.token
  
          return {user: data.user,token:token}
        }
        else{
          throw new Error("Invalid email or password")
        }
      })
}

export const AuthContext = createContext({
  user: null,
  token: null,
  login: () => {},
  signup: () => {},
  logout: ()=>{}
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedToken && storedUser) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);


  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  const signup = async (userData) => {
    if (!userData.first_name||!userData.surname||!userData.email || !userData.password) {
      throw new Error('Email and password are required.');
    }

    try {
      const res = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } else {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        Swal.fire({
          icon: 'success',
          title: 'User created successfully',
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

  const login=async(email,password)=>{
   if(user){
    console.log("already logged in")
    console.log(token)
    return;
   }try{
    const {user,token}=await loginUser(email,password)
    setUser(user)
    setToken(token)
  localStorage.setItem('token',token)
  localStorage.setItem('user',JSON.stringify(user))
  Swal.fire({
    icon: 'success',
    title: 'Logged in successfully',
  });

  navigate('/userlandingpage')
}
  
  catch(error){
  console.error(error.message)
  }
  }
  return (
    <AuthContext.Provider value={{ user, token, login,logout, signup }}>

      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;