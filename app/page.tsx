import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Users, Shield, Star, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home",
  description: "Philia Living provides quality, affordable in-home health care services in North Carolina. Our compassionate caregivers visit your home to deliver personalized care with dignity and respect. Contact us today!",
  keywords: ["in-home care NC", "home health care North Carolina", "affordable home care", "senior care at home", "personal care services"],
  alternates: {
    canonical: "https://philialiving.com",
  },
  openGraph: {
    title: "Philia Living - Let's Talk About Aging With Love",
    description: "Quality and Affordable In-Home Health Care in North Carolina",
    url: "https://philialiving.com",
    images: [
      {
        url: "/images/hero-bg.avif",
        width: 1200,
        height: 630,
        alt: "Philia Living In-Home Care Services",
      },
    ],
  },
};

export default function Home() {
  const services = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We provide caring and compassionate support tailored to individual needs.',
      image: '/images/elder-woman-caretaker.avif',
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Our experienced team is dedicated to delivering the highest quality care.',
      image: '/images/reading-braille-doctor.avif',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'We ensure a safe, comfortable, and nurturing living environment.',
      image: '/images/nurse-old-man.avif',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The care and attention my mother receives is outstanding. The staff truly goes above and beyond.',
      rating: 5,
    },
    {
      name: 'Michael Davis',
      text: 'Professional, compassionate, and reliable. We could not ask for better care.',
      rating: 5,
    },
    {
      name: 'Emily Thompson',
      text: 'Philia Living has given our family peace of mind. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <>
      <Hero
        title="Let's Talk About Aging With Love!"
        subtitle="Quality and Affordable In-Home Health Care"
        description="Providing exceptional in-home care services in North Carolina with dedication, expertise, and a commitment to quality of life in the comfort of your own home."
        ctaText="Learn More About Us"
        ctaLink="/about"
        backgroundImage="/images/hero-bg.avif"
      />

      {/* Services Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary-700">Our Core Values</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We are committed to providing the highest quality care with compassion, respect, and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {service.image && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-primary-700">About Philia Living</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Philia Living, we believe that everyone deserves to live with dignity, comfort, and joy in their own home. Our mission is to provide exceptional in-home care services that enhance the quality of life for our clients and their families.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                With years of experience and a dedicated team of professional caregivers, we bring personalized care directly to your home. Our caregivers visit clients in their homes, providing compassionate support in a familiar, comfortable environment. We treat every client as family.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="rounded-3xl p-12 lg:p-16" style={{ backgroundColor: '#d4e8dd' }}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-primary-600 mb-2">15+</h3>
                  <p className="text-gray-700">Years of Experience</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-primary-600 mb-2">500+</h3>
                  <p className="text-gray-700">Families Served</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-primary-600 mb-2">50+</h3>
                  <p className="text-gray-700">Dedicated Staff Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">What Families Say</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what families have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-primary inline-flex items-center">
              Read More Testimonials
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can provide the care and support your family needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
