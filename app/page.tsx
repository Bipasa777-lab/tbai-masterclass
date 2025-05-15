import ChooseUs from "@/components/ChooseUs";
import Community from "@/components/Community";
import Cta from "@/components/Cta";
import FAQSection from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MemberIntro from "@/components/MemberIntro";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import ShowVideo from "@/components/ShowVideo";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero id='overview'/>
      <Partners />
      <Features id='features' />
      <ShowVideo id='demo'/>
      <ChooseUs id='curriculum'/>
      <Tools id='tools'/>
      <MemberIntro id="instructor" /> 
      <Community id='community' />
      <FAQSection />
      <Cta />
      <Footer />
    </main>
  );
}
