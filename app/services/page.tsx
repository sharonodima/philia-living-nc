import Hero from '@/components/Hero';
import { Heart, Home, Users, Activity, Clock, Shield } from 'lucide-react';

export const metadata = {
  title: 'In-Home Care Services',
  description: 'Comprehensive in-home care services in North Carolina including personal care, companion care, respite care, and specialized health support. Our professional caregivers bring quality care to your home.',
  keywords: ['personal care services', 'companion care', 'respite care', 'in-home health support', 'homemaking services', 'specialized care'],
  alternates: {
    canonical: 'https://philialiving.com/services',
  },
  openGraph: {
    title: 'In-Home Care Services | Philia Living',
    description: 'Comprehensive in-home care services tailored to your needs',
    url: 'https://philialiving.com/services',
  },
};

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Personal Care Services',
      description: 'Assistance with daily living activities in your home, including bathing, dressing, grooming, and mobility support.',
      features: [
        'Personalized in-home care plans',
        'Trained care professionals who visit your home',
        'Respectful and dignified assistance',
        'Flexible scheduling to fit your needs',
      ],
    },
    {
      icon: Home,
      title: 'Companion Care',
      description: 'Friendly companionship and support to enhance quality of life in the comfort of your own home.',
      features: [
        'Conversation and social interaction',
        'Light housekeeping assistance',
        'Meal preparation support',
        'Transportation to appointments',
      ],
    },
    {
      icon: Activity,
      title: 'Health & Wellness Support',
      description: 'In-home health monitoring and wellness assistance to promote physical and mental well-being.',
      features: [
        'Medication reminders',
        'Health monitoring and vital checks',
        'Assistance with exercise routines',
        'Nutritional support and meal planning',
      ],
    },
    {
      icon: Users,
      title: 'Homemaking Services',
      description: 'Practical assistance with household tasks to help you maintain a clean, comfortable home.',
      features: [
        'Light housekeeping and cleaning',
        'Laundry and linen care',
        'Meal preparation and planning',
        'Grocery shopping assistance',
      ],
    },
    {
      icon: Clock,
      title: 'Respite Care',
      description: 'Temporary care relief for family caregivers, providing peace of mind and professional support.',
      features: [
        'Flexible scheduling (hourly, daily, or overnight)',
        'Trained caregivers you can trust',
        'Planned or emergency respite',
        'Peace of mind for family caregivers',
      ],
    },
    {
      icon: Shield,
      title: 'Specialized In-Home Care',
      description: 'Expert in-home care for individuals with specific health conditions and specialized needs.',
      features: [
        'Memory care and dementia support',
        'Chronic condition management',
        'Post-surgery recovery assistance',
        'End-of-life care and comfort',
      ],
    },
  ];

  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive In-Home Care Solutions"
        description="We offer a wide range of in-home care services designed to meet the unique needs of each individual and family, delivered in the comfort of your own home."
      />

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our comprehensive services are designed to support independence, dignity, and quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-primary-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our In-Home Care Process</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We follow a structured approach to ensure the best possible in-home care for every individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Initial Home Consultation', description: 'We visit your home to understand your needs and preferences.' },
              { step: '2', title: 'Personalized Care Plan', description: 'We create a customized in-home care plan tailored to your situation.' },
              { step: '3', title: 'Caregiver Visits Begin', description: 'Our professional caregivers visit your home to provide agreed-upon services.' },
              { step: '4', title: 'Ongoing Support', description: 'We continuously monitor and adjust in-home care to ensure satisfaction.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can help you or your loved ones.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}
