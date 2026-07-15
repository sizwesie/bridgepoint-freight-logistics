import { motion } from 'framer-motion'
import { Car } from 'lucide-react'
import { FLEET_EXPERTISE } from '@utils/constants'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const FleetExpertise = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section className="section bg-white" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Fleet Expertise</h2>
          <p className="text-grey max-w-2xl mx-auto text-lg">
            Experience handling all vehicle types with specialized care protocols
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FLEET_EXPERTISE.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-gradient-to-br from-navy/10 to-accent-blue/10 rounded-xl p-8 text-center border border-accent-blue/20 hover:border-accent-blue hover:shadow-premium transition-all duration-300 group"
            >
              <Car className="text-accent-blue mx-auto mb-4 group-hover:scale-125 transition-transform" size={36} />
              <h3 className="font-semibold text-charcoal text-lg">{vehicle.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FleetExpertise
