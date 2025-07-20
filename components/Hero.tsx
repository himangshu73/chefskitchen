import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="bg-tertiary-15">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center py-8md:py-16 px-4 gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2>
            Cook anything
            <br /> with the experts.
          </h2>
          <p className="py-4">
            Sed ut perspiciantis unde omnis iste natus error sit oluptatem
            acusantium doloremque laudantium totam
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 pt-4">
            <Button>Let's Cook</Button>
            <Button variant="outline">Explore now</Button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 max-w-[536px] h-auto aspect-[5/6] mx-auto">
          <Image
            src="/shapes.png"
            alt="floating dots"
            fill
            className="object-contain z-0"
          />
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="absolute bottom-0 right-0 bg-primary w-[380px] h-[500px] rounded-t-full z-0"></div>
            <Image
              src="/lady.png"
              alt="lady cooking"
              width={450}
              height={536}
              className="absolute bottom-0 right-0 z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
