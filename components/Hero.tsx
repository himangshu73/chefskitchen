import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="flex">
      <div>
        <h2>Cook Anything with the experts.</h2>
        <p>
          Sed ut perspiciantis unde omnis iste natus error sit oluptatem
          acusantium doloremque laudantium totam
        </p>
        <div>
          <Button>Let's Cook</Button>
          <Button variant="outline">Explore now</Button>
        </div>
      </div>
      <div>
        <div>
          <Image src="/shapes.png" alt="shapes" height={400} width={400} />
        </div>
      </div>
    </div>
  );
}
