import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 shrink-0">
          <Image src="/icon.png" height={24} width={24} alt="logo" />
          <p className="text-base font-bold">Chef&apos;s Kitchen</p>
        </div>

        <div className="hidden lg:flex gap-6">
          <p className="text-lg">Home</p>
          <p className="text-lg">About Us</p>
          <p className="text-lg">Recipe</p>
          <p className="text-lg">Docs</p>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-4">
          <div className="flex gap-1 items-center">
            <Image src="/phone.png" height={20} width={20} alt="phone" />
            <span className="text-sm md:text-base">+1(909) 235-9814</span>
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
