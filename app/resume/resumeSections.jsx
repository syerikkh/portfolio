import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { ScrollArea } from "../../components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

const about = {
  title: "About me",
  description: "I'm Syerik",
  info: [
    { fieldName: "Name", fieldValue: "Syerik Khuanysh" },
    { fieldName: "Phone", fieldValue: "+97694241021" },
    { fieldName: "Nationality", fieldValue: "Mongolian" },
    { fieldName: "Email", fieldValue: "khsyerik@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Turkish, Kazakh" },
  ],
};

const experience = {
  title: "My experience",
  description: "Here's a summary of my experience.",
  items: [
    {
      company: "Franklyn Discovery School",
      position: "Reading Tutor",
      duration: "2023-2024",
    },
    { company: "Toki", position: "Delivery", duration: "2022-2023" },
    {
      company: "Mediana Restaurant",
      position: "Waiter",
      duration: "2020-2022",
    },
  ],
};

const education = {
  title: "My education",
  description: "Here's a summary of my educational background.",
  items: [
    {
      institution: "Pinecone Academy",
      degree: "Full Stack Web Development",
      duration: "2023-2024",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Here are some of the technologies I'm familiar with.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaDatabase />, name: "PostgreSql, MongoDb" },
  ],
};

export const AboutMe = () => (
  <div className="flex flex-col gap-[30px]">
    <h3 className="text-4xl text-center lg:text-left font-bold">
      {about.title}
    </h3>
    <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
      {about.description}
    </p>
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
      {about.info.map((item, index) => (
        <li key={index} className="flex justify-start gap-4">
          <span className="text-white/60">{item.fieldName}</span>
          <span className="text-xl">{item.fieldValue}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Experience = () => (
  <div className="flex flex-col gap-[30px] text-center lg:text-start">
    <h3 className="text-4xl font-bold">{experience.title}</h3>
    <p className="max-w-[600px] text-white/60">{experience.description}</p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {experience.items.map((item, index) => (
          <li
            key={index}
            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
          >
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
              {item.position}
            </h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white/60">{item.company}</p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);

export const Education = () => (
  <div className="flex flex-col gap-[30px] text-center lg:text-start">
    <h3 className="text-4xl font-bold">{education.title}</h3>
    <p className="max-w-[600px] text-white/60">{education.description}</p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {education.items.map((item, index) => (
          <li
            key={index}
            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
          >
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
              {item.degree}
            </h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white/60">{item.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);

export const Skills = () => (
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60">{skills.description}</p>
    </div>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
      {skills.skillList.map((skill, index) => (
        <li key={index} className="flex items-center gap-2 text-white">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                  {skill.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  </div>
);
