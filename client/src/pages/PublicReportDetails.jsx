import React, { useState, useEffect, useRef}from 'react'
import { useParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReportDetailsHeader from '../components/ReportDetailsHeader';



function PublicReportDetails() {
  const back_url = "/reports"

  const { reportId }  = useParams()

  const[report, setReport] = useState([])
  const[reportStatus, setReportStatus] = useState([])
  const[reportType, setReportType] = useState([]) 
  const[user, SetUser] = useState([])

  const shouldLog = useRef(true)
  useEffect(() => {    
    if(shouldLog.current) {
      shouldLog.current = false
      fetch(`/reports/${reportId}`)
      .then(r => r.json())
      .then((data) => {setReport(data); setReportStatus(data.report_status); setReportType(data.report_type); SetUser(data.user) })
    }
  }, [reportId])

  // =======> Map <========

  if (!report || !report.gps_coordinates) {
    console.log('Error: report or report.gps_coordinates is undefined');
    return;
  }
  
  const gpsCoordinates = report.gps_coordinates.split(',').map(coord => Number(coord.trim()));
  console.log(gpsCoordinates);

  // =======> Map <========

  return (
    <>
    <div className="min-h-full bg-gray-100 py-6">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ReportDetailsHeader report={report} reportType={reportType} reportStatus={reportStatus} back_url={back_url}/>
      {/* 2-Column Section */}
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-3 lg:col-start-1">
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

              
            
          </div>

    </div>
    </div>
    </>
  )
}

export default PublicReportDetails