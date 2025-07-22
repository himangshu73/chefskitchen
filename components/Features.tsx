import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center gap-4">
        <p className="tracking-widest">FEATURES</p>
        <h3 className="text-center">
          Get a many of interesting
          <br /> features.
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 sm:gap-16 mt-20 px-16 sm:px-8">
        <div className="relative flex flex-col items-center justify-end gap-2 w-full min-h-[18rem] bg-gradient-to-b from-tertiary-15 to-white rounded-3xl px-4 py-6 ">
          <div className="absolute -top-14 w-28 h-28 bg-white rounded-full shadow-xl flex items-center justify-center">
            <Image
              src="/menu.png"
              width={64}
              height={64}
              alt="menu"
              className="object-cover"
            />
          </div>
          <h6>Menu variations</h6>
          <p>
            Sed ut perspiciatis unde
            <br /> omnis iste natus error
          </p>
          <Link href="/" className="text-primary text-medium">
            Learn more
          </Link>
        </div>
        <div className="relative flex flex-col items-center justify-end gap-2 w-full min-h-[18rem] bg-gradient-to-b from-tertiary-15 to-white rounded-3xl px-4 py-6 ">
          <div className="absolute -top-14 w-28 h-28 bg-white rounded-full shadow-xl flex items-center justify-center">
            <Image
              src="/fried.png"
              width={64}
              height={64}
              alt="menu"
              className="object-cover"
            />
          </div>
          <h6>Menu variations</h6>
          <p>
            Sed ut perspiciatis unde
            <br /> omnis iste natus error
          </p>
          <Link href="/" className="text-primary text-medium">
            Learn more
          </Link>
        </div>
        <div className="relative flex flex-col items-center justify-end gap-2 w-full min-h-[18rem] bg-gradient-to-b from-tertiary-15 to-white rounded-3xl px-4 py-6 ">
          <div className="absolute -top-14 w-28 h-28 bg-white rounded-full shadow-xl flex items-center justify-center">
            <Image
              src="/chef.png"
              width={64}
              height={64}
              alt="menu"
              className="object-cover"
            />
          </div>
          <h6>Menu variations</h6>
          <p>
            Sed ut perspiciatis unde
            <br /> omnis iste natus error
          </p>
          <Link href="/" className="text-primary text-medium">
            Learn more
          </Link>
        </div>
        <div className="relative flex flex-col items-center justify-end gap-2 w-full min-h-[18rem] bg-gradient-to-b from-tertiary-15 to-white rounded-3xl px-4 py-6 ">
          <div className="absolute -top-14 w-28 h-28 bg-white rounded-full shadow-xl flex items-center justify-center">
            <Image
              src="/hot.png"
              width={64}
              height={64}
              alt="menu"
              className="object-cover"
            />
          </div>
          <h6>Menu variations</h6>
          <p>
            Sed ut perspiciatis unde
            <br /> omnis iste natus error
          </p>
          <Link href="/" className="text-primary text-medium">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
