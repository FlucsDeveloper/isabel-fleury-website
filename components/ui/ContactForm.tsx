'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-warmGray mb-2 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-3 border border-warmGray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors bg-white"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-warmGray mb-2 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="w-full px-4 py-3 border border-warmGray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors bg-white"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-warmGray mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
          className="w-full px-4 py-3 border border-warmGray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors bg-white resize-none"
          placeholder="Tell me a bit about what brings you here..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary text-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-sage/10 border border-sage/20 rounded-lg text-sage text-center">
          Thank you for reaching out. I'll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
          There was an error sending your message. Please try again or email directly.
        </div>
      )}
    </form>
  )
}
