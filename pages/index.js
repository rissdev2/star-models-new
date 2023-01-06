import Collaboration from "../Components/Collaboration";
import Cooperation from "../Components/Cooperation";
import Hero from "../Components/Hero";
import Models from "../Components/Models";
import Navigation from "../Components/Navigation";
import SecondSec from "../Components/Second-sec";
import Testimonials from "../Components/Testimonials";
import Head from "next/head";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="h-[105vh] hero-sec">
        <Navigation />
        <Hero />
      </div>
      <SecondSec />
      <Cooperation />
      <Collaboration />
      <Models />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
