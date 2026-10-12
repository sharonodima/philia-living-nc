'use client';

import { useEffect, useRef, useState } from 'react';

export default function BenefitCard({ title, text, image, tone }: { title: string; text: string; image: string; tone: string }) {
  const row = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = row.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <article ref={row} className={`wix-benefit-row wix-benefit-${tone}`} data-visible={visible}>
    <div className="wix-benefit-art" aria-hidden="true"><div className="wix-benefit-circle">
      {/* Original Wix vector artwork is decorative beside the text heading. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" width={100} height={tone === 'cream' ? 69 : 83} />
    </div></div>
    <div className="wix-benefit-panel"><h3>{title}</h3><p>{text}</p></div>
  </article>;
}
