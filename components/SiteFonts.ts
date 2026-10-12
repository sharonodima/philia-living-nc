import { Playfair_Display, Sora } from 'next/font/google';

export const displayFont = Playfair_Display({ subsets: ['latin'], weight: ['400'], variable: '--wix-display' });
export const bodyFont = Sora({ subsets: ['latin'], weight: ['300', '400'], variable: '--wix-body' });
export const siteFonts = `${displayFont.variable} ${bodyFont.variable}`;
