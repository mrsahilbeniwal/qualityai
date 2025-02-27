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
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Effortlessly highlight the key features of your app
              </h2>
              <p className="text-xl font-light">
                Our app makes it easy to showcase your key features. With customizable sections, you can highlight the
                most important aspects of your product. More to come.
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/phone.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
          }
        />
        <Customers />
        <div className="relative flex items-center justify-center h-screen bg-black">
          <div className="relative z-10 text-white text-center">
            <h1 className="text-5xl font-bold">Welcome to My Website</h1>
            <p className="text-xl mt-4">A futuristic experience with three.js</p>
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
