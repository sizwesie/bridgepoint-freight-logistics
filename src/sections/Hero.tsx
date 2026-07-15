import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { TAGLINE, TRUST_INDICATORS } from '@utils/constants'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-navy via-navy to-accent-blue pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-light-blue/20 rounded-full text-accent-blue text-sm font-semibold mb-4">
                Professional Vehicle Relocation
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Vehicle Relocation Made Simple
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-light-blue mb-8 leading-relaxed">
              {TAGLINE}. Expert drivers, comprehensive insurance, and professional service nationwide.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn btn-primary group">
                Get Your Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="btn btn-secondary">
                Learn More
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {TRUST_INDICATORS.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-accent-blue" />
                  <span className="text-sm text-light-blue">{indicator}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-light-blue rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-accent-blue/30 to-navy/30 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-r from-accent-blue to-navy rounded-lg animate-pulse"></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-gradient-to-r from-accent-blue to-navy rounded-lg animate-pulse"></div>
                  <div className="h-24 bg-gradient-to-r from-accent-blue to-navy rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
