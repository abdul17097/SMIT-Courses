import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import image1 from "../assets/featured_product/image1.png";
import image2 from "../assets/featured_product/image2.png";
import image3 from "../assets/featured_product/image3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
const carouselItems = [image1, image2, image1, image2, image3];
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full  lg:flex-row px-5  pt-10 flex-col lg:px-[10rem] flex justify-between h-[42rem] lg:h-[30rem] items-center bg-gradient-to-l to-[#4B85B3] from-[#CFC5E8]">
      <div className="lg:w-[50%]  flex flex-col gap-4 items-start">
        <h1 className="lg:text-[3rem] text-[1.5rem] text-white font-extrabold flex flex-col gap-3">
          <span className="">Are you ready to</span>
          <span className="">Lead the Way</span>
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque
          laborum eos quibusdam deleniti quos explicabo doloremque, officia
          dolor enim dolorum et nihil iure eius numquam unde dolore fuga
          dignissimos!
        </p>
        <Button className="mt-10 bg-blue-950 hover:text-blue-800 hover:bg-white">
          Buy Now
        </Button>
      </div>
      <div className="lg:w-[40%] flex justify-end">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-[20rem] flex items-center justify-center">
            {carouselItems?.map((item, index) => (
              <CarouselItem className="" key={index}>
                <div className="w-[20rem]">
                  <img
                    src={item}
                    alt=""
                    className="lg:h-[20rem] h-[15rem] w-[15rem] lg:w-[20rem]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
