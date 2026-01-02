import Hero from '@/components/Hero';
import { Eye, Ear, Keyboard, Smartphone, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Accessibility Statement - Philia Living',
  description: 'Our commitment to accessibility and ensuring our website and services are available to everyone.',
};

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      features: [
        'High contrast color schemes',
        'Readable font sizes and clear typography',
        'Alt text for all images',
        'Screen reader compatibility',
      ],
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      features: [
        'Full keyboard navigation support',
        'Focus indicators on interactive elements',
        'Skip navigation links',
        'Logical tab order',
      ],
    },
    {
      icon: Smartphone,
      title: 'Device Compatibility',
      features: [
        'Responsive design for all screen sizes',
        'Mobile-friendly interface',
        'Touch-friendly controls',
        'Compatible with assistive technologies',
      ],
    },
  ];

  return (
    <>
      <Hero
        title="Accessibility Statement"
        subtitle="Our Commitment"
        description="We are committed to ensuring digital accessibility for people of all abilities."
      />

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Our Accessibility Commitment</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At Philia Living, we believe that everyone should have equal access to information and services. We are committed to ensuring that our website and digital platforms are accessible to people of all abilities, including those with visual, hearing, motor, and cognitive disabilities.
              </p>
              <p>
                We continuously work to improve the accessibility of our website and strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Accessibility Features</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our website includes numerous features to ensure accessibility for all users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessibilityFeatures.map((category, index) => (
              <div key={index} className="card">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <category.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckCircle size={16} className="text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Standards We Follow</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Our website aims to conform to the following accessibility standards:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines published by the W3C Web Accessibility Initiative (WAI)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>Section 508:</strong> Standards from the U.S. Rehabilitation Act</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>ADA:</strong> Americans with Disabilities Act requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assistive Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Compatible Assistive Technologies</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our website is designed to work with the following assistive technologies:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Screen readers (JAWS, NVDA, VoiceOver)',
                'Screen magnification software',
                'Speech recognition software',
                'Alternative input devices',
                'Browser text-to-speech',
                'Browser zoom features',
              ].map((tech, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Efforts Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Our Ongoing Efforts</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Accessibility is an ongoing effort. We regularly:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Review and test our website for accessibility issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Train our team on accessibility best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Update our content to meet current accessibility standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Seek feedback from users with disabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Help Us Improve
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              If you experience any difficulty accessing our website or have suggestions for improvement, please contact us. We value your feedback and are committed to providing an accessible experience for all users.
            </p>
            <div className="space-y-4 text-lg">
              <p><strong>Email:</strong> accessibility@philialiving.com</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
