import { Carousel } from "antd";
import type { FC } from "react";
import { showcase_carousel } from "../../utils";
import HeroItem from "./hero-item";
const Hero: FC = () => {
  return (
    <div className="h-[450px] max-md:h-[400px] bg-[#F5F5F5]">
      <Carousel autoplay className="mt-5">
        {showcase_carousel.map((item) => (
          <HeroItem key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
