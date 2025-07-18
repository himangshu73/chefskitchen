import Image from "next/image";

export default function Gallery() {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4">
          <p className="tracking-widest">OUR GALLERY</p>
          <h3>Gallery of our cooked food.</h3>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-4 auto-rows-[250px]">
            <div className="relative col-span-1 row-span-1">
              <Image
                src="/pic1.png"
                fill
                alt="pic"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative col-span-1 row-span-1">
              <Image
                src="/pic2.png"
                fill
                alt="pic"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative col-span-1 row-span-1">
              <Image
                src="/pic3.png"
                fill
                alt="pic"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative col-span-1 row-span-1">
              <Image
                src="/pic4.png"
                fill
                alt="pic"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
