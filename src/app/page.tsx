"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Film, Tag, Users, TrendingUp, Play, Star, Zap, Shield, Target, Award, Sparkles, Heart, DollarSign, HelpCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[{name: "Features", id: "features"}, {name: "Services", id: "services"}, {name: "Pricing", id: "pricing"}, {name: "Why Us", id: "about"}, {name: "Contact", id: "contact"}]}
          brandName="ReelZen"
          bottomLeftText="Cinematic Reels That Sell Stories"
          bottomRightText="contact@reelzen.in"
        />
      </div>

      <div id="hero" data-section="hero">
        <FeatureBento
          features={[
            {title: "Cinematic Quality", description: "Professional editing, transitions, and effects that make your content stand out.", bentoComponent: "reveal-icon", icon: Sparkles},
            {title: "Affordable Pricing", description: "Packages starting at ₹999 for every budget and business stage.", bentoComponent: "reveal-icon", icon: Tag},
            {title: "For Creators & Influencers", description: "Tailored branding and audience growth strategies built into every reel.", bentoComponent: "reveal-icon", icon: Users},
            {title: "Business Boost", description: "Reels designed to attract customers and enhance your advertisements.", bentoComponent: "reveal-icon", icon: TrendingUp}
          ]}
          title="Create Highly Cinematic Reels Starting at Just ₹999"
          description="For creators, influencers, and brands who want to captivate audiences and boost engagement with scroll-stopping visual storytelling."
          tag="Professional Phone Video Production"
          tagIcon={Film}
          tagAnimation="slide-up"
          buttons={[{text: "Get Started Today", href: "#pricing"}, {text: "View Samples", href: "#services"}]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          carouselMode="buttons"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureHoverPattern
          features={[
            {icon: Play, title: "Scroll-Stopping Visuals", description: "Capture attention instantly with cinematic quality that converts viewers into customers."},
            {icon: Star, title: "Professional Storytelling", description: "Every frame tells your brand story with premium production value and artistic direction."},
            {icon: Zap, title: "Quick Turnaround", description: "Get your cinematic reels fast without compromising on quality or creativity."},
            {icon: Shield, title: "Brand Consistency", description: "Maintain your visual identity across all reels with our consistent styling and editing approach."},
            {icon: Target, title: "Conversion Focused", description: "Every reel is optimized to drive engagement, followers, and sales for your brand."},
            {icon: Award, title: "Award-Winning Quality", description: "Professional production standards that compete with high-end production agencies."}
          ]}
          title="Why Choose ReelZen?"
          description="Engage more customers with scroll-stopping visuals and stand out in crowded feeds with cinematic storytelling."
          tag="Our Advantages"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="services" data-section="services">
        <MetricSplitMediaAbout
          tag="Our Services"
          tagIcon={Film}
          tagAnimation="slide-up"
          title="Cinematic Reel Packages Tailored For You"
          description="Choose from our expertly designed packages: Starter Pack (₹999) includes 1 cinematic reel with professional editing. Influencer Pack offers multiple reels per month with branding consistency. Business Pack delivers ad-focused reels designed to drive conversions and customer acquisition."
          metrics={[{value: "3 Packages", title: "Service Tiers Available"}, {value: "Starting ₹999", title: "Affordable Professional Quality"}]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqlGRqMMHRC0HSytGKVh1s96Pj/uploaded-1773328399206-ybfv6973.png"
          imageAlt="Professional reel editing and production"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          testimonials={[
            {id: "1", name: "Priya Sharma", handle: "@priyacreates", testimonial: "ReelZen transformed my content strategy. My engagement went from 500 to 5000 views per reel in just two weeks. Absolutely game-changing!", imageSrc: "http://img.b2bpic.net/free-photo/content-business-woman-talking-smartphone-outdoors_1262-20534.jpg", imageAlt: "Priya Sharma"},
            {id: "2", name: "Arjun Patel", handle: "@arjunvlogs", testimonial: "The cinematic quality is unmatched. For ₹999, I'm getting production value that would cost me 10x at traditional agencies. Highly recommended!", imageSrc: "http://img.b2bpic.net/free-photo/portrait-successful-young-businessman-with-his-arms-crossed-looking-camera_23-2148176207.jpg", imageAlt: "Arjun Patel"},
            {id: "3", name: "Neha Singh", handle: "@nehastyle", testimonial: "Perfect for influencers who want professional results without the premium price tag. ReelZen's team really understands the creator economy.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-successful-middle-aged-business-leader_1262-5690.jpg", imageAlt: "Neha Singh"},
            {id: "4", name: "Amit Desai", handle: "CEO, DesaiTech", testimonial: "We saw a 45% increase in customer inquiries after using ReelZen's business reels. This is exactly what our brand needed for social selling.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-with-glasses_23-2148415937.jpg", imageAlt: "Amit Desai"},
            {id: "5", name: "Rohan Kumar", handle: "@rohanfitness", testimonial: "The turnaround time is incredible. I needed 5 reels for my fitness challenge, and they delivered studio-quality content in 72 hours.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-mature-woman-smiling_23-2148407645.jpg", imageAlt: "Rohan Kumar"},
            {id: "6", name: "Zara Malik", handle: "@zaradesigns", testimonial: "Finally found someone who gets the aesthetic I want. ReelZen's consistency in styling helped establish my brand voice across platforms.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-yellow-jacket-brush-stroke_23-2149020782.jpg", imageAlt: "Zara Malik"}
          ]}
          title="What Our Clients Say"
          description="Join hundreds of creators, influencers, and brands who've transformed their content with ReelZen's cinematic reels."
          tag="Social Proof"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          speed={40}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          plans={[
            {id: "starter", price: "₹999", name: "Starter Pack", buttons: [{text: "Get Started", href: "#contact"}, {text: "Learn More"}], features: ["1 cinematic reel", "Professional editing", "Transitions & effects", "Music & sound design", "4K quality", "5-day turnaround"]},
            {id: "influencer", badge: "Most Popular", badgeIcon: Star, price: "₹4,999", name: "Influencer Pack", buttons: [{text: "Start Influencing", href: "#contact"}, {text: "Customize"}], features: ["4 reels per month", "Brand consistency", "Custom music & audio", "Trending effects", "4K + trend-specific formats", "Priority 72-hour turnaround", "Monthly strategy call", "Unlimited revisions"]},
            {id: "business", price: "₹9,999", name: "Business Pack", buttons: [{text: "Boost Your Business", href: "#contact"}, {text: "Custom Quote"}], features: ["8 reels per month", "Ad-focused content", "Conversion optimization", "A/B testing variants", "Analytics-driven approach", "48-hour turnaround", "Monthly performance review", "Dedicated account manager", "Unlimited revisions & requests"]}
          ]}
          title="Choose Your Reel Package"
          description="Affordable cinematic quality for every stage of your growth journey. Start creating today."
          tag="Transparent Pricing"
          tagIcon={DollarSign}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          carouselMode="buttons"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {id: "1", title: "What's included in each reel package?", content: "Each package includes professional editing, transitions, effects, music, and sound design. Starter includes 1 reel, Influencer includes 4 monthly, and Business includes 8 monthly with analytics and optimization."},
            {id: "2", title: "How fast can I get my reels?", content: "Startup pack: 5 days. Influencer pack: 72 hours (priority). Business pack: 48 hours. Rush orders available for premium pricing."},
            {id: "3", title: "Do you offer unlimited revisions?", content: "Yes! Influencer and Business packages include unlimited revisions. Starter pack includes 2 revision rounds to ensure you're completely satisfied."},
            {id: "4", title: "What format do the reels come in?", content: "All reels are delivered in 4K quality, optimized for Instagram Reels, YouTube Shorts, and TikTok. We also provide format variations for different platforms."},
            {id: "5", title: "Can I provide my own footage and music?", content: "Absolutely! Send us your raw footage, product photos, or brand assets, and we'll transform them into cinematic reels. We also work with your preferred music."},
            {id: "6", title: "How do I get started?", content: "Click 'Book Your Reel Now,' choose your package, fill in your brief with details about your brand and goals, and our team will get in touch within 24 hours to start creating."},
            {id: "7", title: "Is there a contract or commitment?", content: "No contracts required. Starter and monthly packages are flexible. You can upgrade, downgrade, or pause anytime without penalties."},
            {id: "8", title: "What if I'm not happy with the results?", content: "We offer unlimited revisions to ensure you're happy. If you're still not satisfied after revisions, we offer a 50% refund within 7 days of delivery."}
          ]}
          title="Frequently Asked Questions"
          description="Everything you need to know about ReelZen's cinematic reel production services."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Book Your Reel"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          title="Your Story Deserves the Spotlight"
          description="Transform your vision into cinematic content that converts. Let's create something extraordinary together."
          buttons={[{text: "Book Your Reel Now", href: "#pricing"}, {text: "Contact Us", href: "mailto:contact@reelzen.in"}]}
          buttonAnimation="slide-up"
          background={{variant: "plain"}}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="ReelZen"
          columns={[
            {title: "Services", items: [{label: "Starter Pack", href: "#pricing"}, {label: "Influencer Pack", href: "#pricing"}, {label: "Business Pack", href: "#pricing"}]},
            {title: "Company", items: [{label: "About Us", href: "#"}, {label: "Our Team", href: "#"}, {label: "Blog", href: "#"}]},
            {title: "Support", items: [{label: "Help Center", href: "#faq"}, {label: "Contact Us", href: "mailto:contact@reelzen.in"}, {label: "FAQ", href: "#faq"}]},
            {title: "Social", items: [{label: "Instagram", href: "https://instagram.com"}, {label: "YouTube", href: "https://youtube.com"}, {label: "TikTok", href: "https://tiktok.com"}]}
          ]}
          copyrightText="© 2025 ReelZen | Cinematic Reels That Sell Stories"
        />
      </div>
    </ThemeProvider>
  );
}
