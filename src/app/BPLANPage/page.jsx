"use client";

import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/assets/BPLAN/BPlan-Img.png";
import image1 from "@/assets/BPLAN/startupImg-Photoroom.png";
import image2 from "@/assets/BPLAN/Financial Services-Img.png";
import image3 from "@/assets/BPLAN/ORK-img2.png";
import BplanVideo from "../../../public/BplanVideo/BplanVideo";

const BusinessConsultationPage = () => {
  return (
    <div>
      <Header />

      <section className="pt-8 pb-20 bg-gradient-to-b from-[#EAEEFE] to-[#183EC2] overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Business Consultation & Advisory
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Strategic guidance to accelerate your business growth and optimize operations. On industry trends, customer needs, and technological advancements to stay competitive. Encourage a culture of agility, where teams can quickly adapt to changes and seize new opportunities.
              </p>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <Image
                src={image}
                alt="About Us Image"
                className="md:absolute md:h-[65%] md:w-auto md:max-w-none md:left-6 md:top-16 lg:left-0"
              />
            </div>
          </div>
          <div className="flex gap-1 items-center ">
            <a href="#Services"><button className="btn btn-primary"> Our Services </button></a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <section id="services" className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
            <div className="container max-w-[1200px] mx-auto px-4">
              <h2 className="text-center text-4xl p-4 md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Strategic Consulting
              </h2>
              <BplanVideo></BplanVideo>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Growth Strategy",
                points: [
                  "Domestic market penetration strategies",
                  "International expansion planning",
                  "Market entry analysis and execution",
                  "Competitive positioning",
                ],
              },
              {
                title: "Business Planning",
                points: [
                  "B2B Strategy: Partnership development and channel optimization",
                  "B2C Planning: Consumer engagement and retention strategies",
                  "D2C Implementation: Direct-to-consumer channel development",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white shadow-lg rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-[#001E80]">{item.title}</h3>
                <ul className="mt-4 space-y-2 text-[#020D3E]">
                  {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="Services" className="py-20 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Financial Services
          </h2>
          <div className="md:flex items-center ">
            <div className="md:w-1/2">
              <ul className="space-y-4 text-lg text-[#020D3E]">
                {["Financial Modeling: Custom models for business scenarios",
              "Projections: Detailed forecasting and analysis",
              "Performance Metrics: KPI development and tracking",].map((service, index) => (
                  <li key={index} className="p-4 bg-white shadow-lg rounded-2xl">• {service}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={image2}
                alt="Startup Services Image"
                className="md:w-auto md:max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Startup Services
          </h2>
          <div className="md:flex items-center">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={image1}
                alt="Startup Services Image"
                className="md:w-auto md:max-w-sm"
              />
            </div>
            <div className="md:w-1/2">
              <ul className="space-y-4 text-lg text-[#020D3E]">
                {["Incubation: Guidance through early-stage growth",
                  "Pitch Deck Creation: Compelling investor presentations",
                  "Funding Strategy: Investment planning and preparation"].map((service, index) => (
                  <li key={index} className="p-4 bg-white shadow-lg rounded-2xl">• {service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>    

      <section className="py-20 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">

        <div className="container max-w-[1200px] mx-auto px-4">
          <h2 className="text-center text-4xl mb-5 md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          OKR Framework
          </h2>
          <div className="md:flex items-center ">
            <div className="md:w-1/2">
              <ul className="space-y-4 text-lg text-[#020D3E]">
                {["Framework Design: Custom OKR development",
              "Implementation: System setup and team training",
              "Monitoring: Regular review and adjustment",
              "KPI Development: Meaningful metrics alignment"].map((service, index) => (
                  <li key={index} className="p-4 bg-white shadow-lg rounded-2xl">• {service}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={image3}
                alt="Startup Services Image"
                className="md:w-auto md:max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Why Choose Our Advisory Services
          </h2>
          <ul className="mt-12 space-y-4 text-lg text-[#020D3E]">
            {[
              "Experienced consultants with industry expertise",
              "Data-driven approach to strategy development",
              "Proven methodologies for business growth",
              "Ongoing support and guidance",
              "Measurable results and ROI focus",
            ].map((reason, index) => (
              <li key={index} className="p-4 bg-white shadow-lg rounded-2xl">
                • {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessConsultationPage;