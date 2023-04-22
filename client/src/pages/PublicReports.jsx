import React, { useState, useEffect } from "react";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { sortBy } from "lodash";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";

function PublicReports() {
  // sample data
  const tableData = [
    {
      id: 1,
      description: "Car accident on Main Street",
      image: "https://example.com/car-accident.jpg",
      video: "https://example.com/car-accident.mp4",
      gps_coordinates: "37.7749° N, 122.4194° W",
      user_id: 1,
      report_type_id: 1,
      report_status_id: 1,
      user: {
        id: 1,
        first_name: "Jane",
        surname: "Doe",
        email: "janedoe@example.com",
        password_digest: "password",
      },
      report_status: {
        id: 1,
        name: "Under Investigation",
      },
      report_type: {
        id: 1,
        name: "Corruption",
      },
    },
  ];

  const [reports, setReports] = useState([]);

  // fetch all public reports
  useEffect(() => {
    fetch("/reports")
      .then((res) => res.json())
      .then((data) => setInitialRecords(data));
  }, []);

  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(
    sortBy(reports, "description")
  );
  const [recordsData, setRecordsData] = useState(initialRecords);
  const [search, setSearch] = useState("");
  const [sortStatus, setSortStatus] = useState({
    columnAccessor: "id",
    direction: "asc",
  });

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecordsData([...initialRecords.slice(from, to)]);
  }, [page, pageSize, initialRecords]);

  useEffect(() => {
    setInitialRecords(() => {
      return reports.filter((item) => {
        return (
          item.user.surname.toLowerCase().includes(search.toLowerCase()) ||
          item.user.first_name.toLowerCase().includes(search.toLowerCase()) ||
          item.report_status.name
            .toString()
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.report_type.name.toLowerCase().includes(search.toLowerCase()) ||
          item.user.email.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
        );
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    const data = sortBy(initialRecords, sortStatus.columnAccessor);
    setInitialRecords(sortStatus.direction === "desc" ? data.reverse() : data);
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortStatus]);

  const formatDate = (date) => {
    if (date) {
      const dt = new Date(date);
      const month =
        dt.getMonth() + 1 < 10 ? "0" + (dt.getMonth() + 1) : dt.getMonth() + 1;
      const day = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
      return day + "/" + month + "/" + dt.getFullYear();
    }
    return "";
  };

  const randomColor = () => {
    const color = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
    ];
    const random = Math.floor(Math.random() * color.length);
    return color[random];
  };

  const randomStatus = () => {
    const status = [
      "PAID",
      "APPROVED",
      "FAILED",
      "CANCEL",
      "SUCCESS",
      "PENDING",
      "COMPLETE",
    ];
    const random = Math.floor(Math.random() * status.length);
    return status[random];
  };

  return (
    <div className="min-h-full bg-gray-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro Banner */}
        <div className="bg-secondary-light my-6 rounded-lg">
          <div className="mx-auto px-6 py-8 sm:py-20 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Ready to Speak Up?
              <br />
              <span className="text-main1">
                Report all Corruption cases Today!
              </span>
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a
                href="/addreport"
                className="rounded-md bg-main1 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Report
              </a>
              <a
                href="/login"
                className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-300 text-main1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Signin <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* End of Intro Banner */}

        {/* Data Table */}
        <div className="overflow-hidden rounded-lg bg-white shadow p-6  border  border-gray-300">
          <div className="sm:flex sm:items-center ">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">
                Public Records{" "}
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                Here's a list of all red-flags and interventions posted on our
                platform
              </p>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto">
              <input
                type="text"
                className="form-input w-auto"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="min-w-full divide-y divide-gray-300 mt-6">
            <DataTable
              className="whitespace-nowrap table-hover"
              records={recordsData}
              columns={[
                {
                  accessor: "user",
                  title: "Name",
                  sortable: true,
                  render: (params) => (
                    <div className="flex items-center w-max">
                      <div>
                        {params.user.first_name + " " + params.user.surname}
                      </div>
                    </div>
                  ),
                },
                {
                  accessor: "description",
                  title: "Description",
                  sortable: true,
                },
                { accessor: "gps_coordinates", title: "GPS", sortable: true },
                {
                  accessor: "report_type",
                  title: "Report Type",
                  sortable: true,
                  render: (params) => <div>{params.report_type.name}</div>,
                },
                { accessor: "user.email", title: "Email", sortable: true },
                // { accessor: "", title: "Phone No.", sortable: true },
                {
                  accessor: "report_status",
                  title: "Status",
                  sortable: true,
                  render: (params) => <div>{params.report_status.name}</div>,
                },
                {
                  accessor: "id",
                  title: "Action",
                  titleClassName: "!text-center",
                  render: ({ id }) => (
                    <div>
                      <Link
                        to={`/reports/${id}`}
                        className="text-main2 hover:text-main1"
                      >
                        <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-main1">
                          <svg
                            className="mr-1.5 h-2 w-2 text-main2"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          View
                        </span>
                      </Link>
                    </div>
                  ),
                },
              ]}
              totalRecords={initialRecords.length}
              recordsPerPage={pageSize}
              page={page}
              onPageChange={(p) => setPage(p)}
              recordsPerPageOptions={PAGE_SIZES}
              onRecordsPerPageChange={setPageSize}
              sortStatus={sortStatus}
              onSortStatusChange={setSortStatus}
              minHeight={200}
              paginationText={({ from, to, totalRecords }) =>
                `Showing  ${from} to ${to} of ${totalRecords} entries`
              }
            />
          </div>
          {/* End of Data Tables */}
        </div>
      </div>
    </div>
  );
}

export default PublicReports;
