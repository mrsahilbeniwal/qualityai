import Header from "components/Header";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import BackgroundPaths from "components/BackgroundPaths";
import React from 'react';
import dynamic from 'next/dynamic';
import Projects from 'src/components/projects';
import styles from 'src/app/page.module.scss';
import GridBall from "components/GridBall";
import Circles from "components/Circles";
import CoverDemo from "components/cover-demo";
import SparklesDemo from "components/SparklesDemo";
import Timeline from "components/Timeline";
import Lamp from "components/Lamp";
import InputUi from "components/InputUi";

const Earth = dynamic(() => import('src/components/earth'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>
})


export default function Page() {
  return (
    
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <SparklesDemo />
        <CoverDemo />
        <Timeline />
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
          <div className="max-w-[690px] mx-auto pt-20 px-4">
            <h1 className="text-5xl font-serif mb-8">Working to Excel</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Setting direction is one of the most important thing we do when building a product and company. A clear direction aligns everyone to work toward the same goals.
              At Quality AI, we have done that my adapting an incremental approach to building our products.
            </p>
            <GridBall />
          </div>
        </div>
        <InputUi />
        <Lamp />
        <BackgroundPaths/>
      </main>
      <Footer />
    </div>
  );
}
