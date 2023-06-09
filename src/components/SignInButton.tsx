'use client'

import { FC, useState } from 'react'
import Button from '@/ui/Button'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn()
    } catch (error) {
      toast.error('Please try again later')
    }
  }

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  )
}

export default SignInButton
