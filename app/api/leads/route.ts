import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validación básica
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Aquí integrarías con tu servicio de email o base de datos
    // Por ejemplo: SendGrid, Mailchimp, Airtable, etc.
    
    // Ejemplo de respuesta exitosa
    console.log('Lead capturado:', email)

    // TODO: Integrar con servicio real
    // await saveLead(email)

    return NextResponse.json(
      { success: true, message: 'Lead guardado exitosamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error procesando lead:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

