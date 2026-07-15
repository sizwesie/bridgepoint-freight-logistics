import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseScrollAnimationOptions {
  threshold?: number | number[]
  rootMargin?: string
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
  } = options

  const { ref, inView } = useInView({
    threshold,
    rootMargin,
  })

  const [hasViewed, setHasViewed] = useState(false)

  useEffect(() => {
    if (inView && !hasViewed) {
      setHasViewed(true)
    }
  }, [inView, hasViewed])

  return { ref, inView: hasViewed }
}
