import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import BackgroundSection from '@/components/BackgroundSection';
import VideoSection from '@/components/VideoSection';
import PlatformSection from '@/components/PlatformSection';
import ContentSection from '@/components/ContentSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const BACKGROUND_IMAGE = '/horse_competition_hero.png';

export default function Home() {
  const mainFeatures = [
    {
      title: 'Event Management App',
      description:
        'SaddleBook receives, organizes and lets you manage all of your entries, schedules and results anywhere and anytime.',
      items: [
        'Become a SaddleBook Producer Now!',
        'Eliminate downloads with cutting edge cloud based technology',
        'Secure program instantly accessible and completely mobile',
        'Post event status and scoring from any location',
        'Features provide arena status through push notification',
      ],
    },
    {
      title: 'Connecting People and Events',
      description:
        'SaddleBook expands your customer reach by publishing your event to people already interested in horse competitions.',
      items: [
        'Increase the size of your events',
        'Grow your network by connecting to relevant people',
        'Publish your event to uniquely focused traffic',
        'Allow participants to share your event with others',
        'Expand awareness of your event',
        'Develop and engage new and existing fans for your event and your participants',
      ],
    },
    {
      title: 'Fully Integrated',
      description:
        'SaddleBook allows you to promote your event, receive entries and payments, manage your show day schedule and publish scores and results all in one place.',
      link: {
        text: 'more...',
        href: '#more',
      },
    },
    {
      title: 'Financial Benefits',
      description:
        'SaddleBook has no up front costs or fees and allows you to receive payments for your event long before show day.',
      link: {
        text: 'more...',
        href: '#more',
      },
    },
  ];

  const successFeature = [
    {
      title: 'Success with SaddleBook!',
      description:
        'We care about your success using SaddleBook. Tap here to head over to our Rider & Producer Success page to learn more',
    },
  ];

  const platformFeatures = [
    {
      title: 'Registration, Arena Management, Scoring and Results',
      description:
        'An end-to-end system for your event all in one single location.',
      link: {
        text: 'more...',
        href: '#more',
      },
    },
    {
      title: 'Designed For All Horse Competitions',
      description: 'Unique features for each competition and discipline.',
      link: {
        text: 'more...',
        href: '#more',
      },
    },
    {
      title: 'Eliminate Paperwork',
      description:
        'Maintain all of your event documentation in one location with easy access, eliminating the need for papers and files.',
      link: {
        text: 'more...',
        href: '#more',
      },
    },
  ];

  const focusFeatures = [
    {
      title: 'Easy and Convenient for Riders',
      description:
        'SaddleBook allows the competitors to enter, manage and maintain current information about their horses, entries and results in one location.',
      link: {
        text: 'more...',
        href: '#more',
      },
    },
    {
      title: 'Producer Centered',
      description:
        'SaddleBook is designed to let the event producer focus on hosting a outstanding event, leaving the stress to the competition.',
      link: {
        text: 'more...',
        href: '#more',
      },
    },
    {
      title: 'Secure',
      description:
        'Using the latest in technology to protect you and your participants.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection
        backgroundImage={BACKGROUND_IMAGE}
        smallTitle="SADDLE UP WITH SADDLEBOOK!"
        title="The complete online solution for horse competitions, from entries to management."
        showCategories={true}
      />

      <FeatureSection title="Saddle Up with SaddleBook!" features={mainFeatures} />

      <FeatureSection title="" features={successFeature} />

      <BackgroundSection
        backgroundImage={BACKGROUND_IMAGE}
        smallTitle="WHY CHOOSE SADDLEBOOK?"
        title="Time is Valuable"
        showCategories={true}
      />

      <VideoSection
        title="Why Choose SaddleBook?"
        subtitle="Time is Valuable - Choose SaddleBook"
      />

      <PlatformSection
        backgroundImage={BACKGROUND_IMAGE}
        title="SADDLEBOOK® EVENT MANAGEMENT PLATFORM"
        subtitle="Let SaddleBook jumpstart your competition."
      />

      <FeatureSection
        title="SaddleBook® Event Management Platform"
        features={platformFeatures}
      />

      <ContentSection
        backgroundImage={BACKGROUND_IMAGE}
        title="SaddleBook. An all in one horse event management platform capable of handling competitions of any type or scale with state of the art cloud based technology."
        subtitle="FOCUS ON WHAT IS IMPORTANT"
      />

      <FeatureSection title="" features={focusFeatures} />

      <TestimonialSection
        backgroundImage={BACKGROUND_IMAGE}
        title="TESTIMONIALS"
        quote="SaddleBook saved my show. When the program I was using was not able to function the day before my event, SaddleBook rode in and managed my 400 horse event! Thank you SaddleBook"
      />

      <CTASection
        backgroundImage={BACKGROUND_IMAGE}
        title="Have fun!"
        description="Enjoy your horse and contact SaddleBook to manage your next competition."
      />

      <ContentSection
        title="Contact SaddleBook to manage your next competition"
        content={
          <div className="space-y-4">
            <a
              href="mailto:Info@saddlebook.com"
              className="text-xl text-blue-600 hover:text-blue-700 font-medium"
            >
              Info@saddlebook.com
            </a>
          </div>
        }
      />

      <CTASection
        backgroundImage={BACKGROUND_IMAGE}
        title="Let's Ride!"
        primaryButton={{ text: 'Sign Up For Free', href: '#signup' }}
        secondaryButton={{ text: 'Sign In', href: '#signin' }}
      />

      <Footer />
    </main>
  );
}
