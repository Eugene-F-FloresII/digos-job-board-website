import { HomeEmployerCallout } from '@/components/home/HomeEmployerCallout';
import { HomeFooter } from '@/components/home/HomeFooter';
import { HomeHero } from '@/components/home/HomeHero';
import { HomePathways } from '@/components/home/HomePathways';
import { HomeTrustSection } from '@/components/home/HomeTrustSection';
import { UrgentJobsCarousel } from '@/components/home/UrgentJobsCarousel';

export default function HomePage() {
  return (
    <div className="font-nunito">
      <HomeHero />
      <UrgentJobsCarousel />
      <HomePathways />
      <HomeTrustSection />
      <HomeEmployerCallout />
      <HomeFooter />
    </div>
  );
}
