import React from 'react'
import { useContext,useState,createContext,useEffect } from 'react'
function loginUser(email, password) {
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.authorized) {
        const token = data.token;
  
        // save the token in localStorage or sessionStorage for future use
        return { user: data.user, token: token };
      } else {
        throw new Error('Invalid email or password');
      }
    });
  }
export const AuthContext =createContext({
  user:nill,
  token:nill

})
