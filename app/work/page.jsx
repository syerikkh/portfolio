"use client";

import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "../../components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Expense Tracker",
    title: "project 1",
    description: (
      <>
        The Expense Tracker Web App allows users to sign up and log in to manage
        their finances. Users can create categories, add transactions for both
        expenses and income, and view visual insights through charts on their
        dashboard. JWT tokens are stored in cookies for secure authentication.
        <br /> <br />
        Sample User Credentials:: Email: ben@gmail.com, Password: ben1234
      </>
    ),
    stack: [
      { name: "PostgreSql" },
      { name: "Express.js" },
      { name: "Next.js" },
      { name: "DaisyUI" },
      { name: "JWT Authentication" },
    ],
    image: "/Tracker.png",
    live: "https://expense-tracker-psi-amber.vercel.app/",
    github: "https://github.com/syerikkh/expense_tracker",
  },
  {
    num: "02",
    category: "travel",
    title: "project 2",
    description: (
      <>
        A travel management web app with user authentication and admin features.
        Admin can create travel packages and view users. Users can view travel
        details, add to cart, and delete items. JWT tokens are stored in cookies
        for secure authentication. Pagination is implemented for travel data.
        <br /> <br />
        Admin Credentials: Email: admin@gmail.com, Password: admin1234
      </>
    ),
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "Next.js" },
      { name: "Cloudinary" },
      { name: "JWT Authentication" },
    ],
    image: "/Travel.png",
    live: "https://travel-phi-bice.vercel.app/",
    github: "https://github.com/syerikkh/Travel",
  },
  {
    num: "03",
    category: "frontend project",
    title: "project 3",
    description: "I created a blog website with data fetching functionality.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Next.js" }],
    image: "/Blog.png",
    live: "https://blog-eight-jade.vercel.app",
    github: "https://github.com/syerikkh/blog/tree/main",
  },

  {
    num: "04",
    category: "More projects coming soon...",
    title: "More projects coming soon",
    description: "Stay tuned for more projects!",
    stack: [],
    image: "/Coming-soon.jpg",
    live: "",
    github: "",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-white">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderButtons
                iconsStyles="w-full"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                containerStyles="flex gap-2 absolute right-0 w-full justify-between bottom-0 z-20 lg:w-max lg:justify-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkPage;
