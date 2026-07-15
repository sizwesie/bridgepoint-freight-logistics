import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'

const FAQ_DATA = [
  {
    id: 1,
    question: "How long does a typical vehicle relocation take?",
    answer: "Delivery times depend on the distance between pickup and delivery locations. Typically, inter-city relocations within Gauteng take 1-2 business days, while cross-province deliveries may take 3-5 business days. We always provide estimated delivery times with your quote.",
  },
  {
    id: 2,
    question: "Are vehicles insured during transportation?",
    answer: "Yes, all vehicles relocated by Bridgepoint are fully insured during transportation. We carry comprehensive coverage that protects against damage, theft, and any incidents that may occur during transit. Certificate of insurance can be provided upon request.",
  },
  {
    id: 3,
    question: "What types of vehicles do you transport?",
    answer: "We transport a wide range of vehicles including passenger vehicles, SUVs, bakkies, luxury vehicles, electric vehicles, hybrid vehicles, and light commercial vehicles. Our drivers are experienced with various vehicle types and sizes.",
  },
  {
    id: 4,
    question: "How do I track my vehicle during transit?",
    answer: "We provide real-time updates throughout the relocation process. You will receive status notifications at key milestones, and our operations team is available 24/7 to provide updates on your vehicle's location and estimated arrival time.",
  },
  {
    id: 5,
    question: "What happens if there's damage to my vehicle?",
    answer: "In the rare event of any damage, our dedicated claims team will guide you through the process. We conduct thorough pre-departure and post-delivery inspections with photographic documentation. Any claims are handled promptly and professionally.",
  },
  {
    id: 6,
    question: "Do I need to prepare my vehicle before pickup?",
    answer: "We recommend removing personal belongings and ensuring the fuel tank is at a reasonable level (usually 1/4 tank). All vehicles should have valid registration and keys must be provided. We handle the rest, including a comprehensive inspection upon pickup.",
  },
  {
    id: 7,
    question: "Can you handle urgent or emergency relocations?",
    answer: "Yes, we understand that some situations require immediate action. We offer expedited services for urgent relocations. Contact our team directly and we will work to accommodate your timeline wherever possible.",
  },
  {
    id: 8,
    question: "What areas do you service?",
    answer: "We provide nationwide coverage across all nine provinces of South Africa. This includes all major cities, towns, and remote locations. Whether you need vehicles relocated locally or across the country, we have got you covered.",
  },
]

const FAQItem = ({ item, isOpen, onClick }: { item: typeof FAQ_DATA[0]; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left hover:text-accent-blue transition-colors"
      >
        <span className="font-semibold text-charcoal pr-8">{item.question}</span>
        <ChevronDown
          size={20}
          className={`text-accent-blue transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-grey leading-relaxed">{item.answer.replace(/'/g, "'")}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQ = () => {
  const { ref, inView } = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section bg-light-grey" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-2 mb-4 gradient-text">Frequently Asked Questions</h2>
          <p className="text-grey max-w-2xl mx-auto text-lg">
            Find answers to common questions about our vehicle relocation services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-premium p-8"
        >
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-grey mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:underline"
          >
            Contact our team for more information
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
