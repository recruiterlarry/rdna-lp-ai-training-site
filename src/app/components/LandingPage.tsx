'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LandingPageProps {
  data: any;
}

export default function LandingPage({ data }: LandingPageProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const pageData = data.landingPage;

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🚀 Transform Your Recruitment Career</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {pageData.hero?.headline || "Transform From Traditional to AI-Native Recruiter in Just 30 Days"}
              </h1>
              
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                {pageData.hero?.subheadline || "Join the AI RecruiterDNA Accelerator Workshop and master ChatGPT Pro as multiple AI assistants to make more placements, faster decisions, and achieve higher ROI in your recruitment process."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
                  {pageData.hero?.primaryCTA || "Book Your Free Strategy Session"}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                  {pageData.hero?.secondaryCTA || "Learn More About The Program"}
                </button>
              </div>
              
              <div className="flex items-center gap-8 mt-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>30-Day Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Live Support</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                  $3,000
                  <div className="text-xs opacity-90">Investment</div>
                </div>
                {pageData.hero?.heroImage && (
                  <Image
                    src={pageData.hero.heroImage}
                    alt="AI Recruiting Technology"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Are You Struggling With These Recruitment Challenges?
            </h2>
            <p className="text-xl text-gray-600">
              Most recruiters face these common problems that AI can solve
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pageData.problems?.map((problem: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {pageData.program?.title || "The 9-Phase AI RecruiterDNA Accelerator"}
            </h2>
            <p className="text-xl text-gray-600">
              {pageData.program?.description || "A systematic approach to becoming an AI-native recruiter"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pageData.program?.phases?.map((phase: any, index: number) => (
              <div key={phase.id} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className={`w-12 h-12 ${phase.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {phase.id}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {pageData.benefits?.title || "The Ultimate Outcome"}
            </h2>
            <p className="text-xl text-gray-600">
              {pageData.benefits?.subtitle || "More placements, faster decisions, and increased ROI by leveraging AI in your recruitment process"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pageData.benefits?.stats?.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className={`text-6xl font-bold ${stat.color} mb-2`}>
                  {stat.percentage}
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Hundreds of Successful AI-Native Recruiters
            </h2>
            <p className="text-xl text-gray-600">
              See what our graduates are saying about their transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pageData.testimonials?.map((testimonial: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {pageData.pricing?.title || "Program Investment"}
            </h2>
            <p className="text-xl opacity-90">
              {pageData.pricing?.subtitle || "Transform your career with our comprehensive system"}
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold mb-2">
                {pageData.pricing?.price || "$3,000"}
              </div>
              <div className="text-lg opacity-90">
                {pageData.pricing?.description || "Complete Transformation Program"}
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Payment Options:</h3>
              {pageData.pricing?.options?.map((option: any, index: number) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <span>{option.label}</span>
                  <span className="font-semibold">{option.price}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              {pageData.pricing?.enrollCTA || "Enroll in the Program Today"}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about the program
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {pageData.faq?.map((item: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <span className="text-gray-500">
                    {expandedFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {pageData.finalCTA?.title || "Ready to Transform Your Recruitment Career?"}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {pageData.finalCTA?.subtitle || "The AI revolution in recruitment is happening now. Every day you wait is another day your competitors gain an advantage. Don't let this opportunity pass you by."}
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">
              {pageData.finalCTA?.guarantee || "30-Day Money-Back Guarantee"}
            </h3>
            <p className="opacity-90">
              {pageData.finalCTA?.guaranteeText || "We're so confident in your success that we're removing all the risk. Try the entire program for 30 days. If you're not completely satisfied, we'll refund every penny."}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              {pageData.finalCTA?.primaryCTA || "Book Your Free Strategy Session Now"}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              {pageData.finalCTA?.secondaryCTA || "Enroll in the Program Today"}
            </button>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            <p>{pageData.contact?.supportText || "Questions? Email us at info@recruiterdna.com or call (555) 123-4567"}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">
            {pageData.footer?.brandName || "RecruiterDNA"}
          </h3>
          <p className="text-gray-400">
            {pageData.footer?.tagline || "Empowering recruiters with AI transformation"}
          </p>
        </div>
      </footer>
    </div>
  );
}

