import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HOW_IT_WORKS } from '@utils/constants'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const HowItWorks = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="how-it-works" className="section bg-white" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">How It Works</h2>
          <p className="text-grey max-w-2xl mx-auto text-lg">
            A simple, transparent 4-step process from quote to delivery
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue to-navy"></div>

          {HOW_IT_WORKS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Number Circle */}
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent-blue to-navy rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10 shadow-lg">
                {item.step}
              </div>

              {/* Arrow */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-5 z-10">
                  <ArrowRight className="text-accent-blue" size={24} />
                </div>
              )}

              <div className="bg-light-grey rounded-xl p-6 text-center">
                <h3 className="font-bold text-charcoal mb-2 text-lg">{item.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
