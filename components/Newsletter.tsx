import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="container mx-auto py-20">
      <div>
        <div className="flex flex-col px-28 gap-12 w-full h-96 bg-primary rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-[20rem]">
          <div className="mt-20">
            <p className="tracking-widest text-white">NEWLETTER</p>
            <h3 className="text-white">Subscribe to our newsletter.</h3>
          </div>
          <div className="w-1/2 relative">
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
