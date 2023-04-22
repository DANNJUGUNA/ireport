import React, { useEffect, useState } from "react";

function AddReport() {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    video: "",
    gps_coordinates: "",
    user_id: "",
    report_type_id: "",
    report_status_id: "",
    title: "",
    location: "",
  });

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
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Incidence type
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <select
                        id="country"
                        name="report_type_id"
                        autoComplete="off"
                        className="block w-full max-w-lg h-10 rounded-md border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:max-w-xs sm:text-sm"
                        onChange={handleChange}
                        value={formData.report_type_id}
                      >
                        <option>Incidence-type</option>
                        <option>Red-flag</option>
                        <option>Intervention</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Incidence title
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                        name="title"
                        type="text"
                        className="block w-full h-10 max-w-lg rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                        onChange={handleChange}
                        value={formData.title}
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Description
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <textarea
                        id="about"
                        name="description"
                        rows={4}
                        className="block w-full max-w-lg rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
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
                      htmlFor="cover-photo"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Add video
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                        name="video"
                        type="text"
                        className="block w-full h-10 max-w-lg rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                        onChange={handleChange}
                        value={formData.video}
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      GeoLocation co-ordinates
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-1 px-8">
                      <input
                        name="gps_coordinates"
                        type="string"
                        autoComplete=""
                        placeholder="latitude,longitude"
                        className="block w-full h-10 max-w-lg rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                        onChange={handleChange}
                        value={formData.gps_coordinates}
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
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-main2 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-main2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-main1 focus:outline-none focus:ring-2 focus:ring-main2 focus:ring-offset-2"
                >
                  Send
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
