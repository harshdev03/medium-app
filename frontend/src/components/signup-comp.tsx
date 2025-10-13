"use client"
import { useState } from "react"
import type { SignupType } from "@harshchalwadi/medium-app"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { BACKEND_URL } from "@/lib/config"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CornerUpLeft } from "lucide-react"

export default function SignUpComp() {
  const navigate = useNavigate()
  const [signUpReq, setSignUpReq] = useState<SignupType>({
      name : "",
      email : "",
      password : ""
  })

  async function sendRequest() {
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signUpReq)
      const jwt:string = response.data.token
      localStorage.setItem('token',jwt)
      navigate('/blogs')
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div>
              <div className='flex pl-4 pt-8 px-2 justify-start gap-2 cursor-pointer' onClick={()=> navigate('/')}>
                    <CornerUpLeft className='w-5 h-5'/>
              <div>back</div>
      </div>


    <div className="flex h-[90vh] px-4 sm:px-3 items-center w-full justify-center">
      <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription className="flex gap-1">
              <p>
                Already have an account?</p><Link to="/signin" className="hover:underline dark:hover:text-neutral-300 hover:text-neutral-700">Sign In</Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Name</Label>
                  <Input
                    id="name"
                    type="name"
                    placeholder="chris"
                    required
                    onChange={(e)=>{
                        setSignUpReq({
                          ...signUpReq,
                          name : e.target.value
                        })
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={(e)=>{
                      setSignUpReq({
                        ...signUpReq,
                        email : e.target.value
                      })
                    }}
                    />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required 
                  onChange={(e)=>{
                    setSignUpReq({
                      ...signUpReq,
                      password : e.target.value
                    })
                  }}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" onClick={sendRequest} className="w-full cursor-pointer">
              Create Account
            </Button>
          </CardFooter>
        </Card>
              </div>
        </div>
        </div>
  )
}
