import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundAtoms from '@/components/layout/BackgroundAtoms';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Instagram, Calendar } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b033acd8-cf20-4002-b5de-98041dbcdab7',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `Nuevo contacto desde High Impact Studio - ${formData.service}`,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor, intenta contactarnos por WhatsApp.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta contactarnos por WhatsApp.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <BackgroundAtoms />
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header with Background */}
        <div className="relative mb-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10" />
            <img 
              src="https://res.cloudinary.com/dwspyodrs/image/upload/v1767118614/glowing-contact-us-logo-qx58564q7a51etk6_lk1p8z.jpg" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-20" />
          </div>
          
          <div className="container mx-auto px-4 relative z-30 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Contacto
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Hablemos sobre tu proyecto. Respuesta rápida y presupuesto sin compromiso.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Methods */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
              Formas de Contacto
            </h2>
            <p className="text-white/60 text-center">
              Elegí el método que prefieras. Te respondo en el día.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.a
              href="https://wa.me/543513079334?text=Hola%2C%20me%20interesa%20trabajar%20con%20ustedes"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-6 rounded-lg hover:border-white/30 transition-all duration-300 text-center group"
            >
              <MessageCircle className="w-10 h-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">WHATSAPP</h3>
              <p className="text-white/60 text-sm mb-4">Contactame directamente.</p>
              <span className="text-white text-sm font-semibold">ESCRIBIR AHORA →</span>
            </motion.a>

            <motion.a
              href="https://calendly.com/studiohighimpact/30min"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-6 rounded-lg hover:border-white/30 transition-all duration-300 text-center group"
            >
              <Calendar className="w-10 h-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">CALENDLY</h3>
              <p className="text-white/60 text-sm mb-4">Agendá una llamada.</p>
              <span className="text-white text-sm font-semibold">AGENDAR AHORA →</span>
            </motion.a>

            <motion.a
              href="mailto:studiohighimpact@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-6 rounded-lg hover:border-white/30 transition-all duration-300 text-center group"
            >
              <Mail className="w-10 h-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">EMAIL</h3>
              <p className="text-white/60 text-sm mb-4">Te respondo a la brevedad.</p>
              <span className="text-white text-sm font-semibold">ENVIAR EMAIL →</span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/highimpact.studio/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-6 rounded-lg hover:border-white/30 transition-all duration-300 text-center group"
            >
              <Instagram className="w-10 h-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">INSTAGRAM</h3>
              <p className="text-white/60 text-sm mb-4">Seguime y hablamos.</p>
              <span className="text-white text-sm font-semibold">SEGUIR →</span>
            </motion.a>
          </div>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
              Formulario de Contacto
            </h2>
            <p className="text-white/60 text-center">
              Completá el formulario y me pondré en contacto con vos lo antes posible
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-lg"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
                  NOMBRE COMPLETO *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-white text-sm font-semibold mb-2">
                  TELÉFONO / WHATSAPP
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-white text-sm font-semibold mb-2">
                  TIPO DE SERVICIO *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded text-white focus:border-white/40 focus:outline-none transition-colors"
                >
                  <option value="">Seleccionar...</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Web Institucional">Web Institucional</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Menú Digital">Menú Digital</option>
                  <option value="Portfolio">Portfolio</option>
                  <option value="Web Inmobiliaria">Web Inmobiliaria</option>
                  <option value="Web Estudio Jurídico">Web Estudio Jurídico</option>
                  <option value="Web Concesionaria">Web Concesionaria</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                MENSAJE *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors resize-none"
                placeholder="Contame sobre tu proyecto..."
              />
            </div>

            <Button
              type="submit"
              variant="default"
              className="w-full bg-white text-black hover:bg-white/90 font-semibold py-6 text-lg"
            >
              ENVIAR MENSAJE
            </Button>
          </motion.form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
