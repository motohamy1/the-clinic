import ReturnToHome from '@/components/ui/ReturnToHome'
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button"
import Search from '@/components/Search'



const PhysiciansPlatform = () => {
  return (
    <main>

      {/* Header with a return to home button and a title */}
      <header>
        <div>
          <ReturnToHome />
        </div>
        <div className='flex justify-center'>
          <h1 className='inline-block text-center font-bold text-2xl 
                         text-primary bg-gradient-to-r from-[#FF7839] to-[#ff7839]
                         shadow-[0_4px_15px_rgba(255,120,57,0.6)]
                         px-6 py-2 transition-all rounded-2xl'>
            Physicians Platform
          </h1>
        </div>
      </header>

      {/* Three nav buttons to */}
      <nav className='flex items-center justify-center gap-50 mt-10'>
        <AnimatedShinyButton url="/docs/components/animated-shiny-button">
          Physicians
        </AnimatedShinyButton>
        <AnimatedShinyButton url="/docs/components/animated-shiny-button">
          Appointment
        </AnimatedShinyButton>
        <AnimatedShinyButton url="/docs/components/animated-shiny-button">
          Consultation
        </AnimatedShinyButton>
      </nav>
      <div>
        <Search 
          placeholder="Search for a physician"
        />
      </div>
    </main>
  )
}

export default PhysiciansPlatform