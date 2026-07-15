import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { INDUSTRIES } from '@utils/constants'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const Industries = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section className="section bg-white" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Industries We Serve</h2>
          <p className="text-grey max-w-2xl mx-auto text-lg">
            Trusted by leading companies across multiple sectors
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-br from-light-blue to-light-grey rounded-lg p-6 text-center border border-light-blue/50 hover:border-accent-blue hover:shadow-premium transition-all duration-300 group cursor-pointer"
            >
              <Building2 className="text-accent-blue mx-auto mb-3 group-hover:scale-110 transition" size={28} />
              <p className="font-semibold text-charcoal text-sm">{industry.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
