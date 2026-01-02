import Hero from '@/components/Hero';
import { User } from 'lucide-react';

export const metadata = {
  title: 'Meet the Team - Philia Living',
  description: 'Get to know the dedicated professionals who make Philia Living a trusted care provider.',
};

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Medical Director',
      bio: 'Board-certified physician with over 20 years of experience in geriatric care and patient wellness.',
    },
    {
      name: 'James Anderson',
      role: 'Director of Nursing',
      bio: 'Registered nurse with extensive experience in long-term care management and staff development.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Care Coordinator',
      bio: 'Passionate about creating personalized care plans that honor individual needs and preferences.',
    },
    {
      name: 'Michael Chen',
      role: 'Activities Director',
      bio: 'Dedicated to enriching lives through engaging programs, events, and meaningful activities.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Wellness Coordinator',
      bio: 'Specializes in health promotion, fitness programs, and holistic wellness approaches.',
    },
    {
      name: 'David Williams',
      role: 'Family Liaison',
      bio: 'Ensures open communication and strong partnerships between families and our care team.',
    },
  ];

  return (
    <>
      <Hero
        title="Meet Our Team"
        subtitle="The People Behind the Care"
        description="Our dedicated professionals are committed to providing exceptional care with compassion and expertise."
      />

      {/* Team Introduction Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Dedicated Professionals</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Philia Living, our team is our greatest asset. Each member brings unique skills, experience, and a genuine passion for helping others. We carefully select and train our staff to ensure they embody our values of compassion, excellence, and respect.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mb-6">
                  <User size={48} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Our Team Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Development</h3>
                <p className="text-gray-600">
                  Our team members participate in ongoing training to stay current with best practices, regulations, and innovative care approaches.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Care</h3>
                <p className="text-gray-600">
                  We work together as a unified team, ensuring coordinated care and consistent communication for the best outcomes.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Person-Centered Focus</h3>
                <p className="text-gray-600">
                  Every team member is committed to understanding and respecting the unique needs, preferences, and backgrounds of those we serve.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Partnership</h3>
                <p className="text-gray-600">
                  We view families as essential partners in care, maintaining open lines of communication and involving them in decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Joining Our Team?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            We're always looking for compassionate, dedicated professionals to join our mission of providing exceptional care.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us About Careers
          </a>
        </div>
      </section>
    </>
  );
}
