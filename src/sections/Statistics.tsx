import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Truck, Users, Award, MapPin } from 'lucide-react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const STATISTICS = [
  { id: 1, value: 15, suffix: '+', label: 'Years Experience', icon: Award },
  { id: 2, value: 50000, suffix: '+', label: 'Vehicles Relocated', icon: Truck },
  { id: 3, value: 200, suffix: '+', label: 'Corporate Clients', icon: Users },
  { id: 4, value: 9, suffix: '', label: 'Provinces Covered', icon: MapPin },
]

const useCountUp = (end: number, duration: number = 2000, start: number = 0, isActive: boolean = false) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!isActive) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * (end - start) + start))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start, isActive])

  return count
}

const StatCard = ({ stat, inView, index }: { stat: typeof STATISTICS[0]; inView: boolean; index: number }) => {
  const count = useCountUp(stat.value, 2000, 0, inView)
  const IconComponent = stat.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-navy rounded-full flex items-center justify-center mx-auto mb-4">
        <IconComponent className="text-white" size={28} />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-dark-navy mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-grey font-medium">{stat.label}</p>
    </motion.div>
  )
}

const Statistics = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section className="section bg-gradient-to-br from-navy to-dark-navy relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-light-blue text-lg max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence in vehicle relocation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATISTICS.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} inView={inView} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
