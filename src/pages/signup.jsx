import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { useState } from 'react'

export default function Register() {
  const [message, setMessage] = useState(null)
  const [registered, setRegistered] = useState(false)
  const subscribe = async (e) => {
    e.preventDefault()
    const { firstName, lastName, email } = e.target.elements
    console.log(firstName.value, lastName.value, email.value)
    const res = await fetch(`/api/signup`, {
      body: JSON.stringify({
        email: email.value,
        tags: ['beta'],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setMessage(error)
      return
    }
    setRegistered(true)
    setMessage('You are now subscribed to the newsletter.')
  }
  return (
    <>
      <Head>
        <title>Sign Up - VersaMinds</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          {!registered ? (
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign up for VersaMinds Beta
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="https://beta.codecloud.live"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>) : 
          (
            <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Successfully registered!
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              You will receive an invitation to join our beta soon.
            </p>
          </div>
          )
          
        }
        </div>
        {!registered && (
          <form
            onSubmit={subscribe}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
          >
            <TextField
              label="First name"
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
            />
            <TextField
              label="Last name"
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
            />
            <TextField
              className="col-span-full"
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <div className="col-span-full">
              <Button
                type="submit"
                variant="solid"
                color="main"
                className="w-full"
              >
                <span>
                  Sign up <span aria-hidden="true">&rarr;</span>
                </span>
              </Button>
            </div>
          </form>
        )}
      </AuthLayout>
    </>
  )
}
