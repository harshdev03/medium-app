import { useState } from "react"
import type { SigninType } from "@harshchalwadi/medium-app"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { BACKEND_URL } from "@/lib/config"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { CornerUpLeft } from "lucide-react"

export default function SignInComp() {
  const navigate = useNavigate()
  const [signInReq, setSignInReq] = useState<SigninType>({
      email : "",
      password : ""
  })

  async function sendRequest() {
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, signInReq)
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
            <CardTitle>Sign In</CardTitle>
            <CardDescription className="flex gap-1">
              <p>Don&apos;t have an account?</p>
              <Link  to="/signup" className="hover:underline dark:hover:text-neutral-300 hover:text-neutral-700">Sign Up</Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={(e)=>{
                      setSignInReq({
                        ...signInReq,
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
                    setSignInReq({
                      ...signInReq,
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
              Login
            </Button>
          </CardFooter>
        </Card>
              </div>
        </div>
        </div>
  )
}
