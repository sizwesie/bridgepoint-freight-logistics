import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { WHY_CHOOSE } from '@utils/constants'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const WhyChoose = () => {
  const { ref, inView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="why-choose" className="section bg-light-grey" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Why Choose Bridgepoint?</h2>
          <p className="text-grey max-w-2xl mx-auto text-lg">
            Industry-leading expertise with a focus on safety, reliability, and customer satisfaction
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE.map((reason) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-accent-blue flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-charcoal mb-2">{reason.title}</h3>
                  <p className="text-grey text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChoose
