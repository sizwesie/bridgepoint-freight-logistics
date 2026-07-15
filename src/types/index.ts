/* Type Definitions */

export interface Service {
  id: number
  title: string
  description: string
}

export interface Step {
  step: number
  title: string
  description: string
}

export interface Feature {
  id: number
  title: string
  description: string
}

export interface Industry {
  id: number
  name: string
}

export interface Vehicle {
  id: number
  name: string
}

export interface Testimonial {
  id: number
  name: string
  company: string
  quote: string
}

export interface FormData {
  name: string
  company: string
  email: string
  phone: string
  pickupLocation: string
  deliveryLocation: string
  vehicleType: string
  numberOfVehicles: number
  preferredDate: string
  additionalNotes: string
}

export interface NavLink {
  label: string
  href: string
}
