import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputBox from './InputBox'
import type { SignupType } from '@harshchalwadi/medium-app'
import axios from 'axios'
import { BACKEND_URL } from "../config"
import {
  errorSigninNotify,
  errorSignupNotify,
  serverWarningNotify,
  succesSignupNotify,
  sucessSigninNotify
} from '../types/use-toast'

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate()
  const [postInputs, setPostInputs] = useState<SignupType>({
    name: "",
    email: "",
    password: ""
  })

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      )
      const jwt: string = response.data.token
      localStorage.setItem("token", jwt)
      navigate('/blogs')
      if (type === "signup") {
        succesSignupNotify()
      } else {
        sucessSigninNotify()
      }
    } catch (e: any) {
      if (e.response?.status === 500) {
        serverWarningNotify()
      } else if (type === "signup") {
        errorSignupNotify()
      } else {
        errorSigninNotify()
      }
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 bg-white ">
      <div className="w-full max-w-md space-y-6">
        <div className="text-2xl sm:text-3xl font-bold text-gray-900 ">
          {type === "signup" ? "Create an account" : "Welcome back"}
        </div>

        <div className="text-sm sm:text-base font-light text-slate-500">
          {type === "signin" ? (
            <>Don't have an account?{" "}
              <Link to="/signup" className="text-slate-500 underline">
                Sign up
              </Link>
            </>
          ) : (
            <>Already have an account?{" "}
              <Link to="/signin" className="text-slate-500 underline">
                Sign in
              </Link>
            </>
          )}
        </div>

        <div className="space-y-4">
          {type === "signup" && (
            <InputBox
              label="Name"
              type="text"
              placeholder="harsh chalwadi"
              onChange={(e) =>
                setPostInputs({ ...postInputs, name: e.target.value })
              }
            />
          )}
          <InputBox
            label="Email"
            type="email"
            placeholder="harsh@gmail.com"
            onChange={(e) =>
              setPostInputs({ ...postInputs, email: e.target.value })
            }
          />
          <InputBox
            label="Password"
            type="password"
            placeholder="harsh@123"
            onChange={(e) =>
              setPostInputs({ ...postInputs, password: e.target.value })
            }
          />

          <button
            type="button"
            onClick={sendRequest}
            className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
