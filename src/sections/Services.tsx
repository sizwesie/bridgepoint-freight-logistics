import { motion } from 'framer-motion'
import { Truck, MapPin, Users, Zap } from 'lucide-react'
import { SERVICES } from '@utils/constants'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const Services = () => {
  const { ref, inView } = useScrollAnimation()

  const icons = [Truck, MapPin, Users, Zap, Truck, MapPin]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="section bg-light-grey" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Our Services</h2>
          <p className="text-grey max-w-2xl mx-auto text-lg">
            Comprehensive vehicle relocation solutions tailored to your business needs
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => {
            const IconComponent = icons[index % icons.length]
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-white rounded-xl p-8 shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-blue group-hover:text-white transition">
                  <IconComponent className="text-accent-blue group-hover:text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
