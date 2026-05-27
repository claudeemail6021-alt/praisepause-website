import Navbar       from '@/components/Navbar';
import Hero          from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks    from '@/components/HowItWorks';
import Features      from '@/components/Features';
import Testimonials  from '@/components/Testimonials';
import LeadMagnet    from '@/components/LeadMagnet';
import SocialProof   from '@/components/SocialProof';
import FAQ           from '@/components/FAQ';
import FinalCTA      from '@/components/FinalCTA';
import Footer        from '@/components/Footer';
import StickyBar     from '@/components/StickyBar';

export default function HomePage() {
  return (
    <>
      {/* Fixed navigation */}
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Problem → Solution */}
        <ProblemSolution />

        {/* 3. How It Works */}
        <HowItWorks />

        {/* 4. Features */}
        <Features />

        {/* 5. Testimonials */}
        <Testimonials />

        {/* 6. Lead Magnet — PDF email signup */}
        <LeadMagnet />

        {/* 7. Social Proof + Launch Urgency */}
        <SocialProof />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile sticky download bar (appears after scrolling) */}
      <StickyBar />
    </>
  );
}
