import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="bg-tertiary-15">
      <div className="container mx-auto flex items-center py-20 px-4">
        <div className="w-1/2 space-y-6">
          <h2>
            Cook anything
            <br /> with the experts.
          </h2>
          <p className="py-4">
            Sed ut perspiciantis unde omnis iste natus error sit oluptatem
            acusantium doloremque laudantium totam
          </p>
          <div className="flex gap-4 pt-4">
            <Button>Let's Cook</Button>
            <Button variant="outline">Explore now</Button>
          </div>
        </div>
        <div className="relative w-1/2 h-[536px] flex items-end justify-center">
          <Image
            src="/shapes.png"
            alt="floating dots"
            fill
            className="object-contain z-0"
          />
          <div className="relative w-[450px] h-[536px]">
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
