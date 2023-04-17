import React from 'react'

function PublicReports() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Intro Banner */}
      <div className="bg-secondary-light">
        <div className="mx-auto px-6 py-8 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-left">
            Ready to Speak Up?
            <br />
            <span className='text-main1'>Report all Corruption cases Today!</span>
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
      
      {/* End of Data Table */}

    </div>
  )
}

export default PublicReports