import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "../components/Socials";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between md:pt-8 md:pb-24">
          <div className="text-center md:text-left">
            <span>Software Developer</span>
            <h1 className="md:text-5xl text-4xl mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Syerik Khuanysh</span>
            </h1>
            <p className="text-white/80 mb-6 max-w-[500px]">
              I’m a 22-year-old software developer passionate about building
              websites. I’m eager to collaborate with companies to bring
              innovative ideas to life.{" "}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Button className="border border-accent text-accent hover:bg-accent-hover hover:text-primary rounded-xl">
                <div className="flex gap-2 uppercase items-center">
                  Download CV <FiDownload />
                </div>
              </Button>
              <div>
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none mb-8 md:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
