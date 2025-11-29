'use client'

import { useState } from 'react'
import Button from '../ui/Button'
import { supabase } from '@/app/lib/supabase'

export default function WaitlistForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dni: ''
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        dni: formData.dni
                    }
                ])

            if (error) throw error

            setStatus('success')
            setFormData({ name: '', email: '', phone: '', dni: '' })
        } catch (error) {
            console.error('Error submitting form:', error)
            setStatus('error')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    if (status === 'success') {
        return (
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por unirte!</h3>
                <p className="text-gray-600">Te mantendremos informado.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-primary hover:text-primary/80 font-medium"
                >
                    Registrar otro usuario
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Juan Pérez"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="juan@ejemplo.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                        Número celular
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="+51 999 999 999"
                    />
                </div>

                <div>
                    <label htmlFor="dni" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                        DNI
                    </label>
                    <input
                        type="text"
                        id="dni"
                        name="dni"
                        required
                        value={formData.dni}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="12345678"
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full mt-6"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Enviando...' : 'Unirme a la lista de espera'}
                </Button>
            </div>
        </form>
    )
}
