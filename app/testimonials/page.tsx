import { testimonials } from '@/data/people';
import Hero from '@/components/Hero';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Testimonials - Philia Living',
  description: 'Read what families have to say about their experience with Philia Living.',
};

export default function Testimonials() {

  return (
    <>
      <Hero
        title="What Families Say"
        subtitle="Testimonials"
        description="Don't just take our word for it. Here's what families have to say about their experience with Philia Living."
      />

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Quote size={48} className="text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Stories from Real Families
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are honored to serve so many wonderful families in our community. Their feedback and trust inspire us to continue providing exceptional care every day.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <Image src={testimonial.image} alt={testimonial.name} width={88} height={88} className="w-20 h-20 rounded-full object-cover mb-4" />

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What the Numbers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '98%', label: 'Family Satisfaction Rate' },
              { number: '4.9/5', label: 'Average Rating' },
              { number: '500+', label: 'Happy Families Served' },
            ].map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">
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
            Become Part of Our Family
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Join the hundreds of families who have trusted us with their care needs. Contact us today to learn more.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
