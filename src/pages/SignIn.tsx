import { FormEvent, useState } from 'react'
import axios from 'axios'

import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { Heading } from '../components/Heading'
import { TextInput } from '../components/TextInput'
import { Text } from '../components/Text'
import { Logo } from '../Logo'

import { Envelope, Lock } from 'phosphor-react'

export function SignIn() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'lucas@gmail.com',
      password: '15h27%'
    })

    setIsUserLoggedIn(true)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Sign in or create an account
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        {isUserLoggedIn && <Text>You're logged in!</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Your password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Remember for 30 days
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Enter on website
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Forgot password
          </a>
        </Text>

        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Don't have an account? Sign up for free
          </a>
        </Text>
      </footer>
    </div>
  )
}
