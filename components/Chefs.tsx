import Image from "next/image";

export default function Chefs() {
  return (
    <div className="bg-primary-15">
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center gap-2">
          <p className="tracking-widest">EXPERT CHEFS</p>
          <h3>Let's meet the expert.</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:justify-between items-center px-24 mt-12">
          <div className="flex flex-col gap-3 ">
            <div className="relative">
              <div className="bg-tertiary w-60 h-60 border-4 rounded-b-full rounded-l-full border-white"></div>
              <div className="absolute bottom-0 left-0 z-20">
                <Image src="/chef3.png" width={238} height={238} alt="chef1" />
              </div>
              <div className="absolute bottom-0 right-0 flex items-center justify-center bg-white w-20 h-20 rounded-full z-30">
                <Image
                  src="/linkedin.png"
                  width={32}
                  height={32}
                  alt="linkedin"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <h6>Shoo Thar Mien</h6>
              <p>Shoo Thar Mien</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="relative">
              <div className="bg-tertiary w-60 h-60 border-4 rounded-b-full rounded-l-full border-white"></div>
              <div className="absolute bottom-0 left-0 z-20">
                <Image src="/chef2.png" width={238} height={238} alt="chef1" />
              </div>
              <div className="absolute bottom-0 right-0 flex items-center justify-center bg-white w-20 h-20 rounded-full z-30">
                <Image
                  src="/linkedin.png"
                  width={32}
                  height={32}
                  alt="linkedin"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <h6>Shoo Thar Mien</h6>
              <p>Shoo Thar Mien</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="relative">
              <div className="bg-primary w-60 h-60 border-4 rounded-b-full rounded-l-full border-white"></div>
              <div className="absolute bottom-0 left-0 z-20">
                <Image src="/chef1.png" width={238} height={238} alt="chef1" />
              </div>
              <div className="absolute bottom-0 right-0 flex items-center justify-center bg-white w-20 h-20 rounded-full z-30">
                <Image
                  src="/linkedin.png"
                  width={32}
                  height={32}
                  alt="linkedin"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <h6>Shoo Thar Mien</h6>
              <p>Shoo Thar Mien</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
