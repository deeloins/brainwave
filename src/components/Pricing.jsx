import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            width={255}
            height={255}
            alt="Sphere"
            className="relative z-1"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              width={950}
              height={400}
              alt="Stars"
              className="w-full"
            />
          </div>
        </div>
        <Heading
          tag="Get started with brainwave"
          title="Pay Once, Use Forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
          <div className="flex justify-center mt-10">
            <a
              href="./pricing"
              className="text-xs font-code font-bold tracking-wider uppercase border-b no-underline"
            >
              {" "}
              See full details
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
