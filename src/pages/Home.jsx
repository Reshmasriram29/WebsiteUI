import React from "react";
import LeadCaptureModal from "@/components/landing/LeadCaptureModal";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import DifferentiationSection from "@/components/landing/DifferentiationSection";
import CourseOverview from "@/components/landing/CourseOverview";
import SyllabusSection from "@/components/landing/SyllabusSection";
import MentorSection from "@/components/landing/MentorSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import LinkedInBranding from "@/components/landing/LinkedInBranding";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{background: "#050816"}}>
      <LeadCaptureModal />
      <Navbar />
      <HeroSection />
      <DifferentiationSection />
      <CourseOverview />
      <SyllabusSection />
      <BenefitsSection />
      <MentorSection />
      <LinkedInBranding />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}