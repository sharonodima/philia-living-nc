import Hero from '@/components/Hero';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - Philia Living',
  description: 'Learn about how we collect, use, and protect your personal information.',
};

export default function Privacy() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="Your Privacy Matters"
        description="We are committed to protecting your privacy and handling your personal information with care."
        backgroundClass="bg-gradient-to-r from-gray-700 to-gray-900"
      />

      {/* Last Updated */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <p className="text-center text-gray-600">
            <strong>Last Updated:</strong> January 1, 2026
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Introduction</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At Philia Living ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Privacy Commitment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Data Protection',
                description: 'We implement industry-standard security measures to protect your information.',
              },
              {
                icon: Lock,
                title: 'Secure Storage',
                description: 'Your data is stored securely and accessed only by authorized personnel.',
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'We are transparent about what data we collect and how we use it.',
              },
              {
                icon: FileText,
                title: 'Your Rights',
                description: 'You have rights regarding your personal data, including access and deletion.',
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We may collect the following types of information:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Personal Information:</strong> Name, email address, phone number, mailing address</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Medical Information:</strong> Health records and care-related information (with consent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Usage Data:</strong> Website analytics, browser type, pages visited</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Communication Data:</strong> Records of correspondence with our team</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Provide and improve our care services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Respond to inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Process applications and manage in-home care services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Send important updates and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Comply with legal and regulatory requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Improve our website and user experience</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Share Your Information
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Service Providers:</strong> With trusted third parties who assist in operations (e.g., healthcare providers, IT services)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>With Your Consent:</strong> When you explicitly authorize us to share information</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Data Security
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Encryption of sensitive data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Secure servers and networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Access controls and authentication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Regular security assessments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Your Privacy Rights
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Access:</strong> Request access to your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Correction:</strong> Request correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Opt-Out:</strong> Unsubscribe from marketing communications</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Cookies and Tracking
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Children's Privacy
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Changes to This Policy
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="space-y-4 text-lg mb-8">
              <p><strong>Email:</strong> privacy@philialiving.com</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Mail:</strong> Philia Living, North Carolina, USA</p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
