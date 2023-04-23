import Feature from "./Feature";
import Testimonials from "./Testimonials";
import About from "./About";

export default function Homepage() {
  return (
    <>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pt-5 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-20 lg:pb-40 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <img
                className="h-11"
                src="https://bit.ly/3oakcnw"
                alt="iReporter"
              />
              <h1 className="mt-12 text-4xl font-medium font-body tracking-tight text-bodyText1 sm:mt-10 sm:text-6xl">
                iReporter the place to stop corruption
              </h1>
              {/* <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              to stop corruption
            </h1> */}

              <p className="mt-3 text-lg leading-8 text-gray-600">
              Report to hold individuals accountable,
               prevent harm, protect communities, and create a fair society. 
              It's a moral obligation and civic duty for a better future.
              </p>
              <div className="mt-5 flex items-center gap-x-6">
                <a
                  href="/login"
                  className="rounded-md bg-main4 px-3.5 py-1.5 text-base font-semibold leading-7 text-bodyText1 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Report now
                </a>
                <a
                  href="/reports"
                  className="rounded-md bg-main1 px-3.5 py-1.5 text-base font-semibold leading-7 text-main4 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  View reports <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className=" w-full mt-3 bg-main1 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-[70%]"
              src="https://bit.ly/3mBgOSt"
              alt=""
            />
          </div>
        </div>
      </div>
      <Feature />
      <Testimonials />
    </>
  );
}
