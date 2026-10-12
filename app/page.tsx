import WixHome from '@/components/WixHome';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Philia Living Homecare | Affordable Home Healthcare in North Carolina',
  description: 'Compassionate, personalized home health care from Philia Living Homecare in North Carolina. Lets talk about aging with love.',
  alternates: { canonical: 'https://www.philialivingnc.com/' },
};
export default function Home() { return <WixHome />; }
