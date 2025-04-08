'use client';
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />
      <HeroSection />
    </main>
  );
}
