import React from 'react'

function AddReport() {
  return (
    <div>
        <div className='p-10 m-12 border rounded-lg  border-slate-950'>
            <form className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Report any incidence</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>

                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Incidence type
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full max-w-lg h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                    >
                                        <option>incidence-type</option>
                                        <option>Red-flag</option>
                                        <option>Intervention</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Incidence title
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                    name="title"
                                    type="text"
                                    className="block w-full h-10 max-w-lg rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Description
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <textarea
                                    id="about"
                                    name="about"
                                    rows={4}
                                    className="block w-full max-w-lg rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={''}
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
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
                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Add video
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                    name="video_url"
                                    type="text"
                                    className="block w-full h-10 max-w-lg rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    GeoLocation co-ordinates
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                    name="text"
                                    type="latitude, longitude"
                                    autoComplete=""
                                    className="block w-full h-10 max-w-lg rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                    <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Send
                    </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddReport