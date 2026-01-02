import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundClass?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundClass = 'bg-gradient-to-r from-primary-600 to-primary-800',
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className={`${backgroundClass} text-white py-20 md:py-32 relative ${backgroundImage ? 'bg-cover bg-center' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-primary-900 bg-opacity-60"></div>
      )}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-primary-100 text-lg md:text-xl mb-4 font-medium">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {ctaText}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
