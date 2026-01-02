import Hero from '@/components/Hero';
import { Star, Quote } from 'lucide-react';

export const metadata = {
  title: 'Testimonials - Philia Living',
  description: 'Read what families have to say about their experience with Philia Living.',
};

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      relation: 'Daughter of Client',
      rating: 5,
      text: 'The in-home care my mother receives from Philia Living is outstanding. The caregivers truly go above and beyond to ensure her comfort and happiness. I have complete peace of mind knowing she\'s cared for in her own home.',
      date: 'December 2024',
    },
    {
      name: 'Michael Davis',
      relation: 'Son of Client',
      rating: 5,
      text: 'Professional, compassionate, and reliable. We could not ask for better in-home care for my father. The caregivers communicate regularly and treat him with dignity and respect in his own home. Highly recommend!',
      date: 'November 2024',
    },
    {
      name: 'Emily Thompson',
      relation: 'Family Member',
      rating: 5,
      text: 'Philia Living has given our family peace of mind during a difficult time. The personalized in-home care plan and compassionate caregivers have made all the difference. Mom is so much happier at home.',
      date: 'November 2024',
    },
    {
      name: 'Robert Martinez',
      relation: 'Spouse of Client',
      rating: 5,
      text: 'From the initial home consultation to daily care visits, everything has been exceptional. The caregivers are knowledgeable, caring, and always reliable. My wife is thriving with in-home care.',
      date: 'October 2024',
    },
    {
      name: 'Jennifer Lee',
      relation: 'Daughter of Client',
      rating: 5,
      text: 'The companionship and engaging activities the caregivers provide keep my mom happy at home. The care team is attentive and responsive. We are so grateful for Philia Living.',
      date: 'October 2024',
    },
    {
      name: 'David Wilson',
      relation: 'Son of Client',
      rating: 5,
      text: 'Choosing Philia Living for in-home care was the best decision for our family. The level of care, professionalism, and genuine compassion shown by all caregivers is remarkable.',
      date: 'September 2024',
    },
    {
      name: 'Amanda Brown',
      relation: 'Family Member',
      rating: 5,
      text: 'The caregivers at Philia Living treat every client like family. My grandfather loves having them visit, and we can see the positive impact on his well-being. Excellent in-home care service!',
      date: 'September 2024',
    },
    {
      name: 'Christopher Taylor',
      relation: 'Son of Client',
      rating: 5,
      text: 'Outstanding in-home care with compassionate caregivers. They are professional and kind, and they keep us informed about my mother\'s care. We highly recommend Philia Living.',
      date: 'August 2024',
    },
    {
      name: 'Patricia Anderson',
      relation: 'Daughter of Client',
      rating: 5,
      text: 'My father has received in-home care for over a year now, and we continue to be impressed with the quality. The caregivers are amazing, and Dad is so happy to stay in his own home.',
      date: 'August 2024',
    },
  ];

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
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.relation}</p>
                  <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
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
