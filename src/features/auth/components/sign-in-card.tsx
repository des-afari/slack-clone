import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SignInFlow } from '../types'

interface SignInCardProps {
  setState: (state: SignInFlow) => void
}

const SignInCard = ({ setState } : SignInCardProps ) => {
  const [passwordViewable, setPasswordViewable] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  return (
    <div className='w-full'>
      <div className='mb-2'>
        <h1 className="font-black text-5xl text-center">Login</h1>
      </div>
      <div>
        <p className='text-sm text-muted-foreground text-center'>Use your email or another service to continue</p>
      </div>
      <div className='mt-6 space-y-5 px-0 pb-0'>
        <form className='space-y-3'>
          <Input
            disabled={false}
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            placeholder='Enter your email address'
            type="email"
            required
          />
          <div className='relative'>
            <Input
              disabled={false}
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              placeholder='Enter your password'
              type={passwordViewable ? 'text' : 'password'}
              required
            />
            <Button
              type='button'
              variant={'ghost'}
              size={'icon'}
              className='absolute top-0 right-0'
              onClick={() => setPasswordViewable(!passwordViewable)}
            >
              {passwordViewable ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </Button>
          </div>
          <Button
            type='submit'
            className='w-full'
            size={'lg'}
            disabled={false}
          >
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={'lg'}
            className='full relative w-full'
          >
            <FcGoogle  className='size-5 absolute top-2.5 left-2.5' />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={'lg'}
            className='full relative w-full'
          >
            <FaGithub className='size-5 absolute top-2.5 left-2.5' />
            Continue with Github
          </Button>
        </div>
        <p className='text-xs text-muted-foreground'>
          Don't have an account?
          <span
            onClick={() => setState('signUp')}
          className='text-sky-500 hover:underline cursor-pointer'> Sign up</span>
          </p>
      </div>
    </div>
  )
}

export default SignInCard