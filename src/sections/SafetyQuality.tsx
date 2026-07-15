import { motion } from 'framer-motion'
import { Shield, Award, Truck, AlertCircle } from 'lucide-react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const SafetyQuality = () => {
  const { ref, inView } = useScrollAnimation()

  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Insurance',
      description: 'Full coverage for all vehicles in transit with competitive premiums'
    },
    {
      icon: Award,
      title: 'Safety Certified Drivers',
      description: 'All drivers undergo rigorous background checks and safety training'
    },
    {
      icon: Truck,
      title: 'Professional Fleet',
      description: 'Well-maintained carrier vehicles with latest tracking technology'
    },
    {
      icon: AlertCircle,
      title: 'Quality Assurance',
      description: 'Pre-delivery and post-delivery inspections on every vehicle'
    },
  ]

  return (
    <section className="section bg-light-grey" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Safety & Quality Commitment</h2>
          <p className="text-grey max-w-2xl mx-auto text-lg">
            Your vehicle's safety is our top priority with industry-leading standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-premium hover:shadow-premium-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-light-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-blue group-hover:text-white transition">
                  <IconComponent className="text-accent-blue group-hover:text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SafetyQuality
