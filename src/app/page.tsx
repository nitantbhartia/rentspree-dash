import { Hero } from '@/features/home/components/Hero';
import { Features } from '@/features/home/components/Features';
import { CTA } from '@/features/home/components/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}