import Image from "next/image";
import Button from "./Button";

export default function Features1() {
  return (
    <div className="container mx-auto py-20">
      <div className="">
        <div className="relative">
          <div className="absolute bottom-0 left-0 bg-secondary rounded-tr-full w-[424px] h-[536px]"></div>
          <div className="absolute bottom-0 left-0">
            <Image src="/man.png" width={424} height={492} alt="man" />
          </div>
        </div>

        <div>
          <div>
            <p>COOK WITH US</p>
          </div>
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
          <Button variant="solid">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
