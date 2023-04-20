import { create } from 'lodash'
import React from 'react'
import { useContext,useState } from 'react'
import { AuthContext } from '../context/AuthContext'
function Signup() {
  const{signup}=useContext(AuthContext)
  const[first_name,setFirstname]=useState("")
  const[surname,setSurname]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (first_name.trim() === ''||surname.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please enter all required fields');
      return;
    }
    const userData = {first_name,surname, email, password, };
    signup(userData);
  };
  return (
    <div>
        <div className="flex min-h-full p-10">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto block"
                src="https://bit.ly/3GL4ZQk"
                alt="Your Company"
              />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign Up</h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        id="first_name"
                        name="first_name"
                        onChange={e=>setFirstname(e.target.value)}
                        type="text"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Surname
                    </label>
                    <div className="mt-1">
                      <input
                        id="last_name"
                        name="last_name"
                        onChange={e=>setSurname(e.target.value)}
                        type="text"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        onChange={e=>setEmail(e.target.value)}
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                        onChange={e=>setPassword(e.target.value)}
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-main1 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign up
                    </button>
                  </div>
                  <p>Have an account? <a href='/login' className=' font-sm text-blue-700 underline'>Log in</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden 0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover rounded-lg"
            src="https://globalgovernanceforum.org/wp-content/uploads/2020/12/strategies-fight-corruption.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Signup