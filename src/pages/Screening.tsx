import { ScreeningHero } from '../components/screening/ScreeningHero';
import { ScreeningFeatures } from '../components/screening/ScreeningFeatures';
import { ScreeningPricing } from '../components/screening/ScreeningPricing';

export function Screening() {
  return (
    <div className="bg-white">
      <ScreeningHero />
      <ScreeningFeatures />
      <ScreeningPricing />
    </div>
  );
}