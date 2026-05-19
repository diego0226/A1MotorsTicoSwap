import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import nosotrosBg from '../assets/HeroFondo.png';
import hpTunners from '../assets/nosotros/HpTunners.png';
import Stock from '../assets/nosotros/Stock.JPEG';
import Performance from '../assets/nosotros/Performance.JPEG';
import workshop from '../assets/nosotros/workshop.JPEG';
import logo from '../assets/nosotros/logo.png';


export default function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-sans selection:bg-[#ce0217] selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden border-b-4 border-[#ce0217]">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50 grayscale"
          alt="Automotive Workshop"
          src={nosotrosBg}
        />
        <div className="relative z-10 px-4 sm:px-6 lg:px-[64px] max-w-[1440px] mx-auto w-full mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-[#ce0217] px-4 py-2 mb-6"
          >
            <span className="font-sans text-[14px] leading-none font-semibold text-white uppercase tracking-[0.05em]">COSTA RICA'S FINEST</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[44px] md:text-[72px] font-black text-white uppercase italic leading-[1.1] max-w-4xl tracking-tighter"
          >
            Sobre A1 Motors<br /><span className="text-[#ce0217]">Tico Swap</span>
          </motion.h1>
        </div>
      </section>

      {/* Content Section: The Specialist */}
      <section className="py-24 px-4 sm:px-6 lg:px-[64px] max-w-[1440px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-[24px]"
        >
          <div className="md:col-span-7 flex flex-col justify-center">
            <motion.h2 variants={itemVariants} className="font-display text-[32px] md:text-[48px] font-extrabold uppercase mb-8 border-l-8 border-[#ce0217] pl-6 leading-[1.2]">
              A1 <span className="text-[var(--color-secondary)]"> Motors</span> Tico <span className="text-[#003399]">Swap</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="font-sans text-[18px] leading-[1.6] text-[#c4c5d5]">
                A1 Motors Tico Swap nace de la pasión por el rendimiento, la mecánica y la cultura automotriz. Nos especializamos en swaps de motores LS y proyectos de alto desempeño, ayudando a que cada vehículo alcance su verdadero potencial.
              </p>
              <p className="font-sans text-[18px] leading-[1.6] text-[#c4c5d5]">
                Trabajamos con motores 100% rectificados traídos desde México, seleccionados para ofrecer potencia, confiabilidad y calidad en cada proyecto. Además contamos con herramientas profesionales como HP Tuners, lo que nos permite trabajar la ECU de su vehículo desde desbloqueos hasta calibraciones completas.
              </p>
              <p className="font-sans text-[18px] leading-[1.6] text-[#c4c5d5]">
                En A1 Motors Tico Swap creemos que cada proyecto es único, por eso nuestro objetivo no es solo instalar un motor, sino construir algo que represente el verdadero rendimiento y la identidad de nuestra marca.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-2 gap-[24px]">
              <div className="bg-[#201f1f] p-6 border-l-4 border-[#003399] border-t border-t-[#2a2a2a] shadow-lg">
                <div className="font-display text-[32px] font-bold text-white mb-2 leading-[1.2]">HP TUNNERS</div>
                <div className="font-sans text-[14px] font-semibold text-[#c4c5d5] uppercase tracking-[0.05em] leading-[1]">Software</div>
              </div>
              <div className="bg-[#201f1f] p-6 border-l-4 border-[#ce0217] border-t border-t-[#2a2a2a] shadow-lg">
                <div className="font-display text-[32px] font-bold text-white mb-2 leading-[1.2]">100%</div>
                <div className="font-sans text-[14px] font-semibold text-[#c4c5d5] uppercase tracking-[0.05em] leading-[1]">Precisión Técnica</div>
              </div>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="md:col-span-5 h-[500px] md:h-auto mt-8 md:mt-0">
            <div className="bg-[#201f1f] p-1 border border-[#353534] hover:border-[#003399] transition-colors h-full">
              <img
                className="w-full h-full object-cover"
                alt="Engine detail"
                src={logo}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Showcase */}
      <section className="py-24 bg-[#0e0e0e]">
        <div className="px-4 sm:px-6 lg:px-[64px] max-w-[1440px] mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[24px] font-bold uppercase mb-12 tracking-tighter text-center italic leading-[1.3]"
          >
            Nuestra Pasión en Detalle
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {/* Bento Item 1 */}
            <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#201f1f] border border-[#353534] h-[576px]">
              <img className="w-full h-full object-cover opacity-60 group-hover:scale-100 transition-transform duration-700" alt="Workshop" src={workshop} />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-[#131313] to-transparent">
                <div className="bg-[#003399] text-white px-3 py-1 inline-block mb-3 font-sans text-[14px] font-semibold uppercase tracking-[0.05em]">Events</div>
              </div>
            </motion.div>
            {/* Bento Item 2 */}
            <motion.div variants={itemVariants} className="md:col-span-2 relative group overflow-hidden bg-[#201f1f] border border-[#353534] h-[242px]">
              <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Dashboard" src={hpTunners} />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-[#131313] to-transparent">
                <div className="bg-[#003399] text-white px-3 py-1 inline-block mb-1 font-sans text-[14px] font-semibold uppercase tracking-[0.05em]">Digital Calibration</div>
              </div>
            </motion.div>
            {/* Bento Item 3 */}
            <motion.div variants={itemVariants} className="relative group overflow-hidden bg-[#201f1f] border border-[#353534] aspect-[1/1]">
              <img className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" alt="Precision task" src={Stock} />
            </motion.div>
            {/* Bento Item 4 */}
            <motion.div variants={itemVariants} className="relative group overflow-hidden bg-[#201f1f] border border-[#353534] aspect-[1/1]">
              <img className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" alt="Dyno run" src={Performance} />
              <div className="absolute bottom-4 left-4">
                <div className="font-sans text-[14px] font-semibold uppercase text-[#b5c4ff] tracking-[0.05em] leading-[1]">Performance</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-[64px] max-w-[1440px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-[24px]"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <Settings className="w-10 h-10 text-[#ce0217]" />
            <h5 className="font-display text-[24px] font-bold uppercase leading-[1.3]">Excelencia Mecánica</h5>
            <p className="font-sans text-[16px] leading-[1.5] text-[#c4c5d5]">Sin compromisos. Utilizamos solo los mejores componentes y técnicas de ensamblaje para garantizar resultados superiores.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-4">
            <Zap className="w-10 h-10 text-[#003399]" />
            <h5 className="font-display text-[24px] font-bold uppercase leading-[1.3]">Alto Rendimiento</h5>
            <p className="font-sans text-[16px] leading-[1.5] text-[#c4c5d5]">Nuestros swaps están diseñados para dominar la calle y la pista, optimizando la entrega de torque y potencia.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-4">
            <ShieldCheck className="w-10 h-10 text-white" />
            <h5 className="font-display text-[24px] font-bold uppercase leading-[1.3]">Legado Tico</h5>
            <p className="font-sans text-[16px] leading-[1.5] text-[#c4c5d5]">Orgullosamente costarricenses, elevando el estándar de la industria nacional a niveles internacionales.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Performance Metric / Progress Section */}
      <section className="py-20 bg-[#2a2a2a] border-t-2 border-[#003399]">
        <div className="px-4 sm:px-6 lg:px-[64px] max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-[24px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h3 className="font-display text-[48px] font-extrabold uppercase italic mb-4 leading-[1.2]">ENGINEERED FOR POWER</h3>
            <p className="font-sans text-[14px] font-semibold text-[#c4c5d5] uppercase tracking-[0.05em]">Nuestra métrica de éxito es tu satisfacción al volante.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full space-y-8"
          >
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] leading-[1]">V8 Conversion Mastery</span>
                <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] leading-[1]">98%</span>
              </div>
              <div className="h-4 bg-[#131313] w-full">
                <div className="h-full bg-gradient-to-r from-[#003399] to-[#ce0217]" style={{ width: "98%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] leading-[1]">Custom ECU Tuning</span>
                <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] leading-[1]">95%</span>
              </div>
              <div className="h-4 bg-[#131313] w-full">
                <div className="h-full bg-gradient-to-r from-[#003399] to-[#ce0217]" style={{ width: "95%" }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center bg-[#131313] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #ce0217 0%, transparent 70%)" }}></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 max-w-[1440px] mx-auto"
        >
          <h2 className="font-display text-[44px] md:text-[72px] uppercase font-black mb-8 italic leading-[1.1] tracking-tighter">¿LISTO PARA EL SWAP?</h2>
          <p className="font-display text-[24px] font-bold mb-12 max-w-2xl mx-auto uppercase leading-[1.3]">Transforma tu proyecto hoy mismo con los especialistas.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://wa.me/50688888888"
              className="inline-block bg-[#ce0217] text-white px-12 py-5 font-display text-[24px] font-bold uppercase italic hover:bg-[#ce0217]/90 transition-all border-b-4 border-[#690006]"
            >
              HABLAR POR WHATSAPP
            </a>
            <Link
              to="/catalogo"
              className="inline-block bg-transparent border-2 border-white text-white px-12 py-5 font-display text-[24px] font-bold uppercase italic hover:bg-white hover:text-[#131313] transition-all"
            >
              VER CATÁLOGO
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
