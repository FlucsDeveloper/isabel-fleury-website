'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
}

export default function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  )
}
