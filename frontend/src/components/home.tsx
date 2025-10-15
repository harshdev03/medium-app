import { InkMorphText } from "@/components/spectrumui/ink-morph"
import { AnimatedThemeTogglerDemo } from "@/components/mode-toggle"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import { Arrow } from "@/lib/arrow"
const Home = () => {
      const navigate = useNavigate()
  return (
   <div className="flex flex-col w-full scroll-smooth">
    <div>
        <div className="flex justify-end pt-2 pr-8"><AnimatedThemeTogglerDemo/></div>
    </div>
    <div className="max-w-4xl  mx-auto w-full">
        <div className="flex h-screen flex-col  justify-center items-center">
      <div className="flex pl-20 sm:pl-1">
            <Arrow/>
      </div>
            <div className="text-6xl mb-2"><InkMorphText
            key={0}
            text="Medium"
            intensityFrom={0.28}
            intensityTo={0.002}
            settleMs={2000}
            colorStart="#aaa"
            colorEnd="#444"
      /></div>
      <div className="font-medium px-2 sm:px-4 text-balance text-center text-muted-foreground text-lg mb-4">Built small, meant to hold what you write and remember.</div>


      <div className="flex w-full flex-row gap-3  justify-center">
            <div>
                  <div className="cursor-pointer">
                        <Button variant="outline" className="cursor-pointer" onClick={()=> navigate('/signup')}>Sign up</Button>
                  </div>
            </div>
            <div>
                  <div>
                        <Button variant="outline" className="cursor-pointer" onClick={()=> navigate("/signin")}>Sign In</Button>
                  </div>
            </div>
      </div>
        </div>
    </div>
   </div>
  )
}

export default Home




