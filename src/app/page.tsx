"use client";

import { AboutYou } from "@/components/AboutYou/AboutYou";
import { Stepper } from "@/components/Stepper";
import { Title } from "@/components/Title";
const Home: React.FC = () => {
  return (
    <div className="bg-gray-scale-15 w-full h-full">
      <div className="mx-auto max-w-[680px] gap-5 py-7">
        <Title />
        <div>
          <Stepper state={3} />
          <AboutYou />
        </div>
      </div>
    </div>
  );
};

export default Home;
