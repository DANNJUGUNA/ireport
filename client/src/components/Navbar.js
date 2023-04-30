import { Fragment,useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {Link} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import Swal from 'sweetalert2'
// import { AdminContext } from "../context/AdminContext";
// import { PlusIcon } from "@heroicons/react/20/solid";

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
const navigation = [
  { name: "Home", href: '/', current: false },
  { name: "Public Reports", href: '/reports', current: false },
  { name: "About us", href: '/about-us', current: false },
  { name: "Admin", href: '/adminlogin', current: false }

];
const userNavigation = [
  { name: "Home", href: '/', current: true },
  // { name: "Public Reports", href: '/reports', current: false },
  { name: "About us", href: '/about-us', current: false },
  { name: "User Dashboard", href: '/userlandingpage'},
  { name: "Add Report", href: '/addreport'},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const{user,logout}=useContext(AuthContext)
  // const {admin,logout1}=useContext(AdminContext)
  const handleOnclick = () => {
   Swal.fire({
    icon: 'success',
    title: 'Thank you for using Ireporer',
    text: 'We are greatful for the opportunity to have had to report',
    confirmButtonText: 'OK'
   }).then(()=>{
    logout();
    window.location.href = '/';
   }); 
  };
  const handleadmin = () => {
    Swal.fire({
     icon: 'success',
     title: 'Thank you for using Ireporer',
     text: 'We are greatful for the opportunity to have had to report',
     confirmButtonText: 'OK'
    }).then(()=>{
    //  logout();
     window.location.href = '/';
    }); 
   };
  return (
    <Disclosure as="nav" className="bg-main1 text-poppins">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">             
    
                <a
                  href="/">  
                  <img
                    className=" h-12 w-auto lg:block oject-cover"
                    src={require('../assets/images/logo(outer_glow).png')}
                    alt="iReporter"                    
                  />
                </a>
                </div>
                
                  {
                    user ? 
                    userNavigation.map((item) => (
                      <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    < a
                      key={item.name}
                     href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-main3 text-white"
                          : "text-gray-300 hover:bg-main3 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                    </div>
                  )) :
                  navigation.map((item) => (
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    < a
                      key={item.name}
                     href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-main3 text-white"
                          : "text-gray-300 hover:bg-main3 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                    </div>
                    
                  )) 
                  
                  
                  }
                
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  { 
                  user?  <div className="flex-shrink-0">
                  <button onClick={handleOnclick}
                className="relative inline-flex items-center rounded-md border border-transparent bg-button px-4 py-2 text-sm font-medium text-main1 shadow-sm hover:bg-main3 hover:text-white focus:outline-none focus:ring-2 focus:ring-main3 focus:ring-offset-2 focus:ring-offset-gray-800"
                    
                  >
                  <span className="mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                  </span>
                    log out
                  </button>
           </div>:<div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <a href="/login"
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-button px-4 py-2 text-sm font-medium text-main1 shadow-sm hover:bg-main3 hover:text-white focus:outline-none focus:ring-2 focus:ring-main3 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="mr-1">Login</span>
                    <span >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <a href="/signup"
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-button px-4 py-2 text-sm font-medium text-main1 shadow-sm hover:bg-main3 hover:text-white focus:outline-none focus:ring-2 focus:ring-main3 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="mr-1">Sign up</span>
                    <span >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>
                    </span>
                  </a>
                </div>
                </div>
                }
              </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                   
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
      
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5 sm:px-6">
                {/* <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {user.email}
                  </div>
                </div> */}
              </div>
              <div className="mt-3 space-y-1 px-2 sm:px-3">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
