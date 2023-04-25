import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import sortBy from 'lodash/sortBy';
import StatsDashboard from '../components/StatsDashboard';
import {AuthContext} from '../context/AuthContext'


function UserLandingPage() {

  const {user} = useContext(AuthContext)
  // const[currentUser, setCurrentUser] = useState({})
  // setCurrentUser(user)

    const[reports, setReports] = useState([])
    // fetch all user specific reports

    useEffect(() => {
      if (user && user.id && typeof user.id === 'number') {
        fetch(`/userreport/${user.id}`)
          .then(res => res.json())
          .then(data => setInitialRecords(data))
      }
    }, [user])

    
    

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
            item.report_status.name.toString().toLowerCase().includes(search.toLowerCase()) ||
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

    useEffect(() => {
      if (user && user.id && typeof user.id === 'number') {
        fetch(`/userreport/${user.id}`)
          .then(res => res.json())
          .then(data => setInitialRecords(data))
      }
    }, [user])
    // console.log(user.id)

  
    if (!user) {
      return <div>Loading...</div>;
    }  

 
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <img
              className="h-7"
              src={require('..//assets/images/user_dashboard.png')}
              alt="Company name"
            />
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            
            {/* Stats Section */}        
                
            <StatsDashboard records={recordsData}/>
            
            {/* End of Stats Section */}  

          {/* User Dashboard Content */}
          {/* Data Table */}
      <div className="mt-6 overflow-hidden rounded-lg bg-white shadow p-6  border  border-gray-300">
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
              title: "Reporter",
              sortable: true,
              render: (params) => (
                <div className="flex items-center w-max">
                  <div>{params.user.first_name + " " + params.user.surname}</div>
                </div>
              ),
            },
            { accessor: "description_summary", title: "Description", sortable: true },
            { accessor: "gps_coordinates", title: "GPS", sortable: true },
            {
              accessor: "report_type",
              title: "Report Type",
              sortable: true,
              render: (params) => (
                <div
                    className={`text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border ${
                      params.report_type.name === 'Red Flag'
                      ? 'bg-red-100 text-red-800 border-red-400'                      
                      : 'bg-blue-100 text-blue-800 border-blue-400'
                    }`}
                >
                  {params.report_type.name}
                  </div>
              ),
            },
            { accessor: "user.email", title: "Email", sortable: true },
            // { accessor: "", title: "Phone No.", sortable: true },
            {
              accessor: "report_status",
              title: "Status",
              sortable: true,
              render: (params) => (
                <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      params.report_status.name === 'Resolved'
                      ? 'bg-green-100 text-green-800'
                      : params.report_status.name === 'Under Investigation'
                      ? 'bg-yellow-100 text-yellow-800'                            
                      : params.report_status.name === 'Rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                    }`}
                >
                  {
                    params.report_status.name === 'Resolved'
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 mr-1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    : params.report_status.name === 'Under Investigation'
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 mr-1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>              
                    : params.report_status.name === 'Rejected'
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 mr-1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>                  
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 mr-1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>                  
                  }                  
                  {params.report_status.name}
                </span>
              ),
            },
            {
              accessor: "id",
              title: "Action",
              titleClassName: "!text-center",
              render: ({id}) => ( 
                <div>               
                  <Link to={`/userreportdetails/${id}`} className="text-main2 hover:text-main1">   
                  <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                    Edit
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
        </main>
        </div>
      </div>
    </>
  )
}

export default UserLandingPage