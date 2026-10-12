import Image from 'next/image';
import { HeartHandshake, HandHeart, ShieldCheck } from 'lucide-react';
import { teamMembers, testimonials } from '@/data/people';
import { siteFonts } from './SiteFonts';
import ContactForm from './ContactForm';
import Hero from './Hero';

const services = [
  { title: 'Personalized Care', description: 'Tailored to Your Needs', image: '/images/personalized-care.jpg' },
  { title: 'Skilled Nursing', description: 'Professional Medical Assistance', image: '/images/skilled-nursing.jpg' },
  { title: 'Therapy Services', description: 'Rehabilitation and Support', image: '/images/therapy-services.jpg' },
];
const benefits = [
  { title: 'Compassionate Care', icon: HeartHandshake, text: 'Our dedicated caregivers provide compassionate support and assistance, ensuring you receive the care and attention you deserve. We focus on building strong relationships with our clients to promote trust and well-being.' },
  { title: 'Professional Team', icon: HandHeart, text: 'Our experienced team of skilled nurses and therapists deliver high-quality care services to meet your health and wellness goals. We are dedicated to ensuring the best possible outcomes for our clients through expertise and commitment.' },
  { title: 'Personalized Approach', icon: ShieldCheck, text: 'We believe in a personalized approach to care, tailoring our services to your unique needs and preferences. Our goal is to empower you to live your best life with the support and assistance you need.' },
];

export default function WixHome() {
  return <>
    <Hero
      title="Let's Talk About Aging With Love!"
      subtitle="Quality and Affordable In-Home Health Care"
      description="Providing exceptional in-home care services in North Carolina with dedication, expertise, and a commitment to quality of life in the comfort of your own home."
      ctaText="Learn More About Us"
      ctaLink="/#about"
      backgroundImage="/images/hero-bg.avif"
      titleColor="#e5f3d5"
    />
    <div className={`wix-home ${siteFonts}`}>
    <section id="about" className="wix-about wix-dark">
      <div className="wix-about-copy"><span className="wix-pill">About us</span><h2>Passion-Driven Care, Delivered to Your Door</h2>
        <p>We strive to deliver exceptional home health care services tailored to meet your specific needs. Our experienced team of professionals provides compassionate and reliable care to enhance your quality of life and promote independence.</p></div>
      <div className="wix-about-collage">
        <Image src="/images/elder-woman-caretaker.avif" alt="An elderly woman receiving supportive care" width={300} height={300} className="wix-collage-top" />
        <Image src="/images/reading-braille-doctor.avif" alt="A caregiver supporting a client" width={300} height={300} className="wix-collage-left" />
        <Image src="/images/nurse-old-man.avif" alt="A nurse caring for an elderly man" width={300} height={300} className="wix-collage-right" />
      </div>
    </section>
    <section id="services" className="wix-services wix-section"><span className="wix-pill wix-pill-dark">Our services</span><h2>Discover Our Care Services</h2>
      <div className="wix-services-grid">{services.map(service => <article key={service.title}>
        <Image src={service.image} alt={service.title} width={650} height={620} /><h3>{service.title}</h3><p>{service.description}</p>
      </article>)}</div>
    </section>
    <section id="benefits" className="wix-benefits wix-dark wix-section">
      <div className="wix-benefits-intro"><div><span className="wix-pill">Benefits</span><h2>Why We Stand Out</h2></div>
        <p>At Philia Living Homecare, we prioritize patient well-being and offer personalized care plans to meet individual needs. Our team of skilled professionals ensures your comfort and safety at all times, providing reliable and compassionate support.</p></div>
      {benefits.map(benefit => <article className="wix-benefit-row" key={benefit.title}>
        <div className="wix-benefit-art"><benefit.icon size={160} strokeWidth={1} aria-hidden="true" /></div><div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
      </article>)}
    </section>
    <section id="team" className="wix-team">
      <div className="wix-team-intro"><h2>MEET THE TEAM</h2><p className="wix-team-subtitle">The Heart of Our Care</p>
        <p>Our dedicated care team at Philia Home Care consists of skilled and compassionate professionals who are committed to providing the highest quality of care to our clients. Each member of our team undergoes rigorous training and brings a wealth of experience to ensure the well-being and comfort of those we serve.</p></div>
      {teamMembers.map(member => <article className="wix-profile" key={member.name}>
        <div className="wix-profile-photo"><Image src={member.image} alt={member.name} fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
        <div className="wix-profile-copy wix-dark"><h3>{member.name}</h3><p>{member.role}</p></div>
      </article>)}
    </section>
    <section id="testimonials" className="wix-testimonials wix-section"><span className="wix-pill wix-pill-dark">Testimonials</span><h2>Real Stories, Real Impact</h2>
      <div className="wix-testimonial-grid">{testimonials.map(testimonial => <article key={testimonial.name}>
        <div className="wix-testimonial-quote"><blockquote>“{testimonial.text}”</blockquote><h3>{testimonial.name}</h3></div>
        <Image src={testimonial.image} alt={testimonial.name} width={400} height={350} />
      </article>)}</div>
    </section>
    <section id="contact" className="wix-contact wix-section"><h2>Contact Us</h2>
      <p className="wix-contact-intro">Please reach out to Philia Living Homecare for professional and personalized home health services. We are dedicated to assisting you in establishing a supportive environment at home.</p>
      <div className="wix-contact-grid"><div className="wix-contact-details"><h3>Marselline Holley</h3>
        <a href="mailto:marse@philialivingnc.com">marse@philialivingnc.com</a><a href="tel:9195198477">+1 (919) 519-8477</a><p>NC, USA</p>
        <Image src="/images/marselline-contact.jpg" alt="Marselline Holley" width={310} height={350} />
        <h3>Opening Hours</h3><dl><div><dt>Mon - Fri</dt><dd>12:00 am – 12:00 pm</dd></div><div><dt>Saturday</dt><dd>12:00 am – 12:00 pm</dd></div><div><dt>Sunday</dt><dd>12:00 am – 12:00 pm</dd></div></dl>
      </div><div className="wix-contact-form"><ContactForm /></div></div>
      <iframe title="Map of North Carolina service area" src="https://maps.google.com/maps?q=North%20Carolina%2C%20USA&output=embed" loading="lazy" className="wix-map" referrerPolicy="no-referrer-when-downgrade" />
    </section>
    <a href="#main-content" className="wix-back-top" aria-label="Back to top">↑</a>
  </div></>;
}
