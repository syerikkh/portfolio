"use client";

import React from "react";
import {
  Experience,
  Education,
  Skills,
  AboutMe,
} from "..//resume/resumeSections";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import { ScrollArea } from "../../components/ui/scroll-area";
import { delay, motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex gap-[60px]">
          <TabsList className="flex flex-col gap-4 w-full max-w-[380px]">
            <div className="max-w-[380px] flex flex-col gap-3 mb-3">
              <h1 className="text-5xl text-white">Why hire me?</h1>
              <p className="text-md text-white/60">Because I am Great :)</p>
            </div>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <Skills />
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <AboutMe />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
