import React from 'react'

function ReportDetailsHeader({report, reportType, reportStatus, back_url}) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
        
        <div className="bg-white p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-sm font-medium text-gray-600">Report No: {report.id}</p>
                
                <div
                    className={` mt-3 text-2xl font-bold inline-flex items-center px-2.5 py-0.5 rounded border ${
                      reportType.name === 'Red Flag'
                      ? 'bg-red-100 text-red-800 border-red-400'                      
                      : 'bg-blue-100 text-blue-800 border-blue-400'
                    }`}
                >
                  {reportType.name}
                </div>
                
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0">
              <a
                href={back_url}
                className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                BACK
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          
            <div  className="px-6 py-5 text-center text-sm font-medium">
              <span className="text-gray-900">Date Created: </span> <span className="text-gray-600">{report.created_at}</span>
            </div>
            <div  className="px-6 py-5 text-center text-sm font-medium">
              <span className="text-gray-900">Last Updated: </span> <span className="text-gray-600">{report.updated_at}</span>
            </div>
            <div  className="px-6 py-3 text-center text-sm font-medium align-middle">
              
              <span
                    className={`text-xl font-medium inline-flex items-center rounded-full px-2.5 py-0.5 ${
                      reportStatus.name === 'Resolved'
                      ? 'bg-green-100 text-green-800'
                      : reportStatus.name === 'Under Investigation'
                      ? 'bg-yellow-100 text-yellow-800'                            
                      : reportStatus.name === 'Rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                    }`}
                >
                  {
                    reportStatus.name === 'Resolved'
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    : reportStatus.name === 'Under Investigation'
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>              
                    : reportStatus.name === 'Rejected'
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>                  
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>                  
                  }                  
                  {reportStatus.name}
                </span>
            </div>
         
        </div>
      </div>
  )
}

export default ReportDetailsHeader