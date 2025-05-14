import ChooseUs from "@/components/ChooseUs";
import Community from "@/components/Community";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MemberIntro from "@/components/MemberIntro";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners/>
      <Features />
      <ChooseUs />
      <Tools/>
      <MemberIntro />
      <Community />
      <Faq />
      <Cta />
      <Footer/>
    </main>
  );
}
