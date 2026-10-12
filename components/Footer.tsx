import Link from 'next/link';
import { siteFonts } from './SiteFonts';
export default function Footer() {
  return <footer className={`wix-footer ${siteFonts}`}><p>© Philia Living Homecare</p><Link href="/">CLICK HERE TO RETURN HOME</Link></footer>;
}
