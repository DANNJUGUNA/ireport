import React, { useEffect, useState, useContext } from "react";
import { XCircleIcon } from '@heroicons/react/20/solid'
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'


function AddReport() {
  // access logged in user details
  const {user} = useContext(AuthContext)


  const[reportTypes, setReportTypes] = useState([])
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  // Success Submit Message function
  const showMessage = (msg = '', type = 'success') => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        customClass: { container: 'toast' },
    });
    toast.fire({
        icon: type,
        title: msg,
        padding: '10px 20px',
    });
  };

  const [formData, setFormData] = useState({
    description: "",
    image: "",
    video: "",
    gps_coordinates: "-0.2802724, 36.0712048",
    user_id: "",
    report_type_id: "",
    report_status_id: "1",
    title: "",
    location_name: "",
  });

  // watches for changes in the user object, then once available, update the formData
  useEffect(() => {
    if (user) {
      setFormData({
        ...formData,
        user_id: user.id,
      });
    }
  }, [user]);
  
  // fetch all Report Types
  useEffect(() => {
    fetch('/report_types')
    .then(r => r.json())
    .then((data) => setReportTypes(data))
    
  }, [])

  // POST Report
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then( resp => {
      if (resp.ok) {
        resp.json()
        .then((data) => console.log(data))
        showMessage('Report has been saved successfully.');
        navigate("/userlandingpage")
      }
      else {
        resp.json()
        .then(errorData => setErrors(errorData))
        showMessage('Report has NOT been saved!', 'error');
      }
    })
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  if(!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-full bg-gray-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-white shadow p-10 m-12 border  border-gray-300">
          <form
            className="space-y-8 divide-y divide-gray-200"
            onSubmit={handleSubmit}
          >
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div className="space-y-6 sm:space-y-5">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Report any incidence
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>

                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="report_type_id"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Report Type
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <select
                        id="report_type_id"
                        name="report_type_id"
                        autoComplete="off"
                        className="block w-full max-w-lg h-10 rounded-md border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:max-w-xs sm:text-sm"
                        onChange={handleChange}
                        value={formData.report_type_id}
                      > 
                        <option>Select Report Type</option>                       
                        {reportTypes.map((type) => (
                          <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Report title
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                        id="title"
                        name="title"
                        type="text"
                        className="block w-full h-10 max-w-lg rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                        onChange={handleChange}
                        value={formData.title}
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Description
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        className="block w-full max-w-lg rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                        defaultValue={""}
                        onChange={handleChange}
                        value={formData.description}
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Add photo
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
                                name="image"
                                type="file"
                                className="sr-only"
                                onChange={handleChange}
                                value={formData.image}
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

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="video"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Add video
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                        id="video"
                        name="video"
                        type="text"
                        className="block w-full h-10 max-w-lg rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                        onChange={handleChange}
                        value={formData.video}
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="location_name"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Location Name
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                        id="location_name"
                        name="location_name"
                        type="text"
                        className="block w-full h-10 max-w-lg rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                        onChange={handleChange}
                        
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="gps_coordinates"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      GPS Coordinates
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                        id="gps_coordinates"
                        name="gps_coordinates"
                        type="text"
                        className="block w-full h-10 max-w-lg rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                        onChange={handleChange}
                        defaultValue="-0.2802724, 36.0712048"
                      />
                    </div>
                  </div>
                  {/* Alert for Displaying Submission Errors */}
                  {/* { errors.length > 0 && */}
                    {/* <div className="rounded-md bg-red-50 p-4 mt-3 w-2/3">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">There were {errors.length} error(s) with your submission</h3>
                          <div className="mt-2 text-sm text-red-700">
                            <ul role="list" className="list-disc space-y-1 pl-5">
                              {errors.map((error) => (
                                <li>{error}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  {/* } */}

                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-main2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-main1 focus:outline-none focus:ring-2 focus:ring-main2 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddReport;
