import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="py-3 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className="flex gap-0.5">
          <Image src="/icon.png" height={20} width={20} alt="logo" />
          <p className="text-[14px] font-semibold">Chef's Kitchen</p>
        </div>

        <div className="hidden md:flex gap-6">
          <p className="text-lg">Home</p>
          <p className="text-lg">About Us</p>
          <p className="text-lg">Recipe</p>
          <p className="text-lg">Docs</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex gap-1 items-center">
            <Image src="/phone.png" height={20} width={20} alt="phone" />
            <span className="text-sm md:text-xl">+1(909) 235-9814</span>
          </div>
          <div className="flex gap-2">
            <Button variant="solid">Sign In</Button>
            <Button variant="soft">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
