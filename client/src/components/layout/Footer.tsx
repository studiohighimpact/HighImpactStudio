export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white flex items-center justify-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dwspyodrs/image/upload/v1764304700/Disen%CC%83o_sin_ti%CC%81tulo_hrrkje.png"
                alt="High Impact Studio logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-heading font-bold tracking-tighter">
              HIGH IMPACT STUDIO
            </span>
          </div>

          <div className="flex gap-6">
            <a href="#hero" className="text-sm text-gray-500 hover:text-white transition-colors">Inicio</a>
            <a href="#services" className="text-sm text-gray-500 hover:text-white transition-colors">Servicios</a>
            <a href="#about" className="text-sm text-gray-500 hover:text-white transition-colors">Sobre mí</a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} High Impact Studio. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
