import React, { useState, useEffect } from "react";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { sortBy } from "lodash";
import Tippy from "@tippyjs/react";
import rowData from "./rowData";

function PublicReports() {
  // sample data
  const tableData = [
    {
      id: 1,
      date: "2023-04-05",
      report_type: "red-flag",
      report_title: "Traffic policeman demanding bribes",
      description:
        "For a long time, traffic police around the Nakuru round-about have been demanding bribes in order to cross into town.",
      gps_coordinates: "-0.355462, 48.454842",
      status: true,
    },
  ];
 

  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(
    sortBy(rowData, "firstName")
  );
  const [recordsData, setRecordsData] = useState(initialRecords);

  const [search, setSearch] = useState("");
  const [sortStatus, setSortStatus] = useState({
    columnAccessor: "firstName",
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
      return rowData.filter((item) => {
        return (
          item.firstName.toLowerCase().includes(search.toLowerCase()) ||
          item.company.toLowerCase().includes(search.toLowerCase()) ||
          item.age.toString().toLowerCase().includes(search.toLowerCase()) ||
          item.dob.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase()) ||
          item.phone.toLowerCase().includes(search.toLowerCase())
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
    <div className="min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
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
              href="/signup"
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
              accessor: "firstName",
              title: "Name",
              sortable: true,
              render: ({ firstName, lastName }) => (
                <div className="flex items-center w-max">
                  <div>{firstName + " " + lastName}</div>
                </div>
              ),
            },
            { accessor: "company", title: "Company", sortable: true },
            { accessor: "age", title: "Age", sortable: true },
            {
              accessor: "dob",
              title: "Start Date",
              sortable: true,
              render: ({ dob }) => <div>{formatDate(dob)}</div>,
            },
            { accessor: "email", title: "Email", sortable: true },
            { accessor: "phone", title: "Phone No.", sortable: true },
            {
              accessor: "status",
              title: "Status",
              sortable: true,
              render: () => (
                <span className={`badge bg-${randomColor()} `}>
                  {randomStatus()}
                </span>
              ),
            },
            {
              accessor: "action",
              title: "Action",
              titleClassName: "!text-center",
              render: () => (
                <div className="flex items-center w-max mx-auto">
                  <Tippy content="Delete">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <circle
                        opacity="0.5"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Tippy>
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
  );
}

export default PublicReports;
