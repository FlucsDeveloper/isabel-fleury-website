'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon?: string
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={href}>
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full border border-warmGray/5">
          {icon && (
            <div className="text-4xl mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )}
          <h3 className="text-2xl font-serif text-warmGray mb-4 group-hover:text-sage transition-colors">
            {title}
          </h3>
          <p className="text-warmGray-light leading-relaxed mb-6">
            {description}
          </p>
          <span className="inline-flex items-center text-sage font-medium group-hover:gap-2 transition-all">
            Learn more
            <svg
              className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
