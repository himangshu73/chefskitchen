import Image from "next/image";
import Button from "./Button";

export default function Features1() {
  return (
    <div className="container mx-auto py-10 md:py-20 px-8">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="relative w-full md:w-1/3 h-[536px]">
          <div className="absolute bottom-0 left-0 z-0 bg-secondary rounded-tr-[20rem] rounded-l-xl rounded-br-xl w-full min-h-[35rem]"></div>
          <div className="absolute bottom-0 left-0 z-10">
            <Image src="/man.png" width={424} height={492} alt="man" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="flex flex-col gap-3 mb-3">
            <p className="tracking-widest">COOK WITH US</p>
            <h3>Cooking together with the expert</h3>
          </div>
          <div className="flex flex-col gap-10">
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
