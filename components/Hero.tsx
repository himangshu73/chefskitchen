import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="bg-tertiary-15">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-8 py-12 md:py-20 gap-12">
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
            <Button>Let&apos;s Cook</Button>
            <Button variant="outline">Explore now</Button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 max-w-md lg:max-w-lg h-auto aspect-[5/6] mx-auto">
          <Image
            src="/shapes.png"
            alt="floating dots"
            fill
            className="object-contain z-0"
          />
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 md:right-0 md:translate-0 bg-primary w-64 sm:w-80 h-[360px] sm:h-[500px] rounded-t-full z-10"></div>
            <Image
              src="/lady.png"
              alt="lady cooking"
              width={300}
              height={400}
              className="absolute bottom-0 right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
