import Image from "next/image";
import Button from "./Button";

export default function Features1() {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full sm:w-1/2 h-[400px] sm:h-auto">
          <div className="absolute bottom-0 left-0 z-0 bg-secondary rounded-tr-[20rem] rounded-l-xl rounded-br-xl w-full h-full"></div>
          <div className="absolute bottom-0 left-0 z-10 w-full h-full">
            <Image
              src="/man.png"
              fill
              alt="man"
              className="object-contain"
              sizes="(max-width:640px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <p className="tracking-widest">COOK WITH US</p>
            <h3>Cooking together with the expert</h3>
          </div>
          <div className="flex flex-col gap-8">
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
            <Button variant="solid">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
