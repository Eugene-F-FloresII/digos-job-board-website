import Image from 'next/image';
import { JobSearchForm } from '@/components/jobs/JobSearchForm';
import { withBasePath } from '@/lib/paths';

export function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate font-nunito">
      <div className="relative h-[500px] overflow-hidden sm:h-[535px]">
        <Image
          src={withBasePath('/images/digos-festival-scene.svg')}
          alt="Illustration of a community festival with dancers, musicians, and festive banners; not a photograph of a real Digos event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="relative mx-auto flex h-full max-w-7xl items-start px-5 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-[74px]">
          <div className="ml-0 max-w-[560px] rounded-lg bg-white/85 px-4 py-3 backdrop-blur-sm sm:ml-[16%] sm:px-6 sm:py-4 lg:ml-[24%] lg:max-w-[620px]">
            <h1 id="hero-title" className="mb-4 max-w-[590px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[58px]">
              <span>Find your next</span>{' '}<span className="sm:block">opportunity in Digos.</span>
            </h1>
            <p className="mb-0 max-w-[530px] text-base leading-7 text-body-strong sm:text-lg sm:leading-8">
              Search local openings by role and barangay. Compare pay, location, and how to get there before you apply.
            </p>
          </div>
        </div>
      </div>
      <JobSearchForm compact homeHero />
    </section>
  );
}
