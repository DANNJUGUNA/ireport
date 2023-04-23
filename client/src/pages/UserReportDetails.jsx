import React, { useState, useEffect, useRef, Fragment}from 'react'
import { useParams } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react';

function UserReportDetails() {
  const { reportId }  = useParams()

  const[report, setReport] = useState([])
  const[reportStatus, setReportStatus] = useState([])
  const[reportType, setReportType] = useState([]) 

  const shouldLog = useRef(true)
  useEffect(() => {    
    if(shouldLog.current) {
      shouldLog.current = false
      fetch(`/reports/${reportId}`)
      .then(r => r.json())
      .then((data) => { setReport(data); setReportStatus(data.report_status); setReportType(data.report_type) })
    }
  }, [reportId])

  const saveUser = () => {   

    if (params.id) {
        //update user
        let user = report.find((d) => d.id === params.id);
        user.name = params.name;
        user.email = params.email;
        user.phone = params.phone;
        user.role = params.role;
        user.location = params.location;
    } 

    // showMessage('User has been saved successfully.');
    setAddContactModal(false);
  };
  const [addContactModal, setAddContactModal] = useState(false);
  const [defaultParams] = useState({
    id: null,
    title: '',
    location_name: '',
    phone: '',
    role: '',
    description: '',
  });
  
  const [params, setParams] = useState(JSON.parse(JSON.stringify(defaultParams)));
  const changeValue = (e) => {
    const { value, id } = e.target;
    setParams({ ...params, [id]: value });
  };
  const editUser = (user) => {
    const json = JSON.parse(JSON.stringify(defaultParams));
    setParams(json);
    if (user) {
        let json1 = JSON.parse(JSON.stringify(user));
        setParams(json1);
    }
    setAddContactModal(true);
  };

  return (
    <>
    <div className="min-h-full bg-gray-100 py-6">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg bg-white shadow">
        
        <div className="bg-white p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-sm font-medium text-gray-600">Report No: {report.id}</p>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">{reportType.name}</p>
                <p className="text-sm font-medium text-gray-600">{report.title}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0">
              <a
                href="/userlandingpage"
                className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                BACK
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          
            <div  className="px-6 py-5 text-center text-sm font-medium">
              <span className="text-gray-900">Date Created: </span> <span className="text-gray-600">{report.created_at}</span>
            </div>
            <div  className="px-6 py-5 text-center text-sm font-medium">
              <span className="text-gray-900">Last Updated: </span> <span className="text-gray-600">{report.updated_at}</span>
            </div>
            <div  className="px-6 py-5 text-center text-sm font-medium">
              <span className="text-gray-900">Report Status: </span> <span className="text-gray-600">{reportStatus.name}</span>
            </div>
         
        </div>
      </div>
      {/* 2-Column Section */}
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2 lg:col-start-1">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
                      {report.title}
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{report.location_name}</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      

                      {/* Image/Video Section */}
                      <div className="sm:col-span-2">                    
                          <img
                            src={report.image}
                            alt="Phone Camera"
                            className=" rounded-lg shadow ring-1 ring-gray-900/10"                            
                          />                          
                      </div>                      
                      
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">Description</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {report.description}
                        </dd>
                      </div>
                      
                    </dl>
                  </div>
                  
                </div>
              </section>

              {/* GPS Map Card Section*/}
              <section aria-labelledby="gps-map-section">
                <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
                  <div className="divide-y divide-gray-200">
                    <div className="px-4 py-5 sm:px-6">
                      <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                        GPS Map
                      </h2>
                      
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">{report.gps_coordinates}</p>
                    </div>
                    <div className=" py-3 sm:px-3">

                      {/* MAP IMAGE WITH MARKER GOES HERE!!! */}
                                         
                          <img
                            src="https://i.stack.imgur.com/t1Rfo.jpg"
                            alt="Phone Camera"
                            className=" rounded-lg "                            
                          />                          
                      

                    </div>
                  </div>
                  
                </div>
              </section>
            </div>

              {/*USER ACTION SECTION  */}
            <section aria-labelledby="user-actions" className="lg:col-span-1 lg:col-start-3">
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                  Actions:
                </h2>

                {/* Buttons for Editing and Delete */}
                <div className="mt-6 flow-root">
                  
                </div>
                <div className="justify-stretch mt-3 flex flex-col">
                  <button
                    onClick={() => editUser(reportId)}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-main4 px-4 py-2 text-sm font-medium text-main1 shadow-sm hover:bg-main2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    EDIT
                  </button>
                </div>
                <div className="justify-stretch mt-3 flex flex-col">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-danger px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-danger focus:outline-none focus:ring-2 focus:ring-danger focus:ring-offset-2"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </section>
          </div>

    </div>
    </div>

    {/* Edit Report Modal */}
    <Transition appear show={addContactModal} as={Fragment}>
                <Dialog as="div" open={addContactModal} onClose={() => setAddContactModal(false)} className="relative z-50">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center px-4 py-8">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="bg-white p-0 rounded-lg overflow-hidden w-full max-w-lg text-black">
                                    
                                    <div className="text-lg flex justify-center font-medium bg-gray-300 py-3 ">
                                        Update Report
                                    </div>
                                    
                                    <div className="p-5">
                                        <form>
                                            <div className="mb-5">                                            
                                              <label
                                                htmlFor=""
                                                className="block text-sm font-medium sm:mt-px sm:pt-2"
                                              >
                                                Report title
                                              </label>
                                              <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                <input
                                                  name="title"
                                                  type="text"
                                                  className="block w-full h-10 max-w-lg rounded-md bg-gray-50 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                                                />
                                              </div>
                                            </div>
                                            <div className="mb-5">
                                            <label
                                                  htmlFor="description"
                                                  className="block text-sm font-medium sm:mt-px sm:pt-2"
                                                >
                                                  Description
                                              </label>
                                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                  <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={4}
                                                    className="block w-full max-w-lg rounded-md bg-gray-50 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                                                    defaultValue={""}
                                                  />
                                                </div>
                                            </div>
                                            <div className="mb-5">                                            
                                              <label
                                                htmlFor=""
                                                className="block text-sm font-medium sm:mt-px sm:pt-2"
                                              >
                                                Location Name
                                              </label>
                                              <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                <input
                                                  name="location_name"
                                                  type="text"
                                                  className="block w-full h-10 max-w-lg rounded-md bg-gray-50 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                                                />
                                              </div>
                                            </div>
                                            <div className="mb-5">                                            
                                              <label
                                                htmlFor="gps_coordinate"
                                                className="block text-sm font-medium sm:mt-px sm:pt-2"
                                              >
                                                GPS Coordinates
                                              </label>
                                              <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                <input
                                                  name="gps_coordinates"
                                                  type="text"
                                                  className="block w-full h-10 max-w-lg rounded-md bg-gray-50 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                                                />
                                              </div>
                                            </div>
                                            <div className="mb-5">
                                              <label
                                                  htmlFor="gps_coordinate"
                                                  className="block text-sm font-medium sm:mt-px sm:pt-2"
                                                >
                                                  Image
                                              </label>
                                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                  <div className="space-y-1 text-center">
                                                    <svg
                                                      className="mx-auto h-12 w-12 text-gray-400"
                                                      stroke="currentColor"
                                                      fill="none"
                                                      viewBox="0 0 48 48"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                      />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                      <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md bg-white font-medium text-main2 focus-within:outline-none focus-within:ring-2 focus-within:ring-main2 focus-within:ring-offset-2 hover:text-main1"
                                                      >
                                                        <span>Upload a file</span>
                                                        <input
                                                          id="file-upload"
                                                          name="file-upload"
                                                          type="file"
                                                          className="sr-only"
                                                        />
                                                      </label>
                                                      <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                      PNG, JPG, GIF up to 10MB
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            
                                            
                                            
                                            <div className="flex justify-end items-center mt-8">
                                                <button type="button" className="btn btn-outline-danger mx-3" onClick={() => setAddContactModal(false)}>
                                                    Cancel
                                                </button>
                                                <button type="button" className="btn bg-success " onClick={saveUser}>
                                                    Update
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
    {/* End of Edit Report Modal */}
    </>    
  )
}

export default UserReportDetails