import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import BackgroundPaths from "components/BackgroundPaths";
import React from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from 'src/components/smoothScroll';
import Projects from 'src/components/projects';
import styles from 'src/app/page.module.scss';
import MarketMap from 'components/MarketMap';

const Earth = dynamic(() => import('src/components/earth'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>
})


export default function Page() {
  return (
    
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Customers />
        <MarketMap/>
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Highlight the key features
              </h2>
              <p className="text-xl font-light">
                Talk about some of the key features of your app that you want to highlight. Use the beautiful accordion
                to highlight the key features of your app.
              </p>
            </div>
          }
        />
        <SmoothScroll>
          <main className={styles.main}>
            <Earth />
            <Projects />
          </main>
        </SmoothScroll>
        <BackgroundPaths/>
      </main>
      <Footer />
    </div>
  );
}
