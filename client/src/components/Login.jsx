import React from 'react'
import { useState,useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'
function Login() {
    const{login}=useContext(AuthContext)
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const handleSubmit = (e)=>{
    // send Data to rails
    e.preventDefault()
    login(email, password)
}

  return (
    <div>
        <div>
        <div className="flex min-h-full p-10">
            <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                <img

                    className="h-12 w-auto"
                    src={require('../assets/images/logo-icon.png')}

                    alt="Your Company"
                />
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Log in </h2>
                </div>

                <div className="mt-8">

                <div className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                        </label>
                        <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={e => setEmail(e.target.value)} 
                            autoComplete="email"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-main2 focus:outline-none focus:ring-main2 sm:text-sm"
                        />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                        </label>
                        <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-main2 focus:outline-none focus:ring-main2 sm:text-sm"
                        />
                        </div>
                    </div>

                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-main1 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-main4 hover:text-main1 focus:outline-none focus:ring-2 focus:ring-main2 focus:ring-offset-2"
                        >
                        Log in
                        </button>
                    </div>
                    <p>Don't have an account? <a href='/signup' className=' font-sm text-main2 hover:text-main1 underline'>Sign up</a></p>
                    </form>
                    
                </div>
                </div>
            </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
            <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://globalgovernanceforum.org/wp-content/uploads/2020/12/strategies-fight-corruption.jpg"
                alt=""
            />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login