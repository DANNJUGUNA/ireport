import React, { useState, useEffect, useRef}from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReportDetailsHeader from '../components/ReportDetailsHeader';


function AdminReportDetails({ match }) {
  const back_url = "/admindashboard"

  const { reportId }  = useParams()

  const [report, setReport] = useState({});
  
  const[reportStatus, setReportStatus] = useState([])
  const[reportType, setReportType] = useState([])
  const[user, SetUser] = useState([])

  const shouldLog = useRef(true)
  useEffect(() => {    
    if(shouldLog.current) {
      shouldLog.current = false
      fetch(`/reports/${reportId}`)
      .then(r => r.json())
      .then((data) => { setReport(data); setReportStatus(data.report_status); setReportType(data.report_type); SetUser(data.user) })
    }
  }, [reportId])

   // Success Message function
   const showMessage = (msg = '', type = 'success') => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        // customClass: { container: 'toast' },
    });
    toast.fire({
        icon: type,
        title: msg,
        padding: '10px 20px',
    });
  };

  const [updateFormData, setUpdateFormData] = useState({});  

  function handleUpdateChange(e) {
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value,
    });
  }

  console.log(updateFormData)
  const [reportStatuses, setReportStatuses] = useState([])
  
  // fetch all Report Statuses
  useEffect(() => {
    if(reportStatus && reportStatus.id && typeof reportStatus.id === 'number') {
    fetch('/report_statuses')
    .then(r => r.json())
    .then((data) => {
      const filteredData = data.filter((name) => name.id > reportStatus.id);
      setReportStatuses(filteredData);
    })
  }
    
  }, [reportStatus])
  

  // UPDATE functionality
  function handleSubmitUpdate(e) {
    fetch(`/reports/${reportId}`, {
      method: "PATCH",
      headers: {
          "content-type": "application/json",
          "accept": "application/json"
      },
      body: JSON.stringify(updateFormData)
    })
    .then(resp => {
      if (resp.ok) {
        resp.json()
        .then((data) => {
          setReportStatus(data.report_status)
          showMessage('Report has been updated successfully.');
          
        })
      }
      else {
        resp.json()
        .then(errors => showMessage(errors.message, 'error'))

      }
  })
    showMessage('Report has been updated successfully.');
   
  }


  // =======> Map <========

  if (!report || !report.gps_coordinates) {
    console.log('Error: report or report.gps_coordinates is undefined');
    return;
  }
  
  const gpsCoordinates = report.gps_coordinates.split(',').map(coord => Number(coord.trim()));
  console.log(gpsCoordinates);

  // =======> Map <========

    // Add a check to see if report exists
    if (!reportStatus) {
      return <div>Loading.....</div>;
    }

  return (
    <>
    <div className="min-h-full bg-gray-100 py-6">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <ReportDetailsHeader report={report} reportType={reportType} reportStatus={reportStatus} back_url={back_url}/>
      
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
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Reported By</dt>
                        <dd className="mt-1 text-sm text-gray-900">{user.first_name} {user.surname}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                        <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
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
                      <div className="map">
                        <MapContainer center={gpsCoordinates} zoom={13} scrollWheelZoom={false}>
                           <TileLayer
                             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                           />
                           <Marker position={gpsCoordinates}>
                             <Popup>
                              {report.location_name}
                             </Popup>
                           </Marker>
                         </MapContainer>
                       </div>  

                    </div>
                  </div>
                  
                </div>
              </section>
            </div>

              {/*ADMIN USER ACTION SECTION  */}
            <section aria-labelledby="user-actions" className="lg:col-span-1 lg:col-start-3">
              <form>
                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
              {reportStatus.id < 3 ? (
                <div>
                    <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                      Update Status:
                    </h2>

                    {/* Form for updating report status */}
                    <div className="mt-6 flow-root">
                      <div className="sm:col-span-3">
                        <label htmlFor="report-status" className="block text-sm font-medium text-gray-700">
                          Report Status
                        </label>
                        <div className="mt-1">
                          <select
                            id="report_status_id"
                            name="report_status_id"
                            autoComplete="status-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-main2 focus:ring-main2 sm:text-sm"
                            onChange={handleUpdateChange}
                            // defaultValue={reportStatuses.id}
                          >
                            <option>Select Status Update</option>
                            {reportStatuses.map((type) => (
                              <option key={type.id} value={type.id}>{type.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    {/* Button for submitting the update */}
                    <div className="justify-stretch mt-3 flex flex-col">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-success px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-success-300 focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2"
                        onClick={handleSubmitUpdate}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  // If reportStatus.id <= 3, show "end"
                  <div className="justify-stretch mt-3 flex flex-col">
                  <button type="button" class="inline-flex items-center justify-center rounded-md  border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
                    CASE CLOSED
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 ml-2 -mr-1" fill="currentColor"><path d="M318.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-120 120c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l4-4L325.4 293.4l-4 4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l120-120c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0l-4 4L330.6 74.6l4-4c12.5-12.5 12.5-32.8 0-45.3l-16-16zm-152 288c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l48 48c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-1.4-1.4L272 285.3 226.7 240 168 298.7l-1.4-1.4z"/></svg>
                    
                </button>
                </div>
                )}
                </div>

                
              </form>
            </section>
          </div>

    </div>
    </div>
    </>
  )
}

export default AdminReportDetails