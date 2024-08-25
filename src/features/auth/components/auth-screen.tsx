"use client"

import { useState } from "react"
import { SignInFlow } from "../types"
import SignInCard from "./sign-in-card"
import SignUpCard from "./sign-up-card"

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>('signIn')
  return (
    <div className="max-w-md mx-auto mt-16 mb-32 px-3">
      {state === 'signIn' ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
    </div>      
  )
}

export default AuthScreen