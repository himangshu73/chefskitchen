import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="container mx-auto py-16">
      <div>
        <div className="flex flex-col gap-8 md:gap-12 p-6 lg:px-28 lg:py-20 bg-primary rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-[10rem] md:rounded-tr-[20rem]">
          <div className="mt-20">
            <p className="tracking-widest text-white text-sm md:text-base">
              NEWLETTER
            </p>
            <h3 className="text-white">Subscribe to our newsletter.</h3>
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2 relative">
            <input
              type="email"
              placeholder="youremail@domain.com"
              className="px-5 py-2 bg-white text-gray-500 rounded-4xl border border-gray-300"
            />
            <button className="absolute top-1 left-80">
              <Image src="/button.png" width={35} height={35} alt="submit" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
