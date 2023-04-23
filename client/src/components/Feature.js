import { GlobeAltIcon, ScaleIcon, RocketLaunchIcon, EnvelopeIcon,LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Open and transparent to everyone',
    description:
      'An open and transparent justice system is essential for ensuring fairness, accountability, and trust. Everyone should have equal access to justice and due process.',
    icon: GlobeAltIcon,
  },
  {
    name: 'All cases are justly charged',
    description:
      'The just application of laws and due process in a fair and impartial judicial system increases the likelihood that cases will be justly charged.',
    icon: ScaleIcon,
  },
  {
    name: 'Cases are posted instantly',
    description:
      'Posting cases instantly can compromise the integrity of the justice system, violate privacy laws, and pose a risk to individuals safety. A thorough and careful evaluation of each case is necessary before sharing information with the public.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Email notification',
    description:
      'Instant email notification after a legal case status change can be useful but should be secure, comply with privacy laws, and optional.',
    icon: EnvelopeIcon,
  },
]

export default function Feature() {
  return (
    <div className="bg-white py-1 mt-0 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Report Red flags and Interventions Faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to report corruption
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't let corruption go unchallenged. 
            Speak up and report it to protect the integrity of our society.
            Your actions can make a difference in creating a fairer and more just world for all. 
            Take a stand against corruption today!
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-2xl sm:mt-20 lg:mt-8 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
