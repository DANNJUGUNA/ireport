import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function ViewReportDetails() {
  const { reportId } = useParams();

  const [report, setReport] = useState([]);
  const [reportStatus, setReportStatus] = useState([]);
  const [reportType, setReportType] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      fetch(`http://localhost:3000/reports/${reportId}`)
        .then((r) => r.json())
        .then((data) => {
          setReport(data);
          setReportStatus(data.report_status);
          setReportType(data.report_type);
        });
    }
  }, [reportId]);

  return (
    <>
      <div className="min-h-full bg-gray-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="bg-white p-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:space-x-5">
                  <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                    <p className="text-sm font-medium text-gray-600">
                      Report No: {report.id}
                    </p>
                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {reportType.name}
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      {report.title}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex justify-center sm:mt-0">
                  <a
                    href="/home"
                    className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    BACK
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              <div className="px-6 py-5 text-center text-sm font-medium">
                <span className="text-gray-900">Date Created: </span>{" "}
                <span className="text-gray-600">report.date_created</span>
              </div>
              <div className="px-6 py-5 text-center text-sm font-medium">
                <span className="text-gray-900">Last Updated: </span>{" "}
                <span className="text-gray-600">report.date_updated</span>
              </div>
              <div className="px-6 py-5 text-center text-sm font-medium">
                <span className="text-gray-900">Report Status: </span>{" "}
                <span className="text-gray-600">{reportStatus.name}</span>
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
                    <h2
                      id="applicant-information-title"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {report.title}
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      report.location
                    </p>
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
                        <dt className="text-sm font-medium text-gray-500">
                          Description
                        </dt>
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
                      <h2
                        id="notes-title"
                        className="text-lg font-medium text-gray-900"
                      >
                        GPS Map
                      </h2>

                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        {report.gps_coordinates}
                      </p>
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
            <section
              aria-labelledby="user-actions"
              className="lg:col-span-1 lg:col-start-3"
            >
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2
                  id="timeline-title"
                  className="text-lg font-medium text-gray-900"
                >
                  Actions:
                </h2>

                {/* Buttons for Editing and Delete */}
                <div className="mt-6 flow-root"></div>
                <div className="justify-stretch mt-3 flex flex-col">
                  <button
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
    </>
  );
}

export default ViewReportDetails;
