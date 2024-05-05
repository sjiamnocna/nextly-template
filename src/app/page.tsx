// @ts-nocheck

import React from 'react'

import Hero from "../components/hero";
import Navbar, { NavItem } from "../components/navbar";
import { Metadata } from "next";
import SectionTitle from '@/components/sectionTitle';
import Benefits, { benefitOne, benefitTwo } from '@/components/benefits';
import Testimonials from '@/components/testimonials';
import Faq from '@/components/faq';
import Cta from '@/components/cta';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'NexTSly - Free Nextjs & TailwindCSS Landing Page Template',
  description: 'NexTSly is a free landing page template built with latest next.js (with Typescript) & Tailwind CSS',
}

const topMenuContent: NavItem[] = [
  {
    title: "Product",
    url: "#",
  },
  {
    title: "Company",
    url: "#",
  },
  {
    title: "Blog",
    url: "#",
  },
  {
    title: "About",
    url: "#",
  },
  {
    title: "Contact us",
    url: "#",
  },

]

const Home = () => {
  return (
    <>
      <Navbar items={topMenuContent} />
      <Hero />
      <SectionTitle
        pretitle="NexTSly Benefits"
        title=" Why should you use this landing page">
        NexTSly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;