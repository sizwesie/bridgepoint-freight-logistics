import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { PHONE } from '@utils/constants'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const CTA = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section className="section bg-gradient-to-r from-dark-navy to-navy" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-light-blue mb-8 max-w-2xl mx-auto">
            Contact Bridgepoint today for professional, reliable vehicle relocation services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary group">
              Request a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </button>
            <a href={`tel:${PHONE}`} className="btn btn-secondary flex items-center justify-center gap-2">
              <Phone size={18} />
              Call Now
            </a>
          </div>

          <p className="text-light-blue text-sm mt-8">Available 24/7 for urgent relocations</p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
