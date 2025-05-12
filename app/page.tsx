import ChooseUs from "@/components/ChooseUs";
import Community from "@/components/Community";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import MemberIntro from "@/components/MemberIntro";
import Navbar from "@/components/Navbar";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <ChooseUs />
      <MemberIntro />
      <Tools/>
      <Community />
      <Faq />
      <Cta />
    </main>
  );
}
