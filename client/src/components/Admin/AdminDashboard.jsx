import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { sortBy } from 'lodash'; 
import logo from '../../assets/images/logo.png'

function AdminDashboard() {
    // sample data
  const tableData = [
    {
      id: 1,
      date: '2023-04-05',
      report_type: 'red-flag',
      report_title: 'Traffic policeman demanding bribes',
      description: 'For a long time, traffic police around the Nakuru round-about have been demanding bribes in order to cross into town.',
      gps_coordinates: '-0.355462, 48.454842',
      status: true      
    }
  ]
  const rowData = [
    {
        id: 1,
        firstName: 'Caroline',
        lastName: 'Jensen',
        geo: '23.806115, 164.677197',
        phone: '+1 (821) 447-3782',
        isActive: true,
        description: 'POLARAX',
    },
    {
        id: 2,
        firstName: 'Celeste',
        lastName: 'Grant',
        geo: '65.954483, 98.906478',
        phone: '+1 (838) 515-3408',
        isActive: false,
        description: 'MANGLO',
    },
    {
        id: 3,
        firstName: 'Tillman',
        lastName: 'Forbes', 
        geo: '-34.949388, -82.958111',
        phone: '+1 (969) 496-2892',
        isActive: false,
        description: 'APPLIDECK',
    },
    {
        id: 4,
        firstName: 'Daisy',
        lastName: 'Whitley', 
        geo: '-54.458809, -127.476556',
        phone: '+1 (861) 564-2877',
        isActive: true,
        description: 'VOLAX',
    },
    {
        id: 5,
        firstName: 'Weber',
        lastName: 'Bowman',
        geo: '54.501351, -167.47138',
        phone: '+1 (962) 466-3483',
        isActive: false,
        description: 'ORBAXTER',
    },
    {
        id: 6,
        firstName: 'Buckley',
        lastName: 'Townsend', 
        geo: '-2.681655, 3.528942',
        phone: '+1 (884) 595-2643',
        isActive: true,
        description: 'OPPORTECH',
    },
    {
        id: 7,
        firstName: 'Latoya',
        lastName: 'Bradshaw',
        geo: '36.026423, 130.412198',
        phone: '+1 (906) 474-3155',
        isActive: true,
        description: 'GORGANIC',
    },
    {
        id: 8,
        firstName: 'Kate',
        lastName: 'Lindsay',
        geo: '42.464724, -12.948403',
        phone: '+1 (930) 546-2952',
        isActive: true,
        description: 'AVIT',
    },
    {
        id: 9,
        firstName: 'Marva',
        lastName: 'Sandoval',
        geo: '-52.206169, 74.19452', 
        phone: '+1 (927) 566-3600',
        isActive: false,
        description: 'QUILCH',
    },
    {
        id: 10,
        firstName: 'Decker',
        lastName: 'Russell', 
        geo: '-41.550295, -146.598075',
        phone: '+1 (846) 535-3283',
        isActive: false,
        description: 'MEMORA',
    },
    {
        id: 11,
        firstName: 'Odom',
        lastName: 'Mills', 
        geo: '-56.061694, -130.238523',
        phone: '+1 (995) 525-3402',
        isActive: true,
        description: 'ZORROMOP',
    },
    {
        id: 12,
        firstName: 'Sellers',
        lastName: 'Walters', 
        geo: '11.732587, 96.118099',
        phone: '+1 (830) 430-3157',
        isActive: true,
        description: 'ORBOID',
    },
    {
        id: 13,
        firstName: 'Wendi',
        lastName: 'Powers', 
        geo: '-78.159578, -9.835103',
        phone: '+1 (863) 457-2088',
        isActive: true,
        description: 'SNORUS',
    },
    {
        id: 14,
        firstName: 'Sophie',
        lastName: 'Horn', 
        geo: '65.484087, 137.413998',
        phone: '+1 (885) 418-3948',
        isActive: true,
        
        description: 'XTH',
    },
    {
        id: 15,
        firstName: 'Levine',
        lastName: 'Rodriquez', 
        geo: '-63.185586, 117.327808',
        phone: '+1 (999) 565-3239',
        isActive: true,
          
        description: 'COMTRACT',
    },
    {
        id: 16,
        firstName: 'Little',
        lastName: 'Hatfield', 
        geo: '47.480837, 6.085909', 
        phone: '+1 (812) 488-3011',
        isActive: false,
        description: 'ZIDANT',
    },
    {
        id: 17,
        firstName: 'Larson',
        lastName: 'Kelly', 
        geo: '-71.766732, 150.854345',
        phone: '+1 (892) 484-2162',
        isActive: true,
      
        description: 'SUREPLEX',
    },
    {
        id: 18,
        firstName: 'Kendra',
        lastName: 'Molina', 
        geo: '50.765816, -117.106499',
        phone: '+1 (920) 528-3330',
        isActive: false,
          
        description: 'DANJA',
    },
    {
        id: 19,
        firstName: 'Ebony',
        lastName: 'Livingston', 
        geo: '65.271256, -83.064729',
        phone: '+1 (970) 591-3039',
        isActive: false,
        
        description: 'EURON',
    },
    {
        id: 20,
        firstName: 'Kaufman',
        lastName: 'Rush', 
        geo: '41.513153, 54.821641',
        phone: '+1 (924) 463-2934',
        isActive: false,
        
        description: 'ILLUMITY',
    },
    {
        id: 21,
        firstName: 'Frank',
        lastName: 'Hays', 
        geo: '63.314988, -138.771323',
        phone: '+1 (930) 577-2670',
        isActive: false,
    
        description: 'SYBIXTEX',
    },
    {
        id: 22,
        firstName: 'Carmella',
        lastName: 'Mccarty', 
        geo: '9.198597, -138.809971', 
        phone: '+1 (876) 456-3218',
        isActive: true,
        
        description: 'ZEDALIS',
    },
    {
        id: 23,
        firstName: 'Massey',
        lastName: 'Owen', 
        geo: '-74.648318, 99.620699',
        phone: '+1 (917) 567-3786',
        isActive: false,
      
        description: 'DYNO',
    },
    {
        id: 24,
        firstName: 'Lottie',
        lastName: 'Lowery', 
        geo: '54.811546, -20.996515',
        phone: '+1 (912) 539-3498',
        isActive: true,
      
        description: 'MULTIFLEX',
    },
    {
        id: 25,
        firstName: 'Addie',
        lastName: 'Luna', 
        geo: '-12.762766, -39.924497',
        phone: '+1 (962) 537-2981',
        isActive: true,
        description: 'PHARMACON',
    },
  ];

  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'firstName'));
  const [recordsData, setRecordsData] = useState(initialRecords);

  const [search, setSearch] = useState('');
  const [sortStatus, setSortStatus] = useState({
      columnAccessor: 'firstName',
      direction: 'asc',
  });

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecordsData([...initialRecords.slice(from, to)]);
  }, [page, pageSize, initialRecords]);

  // useEffect(() => {
  //     setInitialRecords(() => {
  //         return rowData.filter((item) => {
  //             return (
  //                 item.firstName.toLowerCase().includes(search.toLowerCase()) ||
  //                 item.description.toLowerCase().includes(search.toLowerCase()) ||
  //                 item.report_type.toLowerCase().includes(search.toLowerCase()) ||
  //                 item.phone.toLowerCase().includes(search.toLowerCase()) ||
  //                 item.address.toLowerCase().includes(search.toLowerCase())
  //             );
  //         });
  //     });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [search]);

  useEffect(() => {
      const data = sortBy(initialRecords, sortStatus.columnAccessor);
      setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
      setPage(1);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortStatus]);

  const formatDate = (date) => {
    if (date) {
        const dt = new Date(date);
        const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
        const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
        return day + '/' + month + '/' + dt.getFullYear();
    }
    return '';
  };

  const randomColor = () => {
      const color = ['bg-orange-400', 'bg-lime-400'];
      const random = Math.floor(Math.random() * color.length);
      return color[random];
  };

  const randomReportType = () => {
      const color = ['red-flag', 'intervention'];
      const random = Math.floor(Math.random() * color.length);
      return color[random];
  };

  const randomStatus = () => {
      const status = ['REJECTED', 'UNDER INVESTIGATION', 'SOLVED'];
      const random = Math.floor(Math.random() * status.length);
      return status[random];
  };

  return (
    <div className='p-8 m-4 min-h-screen mx-auto px-4 sm:px-6 lg:px-8'>
      <div className=''>
          <div className='p-8 m-6 mb-0 w-96'>
            <img src={logo} alt="" />
          </div>
          <div className='text-center p-4 m-6 text-main1 text-3xl font-bold font-poppins'>
            <h1>Admin Dashboard</h1>
          </div>
        </div> 

        <div className="min-h-screen mx-auto px-4 sm:px-6 lg:px-8"> 

            {/* Data Table */}
            <div className="sm:flex sm:items-center ">
                <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900">Reports</h1>
                <p className="mt-2 text-sm text-gray-700">
                    Here's a list of all red-flags and interventions posted on our platform
                </p>
                </div>
                <div className="ltr:ml-auto rtl:mr-auto">
                    <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                
            </div>
            <div className="min-w-full divide-y divide-gray-300 mt-6">
                <DataTable
                    className="whitespace-nowrap table-hover"
                    records={recordsData}
                    columns={[
                        {
                            accessor: 'firstName',
                            title: 'Name',
                            sortable: true,
                            render: ({ firstName, lastName}) => (
                                <div className="flex items-center w-max">
                                    <div>{firstName + ' ' + lastName}</div>
                                </div>
                            ),
                        },
                        { 
                            accessor: 'report_type', 
                            title: 'Report Type', 
                            sortable: true, 
                            render: () => <span className={`badge bg-${randomColor()} `}>{randomReportType()}</span>,
                        },
                        { accessor: 'description', title: 'Description', sortable: true },
                        { accessor: 'geo', title: 'Location', sortable: true },
                        {
                            accessor: 'status',
                            title: 'Status',
                            sortable: true,
                            render: () => <span className={`badge bg-${randomColor()} `}>{randomStatus()}</span>,
                        },
                        {
                            accessor: 'action',
                            title: 'Action',
                            titleClassName: '!text-center',
                            render: () => (
                                <div className="flex items-center w-max mx-auto">
                                     <button
                                        type="button"
                                        className="inline-flex items-center rounded border border-transparent bg-main1 ml-2 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-main2 focus:outline-none focus:ring-2 focus:ring-main1 focus:ring-offset-2"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded border border-transparent bg-main4 ml-2 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-main4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    > 
                                       Edit
                                    </button>
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
                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>
            {/* End of Data Table */}

        </div>
    </div>  
  )
}

export default AdminDashboard