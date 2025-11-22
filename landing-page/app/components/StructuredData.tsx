export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SaludMental',
    url: 'https://saludmental.com',
    logo: 'https://saludmental.com/logo.png',
    description: 'Plataforma de salud mental digital para Latinoamérica',
    areaServed: {
      '@type': 'Place',
      name: 'Latin America',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SaludMental',
    url: 'https://saludmental.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://saludmental.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'SaludMental',
    description: 'Servicios de salud mental digital',
    areaServed: 'Latin America',
    serviceType: 'Mental Health Services',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}

