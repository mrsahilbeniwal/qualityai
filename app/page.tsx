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
import BeamsBackground from "components/BackgroundBeams";
import GridBall from "components/GridBall";
import Block from "components/Block";

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
        <Block />
        <Customers />
        <div className="min-h-screen bg-black text-white">
          <div className="max-w-[690px] mx-auto pt-20 px-4">
            <h1 className="text-5xl font-serif mb-8">Set the product direction</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Setting direction is one of the most important things you'll do when building a product and company. A clear direction aligns everyone to work toward the same goals.
            </p>
            <GridBall />
          </div>
        </div>
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
