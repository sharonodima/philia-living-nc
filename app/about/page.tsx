import Hero from '@/components/Hero';
import { Target, Eye, Award, Heart } from 'lucide-react';

export const metadata = {
  title: 'About Us - Our Mission & Values',
  description: 'Learn about Philia Living\'s mission to provide compassionate in-home care throughout North Carolina. Discover our values, experienced team, and commitment to helping clients age with dignity at home.',
  keywords: ['about Philia Living', 'home care mission', 'caregiving values', 'North Carolina home care provider', 'compassionate care'],
  alternates: {
    canonical: 'https://philialiving.com/about',
  },
  openGraph: {
    title: 'About Philia Living - Our Mission & Values',
    description: 'Dedicated to providing compassionate in-home care with dignity and respect',
    url: 'https://philialiving.com/about',
  },
};

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every interaction with empathy, kindness, and understanding.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.',
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'We maintain honesty, transparency, and ethical practices.',
    },
    {
      icon: Eye,
      title: 'Respect',
      description: 'We honor the dignity and individuality of every person we serve.',
    },
  ];

  return (
    <>
      <Hero
        title="About Philia Living"
        subtitle="Our Story"
        description="Dedicated to providing compassionate, professional in-home care that enriches lives and brings peace of mind to families in the comfort of their own homes."
      />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-lavender">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white text-primary-600 rounded-full mb-6">
                <Target size={36} />
              </div>
              <h2 className="text-3xl font-serif font-normal text-primary-700 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional, person-centered in-home care that enhances the quality of life for individuals and families in North Carolina. We bring compassionate care directly to your home, helping you thrive with dignity, respect, and independence in your own familiar surroundings.
              </p>
            </div>

            <div className="card-cream">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white text-primary-600 rounded-full mb-6">
                <Eye size={36} />
              </div>
              <h2 className="text-3xl font-serif font-normal text-primary-700 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the leading provider of compassionate in-home care services in North Carolina, recognized for our commitment to excellence, innovation, and the well-being of those we serve. We envision a community where every individual receives the care and support they deserve in the comfort of their own home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              These values guide everything we do and shape the care we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Our Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Philia Living was founded with a simple yet powerful belief: everyone deserves to live with dignity, comfort, and joy in their own home. What started as a small initiative has grown into a comprehensive in-home care service provider, serving hundreds of families across North Carolina.
              </p>
              <p>
                Our journey began when our founders recognized the need for compassionate, professional caregivers who would visit clients in their homes, truly prioritizing the well-being of individuals and their families. They envisioned in-home care that is not just a service, but a commitment to enhancing lives while maintaining the independence and comfort of familiar surroundings.
              </p>
              <p>
                Today, Philia Living stands as a testament to that vision. With a dedicated team of professional caregivers who bring quality care directly to your home, we continue to set the standard for in-home care services in our community.
              </p>
              <p>
                We believe that quality care goes beyond meeting basic needs. It&apos;s about creating meaningful connections, fostering independence, and ensuring that every person we serve feels valued, respected, and supported in the place they call home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Philia Living?</h2>
            <p className="text-xl text-primary-50 max-w-2xl mx-auto">
              Here are just a few reasons why families trust us with their care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Experienced and trained professional caregivers',
              'Personalized in-home care plans tailored to individual needs',
              'Care provided in your own safe, comfortable home',
              'Family-centered approach to in-home care',
              'Flexible scheduling and reliable support',
              'Commitment to dignity and independence at home',
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4 flex-shrink-0">
                  <Heart size={20} />
                </div>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
