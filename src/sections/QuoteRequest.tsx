import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import type { FormData } from '@types'

const QuoteRequest = () => {
  const { ref, inView } = useScrollAnimation()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    pickupLocation: '',
    deliveryLocation: '',
    vehicleType: '',
    numberOfVehicles: 1,
    preferredDate: '',
    additionalNotes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="section bg-light-grey" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Get Your Quote</h2>
          <p className="text-grey max-w-2xl mx-auto text-lg">
            Request a free, no-obligation quote in just a few minutes
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-premium-lg overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Pickup Location"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="deliveryLocation"
                  placeholder="Delivery Location"
                  value={formData.deliveryLocation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                  <option value="van">Van</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="number"
                  name="numberOfVehicles"
                  placeholder="Number of Vehicles"
                  min="1"
                  value={formData.numberOfVehicles}
                  onChange={handleChange}
                />
              </div>

              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
              />

              <textarea
                name="additionalNotes"
                placeholder="Additional Notes or Special Requirements"
                rows={3}
                value={formData.additionalNotes}
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-primary w-full group">
                Send Quote Request
                <Send size={18} className="group-hover:translate-x-1 transition" />
              </button>
            </form>

            {/* Info Section */}
            <div className="bg-gradient-to-br from-navy to-dark-navy text-white p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">What happens next?</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center font-bold">1</div>
                    <h4 className="font-semibold">Quick Review</h4>
                  </div>
                  <p className="text-light-blue text-sm ml-11">We review your quote request within 2 hours</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center font-bold">2</div>
                    <h4 className="font-semibold">Contact You</h4>
                  </div>
                  <p className="text-light-blue text-sm ml-11">Our team calls to discuss your needs</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center font-bold">3</div>
                    <h4 className="font-semibold">Custom Quote</h4>
                  </div>
                  <p className="text-light-blue text-sm ml-11">Receive a detailed, competitive quote</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center font-bold">4</div>
                    <h4 className="font-semibold">Get Moving</h4>
                  </div>
                  <p className="text-light-blue text-sm ml-11">Schedule your relocation with confidence</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuoteRequest
