"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+976 94241021",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "khsyerik@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bayanzurkh, Suvdan Sondor, Apartment 76",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    description: "syerikkk",
    link: "https://www.instagram.com/syerikkk/",
  },
  {
    icon: <FaFacebook />,
    title: "Facebook",
    description: "Syerik Khuanysh",
    link: "https://www.facebook.com/syerik.kh/",
  },
];
const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex items-center">
          <ul className="grid grid-cols-2 gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex lg:flex-row flex-col gap-6">
                  <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    {item.link ? (
                      <Link href={item.link}>
                        <div className="text-[28px]">{item.icon}</div>
                      </Link>
                    ) : (
                      <div className="text-[28px]">{item.icon}</div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="lg:text-xl text-md">{item.description}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
