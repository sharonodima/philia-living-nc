import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Schedule a Home Consultation',
  description: 'Contact Philia Living to schedule a free in-home consultation in North Carolina. Call (555) 123-4567 or email info@philialiving.com. We\'re here to answer your questions about our care services.',
  keywords: ['contact home care', 'schedule consultation', 'North Carolina home care contact', 'care services inquiry'],
  alternates: {
    canonical: 'https://philialiving.com/contact',
  },
  openGraph: {
    title: 'Contact Philia Living - Schedule Your Consultation',
    description: 'Get in touch to learn more about our in-home care services',
    url: 'https://philialiving.com/contact',
  },
};

export default function Contact() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We're here to answer your questions and discuss how we can support you and your family."
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have questions about our in-home care services, want to schedule a home consultation, or would like to discuss your care needs, we'd love to hear from you. Our team is ready to help.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 rounded-full p-3 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 rounded-full p-3 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@philialiving.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 rounded-full p-3 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">North Carolina, USA</p>
                    <p className="text-sm text-gray-500">Visit by appointment</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 rounded-full p-3 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: By appointment</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 text-sm">
                  For urgent matters or emergencies, please call our 24/7 support line at (555) 123-4567.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'How do I schedule a tour?',
                  answer: 'You can schedule a tour by calling us at (555) 123-4567 or by filling out the contact form above. We offer both in-person and virtual tours.',
                },
                {
                  question: 'What should I bring to a consultation?',
                  answer: 'Please bring any relevant medical records, a list of current medications, insurance information, and any questions you may have about our services.',
                },
                {
                  question: 'How do consultations work?',
                  answer: 'We schedule home consultations at your convenience to assess care needs and discuss our in-home services. This allows us to give you our full attention and create a personalized care plan.',
                },
                {
                  question: 'How quickly can you start in-home care services?',
                  answer: 'We can often begin in-home care services within a few days, depending on caregiver availability. Contact us to discuss your specific timeline and needs.',
                },
              ].map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
