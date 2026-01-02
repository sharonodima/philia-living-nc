import Hero from '@/components/Hero';
import { CheckCircle, Heart, Users, Clock, Shield, Home, Star, Smile } from 'lucide-react';

export const metadata = {
  title: 'Benefits - Philia Living',
  description: 'Discover the many benefits of choosing Philia Living for your care needs.',
};

export default function Benefits() {
  const mainBenefits = [
    {
      icon: Heart,
      title: 'Personalized In-Home Care',
      description: 'Every care plan is tailored to meet individual needs, preferences, and goals in your own home.',
    },
    {
      icon: Users,
      title: 'Professional Caregivers',
      description: 'Our team consists of trained, experienced, and compassionate caregivers who visit your home.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Care visits scheduled around your needs, from a few hours to full-time support.',
    },
    {
      icon: Shield,
      title: 'Safe & Familiar Setting',
      description: 'Receive care in the safety and comfort of your own home environment.',
    },
    {
      icon: Home,
      title: 'Stay at Home',
      description: 'Remain in your familiar surroundings with independence, comfort, and dignity.',
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Continuous monitoring and improvement of in-home care standards.',
    },
  ];

  const familyBenefits = [
    'Peace of mind knowing your loved one is well cared for at home',
    'Regular updates and communication about in-home care',
    'Family involvement and collaboration with caregivers',
    'Support and resources for family members',
    'Professional guidance and in-home care coordination',
    'Reduced stress and caregiving burden',
  ];

  const clientBenefits = [
    'Maintain independence and dignity in your own home',
    'Access to professional in-home healthcare services',
    'Support with daily activities while staying at home',
    'Assistance with meal preparation and nutrition',
    'Companionship and social interaction',
    'Safe and supportive care in familiar surroundings',
  ];

  return (
    <>
      <Hero
        title="Benefits of Choosing Us"
        subtitle="Why Families Choose Philia Living"
        description="Discover how our comprehensive in-home care services benefit both clients and their families."
      />

      {/* Main Benefits Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">Key Benefits</h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Experience the difference that quality care makes in everyday life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainBenefits.map((benefit, index) => {
              const colors = ['card-lavender', 'card-cream', 'card-pink', 'card-lavender', 'card-cream', 'card-pink'];
              return (
                <div key={index} className={`${colors[index]} text-center`}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white text-primary-600 rounded-full mb-6">
                    <benefit.icon size={36} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* For Families & Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Family Benefits */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-primary-100 text-primary-600 rounded-full p-4 mr-4">
                  <Users size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">For Families</h2>
              </div>
              <div className="space-y-4">
                {familyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-primary-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Benefits */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-secondary-100 text-secondary-600 rounded-full p-4 mr-4">
                  <Smile size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">For Clients</h2>
              </div>
              <div className="space-y-4">
                {clientBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-secondary-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Proven Results</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our commitment to excellence is reflected in these numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '98%', label: 'Family Satisfaction Rate' },
              { number: '15+', label: 'Years of Experience' },
              { number: '50+', label: 'Professional Staff' },
              { number: '500+', label: 'Families Served' },
            ].map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience These Benefits Yourself
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Schedule a consultation today to learn more about how we can support you and your family.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
