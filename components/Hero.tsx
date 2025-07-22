import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="bg-tertiary-15">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row-reverse">
        <div className="relative w-full sm:w-1/2 aspect-5/6">
          <Image
            src="/shapes.png"
            alt="floating dots"
            fill
            className="object-contain"
          />
          <div>
            <div className="absolute bottom-20 right-0 w-3/4 aspect-526/644 bg-primary rounded-t-full"></div>
            <Image
              src="/lady.png"
              fill
              className="object-contain"
              alt="lady"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-8 sm:w-1/2 sm:mt-52">
          <h2>
            Cook anything <br /> with the experts.
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            <br />
            accusantium doloremque laudantium, totam
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button>Let&apos;s cook</Button>
            <Button variant="outline">Explore now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
