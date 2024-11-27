import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Terms() {
  return (
    <>
      <Head>
        <title>VersaMinds - Terms and Conditions</title>
        <meta
          name="description"
          content="Read our Terms and Conditions before using VersaMinds."
        />
        <meta name="keywords" content="VersaMinds, Terms and Conditions, platform rules, guidelines, user agreement" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VersaMinds" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.codecloud.live/terms" />
        <meta property="og:title" content="VersaMinds - Terms and Conditions" />
        <meta property="og:description" content="Read our Terms and Conditions before using VersaMinds. Learn about our platform's rules and guidelines for users." />
        <meta property="og:url" content="https://www.codecloud.live/terms" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VersaMinds" />
      </Head>
      <Header />
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Terms and Conditions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to VersaMinds! Please carefully read these Terms and
              Conditions before using our platform. By accessing or using
              VersaMinds, you agree to be bound by these Terms and Conditions. If
              you do not agree with any part of these terms, please refrain from
              using our platform.
            </p>
          </div>
          <div className="max-w-6xl">
            <h3 className="mt-10 text-xl font-bold">
              1. Intellectual Property
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The content, features, and functionality of VersaMinds, including
              but not limited to text, graphics, images, logos, and code, are
              the property of VersaMinds and protected by international copyright
              and other intellectual property laws.
            </p>

            <h3 className="mt-10 text-xl font-bold">2. Use of Platform</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              You may use VersaMinds for lawful purposes and in accordance with
              these Terms and Conditions. You agree not to use VersaMinds in any
              way that could damage, disable, overburden, or impair the platform
              or interfere with any other party&apos;s use and enjoyment of
              VersaMinds.
            </p>

            <h3 className="mt-10 text-xl font-bold">3. User Accounts</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              You may be required to create an account on VersaMinds to access
              certain features. You are responsible for maintaining the
              confidentiality of your account credentials and agree not to
              disclose them to any third party. You are responsible for all
              activities that occur under your account.
            </p>

            <h3 className="mt-10 text-xl font-bold">4. User Content</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              VersaMinds may allow you to submit, post, or transmit content,
              including but not limited to text, images, and comments. By
              submitting such content, you grant VersaMinds a non-exclusive,
              royalty-free, worldwide, perpetual, and irrevocable license to
              use, reproduce, modify, adapt, publish, translate, distribute, and
              display the content in any media.
            </p>

            <h3 className="mt-10 text-xl font-bold">
              5. Prohibited Activities
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              You agree not to engage in any of the following prohibited
              activities while using VersaMinds:
            </p>
            <ul className="ml-8 mt-2 list-disc text-lg leading-8 text-gray-600">
              <li>Violating any applicable laws or regulations;</li>
              <li>Impersonating any person or entity;</li>
              <li>Harassing, threatening, or otherwise harming others;</li>
              <li>Uploading or transmitting viruses or malicious code;</li>
              <li>Interfering with or disrupting the platform;</li>
              <li>
                Engaging in any conduct that restricts or inhibits other users&apos;
                use and enjoyment of VersaMinds.
              </li>
            </ul>

            <h3 className="mt-10 text-xl font-bold">
              6. Governing Law and Jurisdiction
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of Belgium, without regard to its
              conflicts of law principles. Any dispute arising out of or
              relating to these Terms and Conditions shall be subject to the
              exclusive jurisdiction of the courts of Brussels, Belgium.
            </p>

            <h3 className="mt-10 text-xl font-bold">7. Changes to Terms</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              VersaMinds may update these Terms and Conditions from time to time.
              The most current version will be posted on this page. Your
              continued use of VersaMinds after any changes signify your
              acceptance of the updated Terms and Conditions.
            </p>

            <h3 className="mt-10 text-xl font-bold">8. Contact Us</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at{' '}
              <a
                className="hover:text-gray-900"
                href="mailto:lennert@versaminds.live"
              >
                lennert@versaminds.live
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
