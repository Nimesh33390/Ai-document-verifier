import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Identity Proof Verification',
    href: '/identity-verification',
    description: 'Verify user identity using Aadhaar, Voter ID, or Driving License.',
    icon: '🪪',
  },
  {
    title: 'Bank KYC Verification',
    href: '/bank-kyc',
    description: 'KYC document validation for banking – Aadhaar, PAN, and address proof.',
    icon: '🏦',
  },
  {
    title: 'Admission Document Check',
    href: '/admission-verification',
    description: 'Validate school/college documents like LC, Marksheet, and ID proof.',
    icon: '🎓',
  },
  {
    title: 'Loan Application Verification',
    href: '/loan-verification',
    description: 'Verify all loan-related documents – salary slip, PAN, bank statement.',
    icon: '💰',
  },
  {
    title: 'Insurance KYC Process',
    href: '/insurance-kyc',
    description: 'Validate identity and policyholder documents for insurance onboarding.',
    icon: '📄',
  },
]

export default function Home() {
  return (
    <main className="bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          Verify Documents for Any Service – Instantly
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          AI-powered document verification tailored to different services like identity proofing, banking KYC, admissions, and more.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 block"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
