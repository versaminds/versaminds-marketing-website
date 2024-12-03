import {
  BuildingOffice2Icon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import { FaLinkedin } from 'react-icons/fa'

export default function ContactPage() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [subject, setSubject] = useState('')
  // const [message, setMessage] = useState('')

  //   Form validation state
  // const [errors, setErrors] = useState({})

  //   Setting button text on form submission
  // const handleValidation = () => {
  //   let tempErrors = {}
  //   let isValid = true

  //   if (firstName.length <= 0) {
  //     tempErrors['firstName'] = true
  //     isValid = false
  //   }
  //   if (lastName.length <= 0) {
  //     tempErrors['lastName'] = true
  //     isValid = false
  //   }
  //   if (email.length <= 0) {
  //     tempErrors['email'] = true
  //     isValid = false
  //   }
  //   if (subject.length <= 0) {
  //     tempErrors['subject'] = true
  //     isValid = false
  //   }
  //   if (message.length <= 0) {
  //     tempErrors['message'] = true
  //     isValid = false
  //   }

  //   setErrors({ ...tempErrors })
  //   console.log('errors', errors)
  //   return isValid
  // }

  // const resetFormFields = () => {
  //   setFirstName('')
  //   setLastName('')
  //   setEmail('')
  //   setMessage('')
  //   setSubject('')
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   let isValidForm = handleValidation()

  //   if (isValidForm) {
  //     const res = await fetch('/api/sendgrid', {
  //       body: JSON.stringify({
  //         email: email,
  //         firstName: firstName,
  //         lastName: lastName,
  //         subject: subject,
  //         message: message,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       method: 'POST',
  //     })

  //     const { error } = await res.json()
  //     if (error) {
  //       console.log(error)
  //       resetFormFields()
  //       return
  //     }
  //     resetFormFields()
  //   }
  //   console.log(firstName, lastName, email, subject, message)
  // }
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-full">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Neem contact met ons op
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Heeft u een vraag of wilt u een project bespreken? Neem gerust
              contact met ons op. We helpen u graag verder.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Brussel, België
                </dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:lennert@versaminds.live"
                  >
                    lennert@versaminds.live
                  </a>
                </dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900 hover:underline"
                    href="https://www.linkedin.com/in/lennert-mertens/"
                    target='_blank'
                    rel='noreferrer'
                  >
                    Lennert Mertens
                  </a>
                </dd>
              </div>

            </dl>
          </div>
        </div>
        {/* <form
          onSubmit={handleSubmit}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Voornaam{' '}
                  {errors?.firstName && (
                    <span className="text-xs text-red-500">
                      Mag niet leeg zijn.
                    </span>
                  )}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Achternaam{' '}
                  {errors?.lastName && (
                    <span className="text-xs text-red-500">
                      Mag niet leeg zijn.
                    </span>
                  )}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email{' '}
                  {errors?.email && (
                    <span className="text-xs text-red-500">
                      Email mag niet leeg zijn.
                    </span>
                  )}
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Onderwerp{' '}
                  {errors?.subject && (
                    <span className="text-xs text-red-500">
                      Mag niet leeg zijn.
                    </span>
                  )}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Bericht{' '}
                  {errors?.message && (
                    <span className="text-xs text-red-500">
                      Bericht mag niet leeg zijn.
                    </span>
                  )}
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Verstuur bericht
              </button>
            </div>
          </div>
        </form> */}
      </div>
    </div>
  )
}
