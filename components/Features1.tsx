import Image from "next/image";
import Button from "./Button";

export default function Features1() {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="flex flex-col sm:flex-row w-full gap-8 items-stretch">
        <div className="relative w-full sm:w-1/2 flex items-stretch">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 z-0 bg-secondary w-full h-full rounded-t-full"></div>
            <Image
              src="/man.png"
              fill
              alt="man"
              className="object-contain z-10"
            />
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 gap-4">
          <p className="tracking-widest">COOK WITH US</p>
          <h3>Cooking together with the expert</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium....
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
