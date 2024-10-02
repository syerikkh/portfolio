"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 5,
    text: "Projects completed",
  },
  {
    num: 10,
    text: "Technologies mastered",
  },
  {
    num: 119,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto pb-8">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-1 gap-4 items-center justify-center"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-3xl md:text-6xl font-extrabold"
                />
                <p className="text-white/80 leading-snug">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
