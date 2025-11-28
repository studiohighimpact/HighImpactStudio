import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";
 
export default function InteractiveVisual() {
  return (
    <section className="bg-black py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-white/10 rounded-xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">IA & Robótica</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-none tracking-tight">
                IMPULSA <br/>
                TU <br/>
                PRESENCIA <br/>
                DIGITAL
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
                Desarrollo, automatización y contenido estratégico que acelera resultados medibles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton variant="primary" className="w-full sm:w-auto gap-2 group" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                  Generar Impacto 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </CustomButton>
                
                <CustomButton variant="secondary" className="w-full sm:w-auto gap-2" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                  Ver Servicios
                </CustomButton>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 relative min-h-[300px] md:min-h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
