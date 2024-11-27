import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>VersaMinds - Privacy Policy</title>
        <meta
          name="description"
          content="Learn how VersaMinds protects your privacy."
        />
        <meta
          name="keywords"
          content="VersaMinds, Privacy Policy, personal information, data security, user choices, children's privacy"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VersaMinds" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.codecloud.live/privacy" />
        <meta property="og:title" content="VersaMinds - Privacy Policy" />
        <meta
          property="og:description"
          content="Learn how VersaMinds protects your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform."
        />
        {/* <meta property="og:image" content="https://www.codecloud.live/images/og-image.jpg" /> */}
        <meta property="og:url" content="https://www.codecloud.live/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VersaMinds" />
      </Head>
      <Header />
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Privacy Policy
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Thank you for visiting VersaMinds. This Privacy Policy outlines how
              we collect, use, and protect your personal information when you
              use our platform. By accessing or using VersaMinds, you consent to
              the practices described in this Privacy Policy.
            </p>
          </div>
          <div className="max-w-6xl">
            <h3 className="mt-10 text-xl font-bold">
              1. Information We Collect
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              <span className="font-bold">1.1. Personal Information:</span> When
              you create an account on VersaMinds, we may collect personal
              information such as your name, email address, and other
              information you provide during the registration process.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              <span className="font-bold">1.2. Communication Data:</span> We may
              collect information related to your interactions with VersaMinds,
              including messages, chat history, and feedback you provide.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              <span className="font-bold">1.3. Log Data:</span> When you use
              VersaMinds, we may automatically collect certain information, such
              as your IP address, browser type, device information, and pages
              visited.
            </p>

            <h3 className="mt-10 text-xl font-bold">
              2. How We Use Your Information
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              <span className="font-bold">
                2.1. Provide and Improve Services:
              </span>{' '}
              We use your information to deliver and enhance our platform&apos;s
              functionality, features, and user experience.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              <span className="font-bold">2.2. Communicate with You:</span> We
              may use your contact information to send you service-related
              updates, announcements, and administrative messages.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              <span className="font-bold">2.3. Personalization:</span> We may
              use your information to personalize your experience on VersaMinds,
              including providing relevant content and suggestions.
            </p>

            <h3 className="mt-10 text-xl font-bold">
              3. How We Share Your Information
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              <span className="font-bold">
                3.1. Third-Party Service Providers:
              </span>{' '}
              We may share your information with trusted third-party service
              providers who assist us in delivering and improving VersaMinds.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              <span className="font-bold">3.2. Legal Requirements:</span> We may
              disclose your information if required by law or in response to a
              valid legal request.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              <span className="font-bold">3.3. Business Transfers:</span> In the
              event of a merger, acquisition, or sale of all or part of
              VersaMinds, your information may be transferred to the new entity.
            </p>

            <h3 className="mt-10 text-xl font-bold">4. Data Security</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We take reasonable measures to protect your personal information
              from unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Despite our efforts, no method of transmission over the internet
              or electronic storage is entirely secure. We cannot guarantee the
              absolute security of your information.
            </p>

            <h3 className="mt-10 text-xl font-bold">5. Your Choices</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              <span className="font-bold">
                5.1. Access, Correct, or Delete:
              </span>{' '}
              You can access, correct, or delete your personal information by
              logging into your VersaMinds account.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              <span className="font-bold">5.2. Opt-out of Emails:</span> You may
              opt-out of receiving promotional emails from us by following the
              unsubscribe instructions provided in the email.
            </p>

            <h3 className="mt-10 text-xl font-bold">6. Children&apos;s Privacy</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              VersaMinds is not intended for use by individuals under the age of
              13. We do not knowingly collect personal information from children
              under 13. If you believe we have inadvertently collected
              information from a child, please contact us immediately.
            </p>

            <h3 className="mt-10 text-xl font-bold">
              7. Changes to this Privacy Policy
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page.
            </p>

    {/* Cookie section */}
            <h3 className="mt-10 text-xl font-bold" id='cookies'>8. Cookies</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              <span className="font-bold">8.1. What are Cookies:</span> Cookies
              are small text files that are stored on your device (computer,
              tablet, or mobile) when you visit our website. They help enhance
              your browsing experience by remembering your preferences and
              actions.
            </p>

            <p className="mt-2 text-lg leading-8 text-gray-600">
              <span className="font-bold">8.2. How We Use Cookies:</span> We use
              cookies for various purposes, including essential functions,
              analytics, personalization, and marketing. By using our website,
              you consent to the use of cookies as explained in our Cookies
              Policy.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              <span className="font-bold">8.3. Your Cookie Choices:</span> You
              can control and manage cookies through your browser settings. You
              may choose to accept or decline cookies or set your browser to
              notify you when a cookie is being sent. However, please note that
              some website features may not work properly if cookies are
              disabled.
            </p>

            <h3 className="mt-10 text-xl font-bold">9. Third-Party Cookies</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We may also allow third-party service providers to place cookies
              on our site to analyze user behavior and serve targeted ads.
              Third-party cookies are subject to the privacy policies of those
              providers.
            </p>
            <h3 className="mt-10 text-xl font-bold">Contact Us</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              If you have any questions or concerns about our Cookies and
              Privacy Policy, please contact us at{' '}
              <a
                className="hover:text-gray-900"
                href="mailto:lennert@codecloud.live"
              >
                lennert@codecloud.live
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
