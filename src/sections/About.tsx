import { motion } from 'framer-motion'
import { Shield, Clock, Users, Target } from 'lucide-react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const About = () => {
  const { ref, inView } = useScrollAnimation()

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive insurance and rigorous inspection protocols protect every vehicle in our care.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'On-time delivery is our commitment. We understand that time matters in the automotive industry.',
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Licensed, vetted drivers with extensive experience in vehicle handling and logistics.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail in every aspect of the relocation process.',
    },
  ]

  return (
    <section id="about" className="section bg-white" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">
              About Bridgepoint
            </span>
            <h2 className="mt-2 mb-6 gradient-text">
              South Africa's Trusted Vehicle Relocation Partner
            </h2>
            <div className="space-y-4 text-grey">
              <p>
                Bridgepoint Freight & Logistics has been at the forefront of professional vehicle 
                relocation services in South Africa for over 15 years. We specialize in seamless, 
                secure transportation of vehicles for dealerships, fleet operators, manufacturers, 
                and auction houses nationwide.
              </p>
              <p>
                Our mission is simple: to deliver vehicles safely, on time, and in perfect condition. 
                We achieve this through a combination of experienced professionals, rigorous safety 
                protocols, and cutting-edge logistics technology.
              </p>
              <p>
                From dealer-to-dealer transfers to customer deliveries, we handle every vehicle with 
                the care and professionalism it deserves. Our team of dedicated professionals works 
                around the clock to ensure your vehicles reach their destination safely.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-light-grey px-6 py-4 rounded-xl">
                <div className="text-2xl font-bold text-dark-navy">100%</div>
                <div className="text-sm text-grey">Insured Operations</div>
              </div>
              <div className="bg-light-grey px-6 py-4 rounded-xl">
                <div className="text-2xl font-bold text-dark-navy">24/7</div>
                <div className="text-sm text-grey">Support Available</div>
              </div>
              <div className="bg-light-grey px-6 py-4 rounded-xl">
                <div className="text-2xl font-bold text-dark-navy">98%</div>
                <div className="text-sm text-grey">On-Time Delivery</div>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-light-grey rounded-xl p-6 hover:shadow-premium transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-navy rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">{value.title}</h3>
                  <p className="text-sm text-grey">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
