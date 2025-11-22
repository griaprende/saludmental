'use client'

import { useState, FormEvent } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

export default function LeadForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    // Validación básica
    if (!email || !email.includes('@')) {
      setError('Por favor ingresa un email válido')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      setSuccess(true)
      setEmail('')
    } catch (err) {
      setError('Hubo un error. Por favor intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center p-6 bg-success/10 rounded-lg">
        <p className="text-success font-medium">
          ¡Gracias! Te contactaremos pronto.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error}
          required
          aria-label="Email"
        />
        {error && (
          <p className="mt-2 text-sm text-danger" role="alert">
            {error}
          </p>
        )}
      </div>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={loading}
        className="w-full"
      >
        {loading ? 'Enviando...' : 'Comenzar Gratis'}
      </Button>
      <p className="text-xs text-text-tertiary text-center">
        Sin tarjeta de crédito. 100% privado.
      </p>
    </form>
  )
}

