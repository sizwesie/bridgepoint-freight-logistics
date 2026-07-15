import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@utils/constants'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const Testimonials = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section className="section bg-white" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Client Testimonials</h2>
          <p className="text-grey max-w-2xl mx-auto text-lg">
            Hear from industry leaders who trust Bridgepoint
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light-grey rounded-xl p-8 hover:shadow-premium transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent-blue text-accent-blue" />
                ))}
              </div>
              <p className="text-grey mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-accent-blue">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
