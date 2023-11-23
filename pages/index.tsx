import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import { Terminal } from "lucide-react"
import {Button} from "@/components/ui/button";
import ParticleComponent from "@/components/ParticleComponent";
import ParticleImage from "@/components/LogoParticleEffect";
import ParticleSliderComponent from "@/components/ParticleSlider";




export default function Home() {

  const redirectToDocs = () => {
    window.open('https://ui.shadcn.com/docs', '_blank')
  }

  return (
    <>
    <div className="h-full w-max"><ParticleSliderComponent logoSrc="/op.png"/></div>
        
    </>
  )
}
