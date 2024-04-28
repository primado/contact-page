'use client'
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"

  //Images
  import img_one from "../public/nathan-dumlao-2z3MOB3kfJU-unsplash-min.jpg"
  import img_2 from "../public/nathan-dumlao-drov8-6RLUE-unsplash.jpg"


export default function CarouselComponent() {

    return (
        <div className="p-0">
            <Carousel 
                className="w-full "
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
            >
                 <CarouselContent className="!m-0 !p-0" >
                  <CarouselItem className="min-h-screen " >
                    <div className="p-1">
                        <Image 
                            src={img_one}
                            alt="hero image"
                            width={1000}
                            className="!p-0 !m-0 h-screen"
                          
                            style={{objectPosition: 'right', objectFit: 'cover'}}
                        />
                    </div>
                  </CarouselItem>
                  <CarouselItem  >
                    <div className="p-1">
                        <Image 
                            src={img_2}
                            alt="hero image"
                            width={1000}
                            className="!p-0 !m-0 h-screen"
                            
                            style={{objectPosition: 'right', objectFit: 'cover', }}
                        />
                    </div>
                  </CarouselItem>
                
                </CarouselContent>
            </Carousel>
        </div>
    )
    
};
