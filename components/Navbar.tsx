import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="px-24 py-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          <Image src="/icon.png" height={20} width={20} alt="logo" />
          <p className="text-[14px] font-semibold">Chef's Kitchen</p>
        </div>

        <div className="flex gap-10">
          <p className="text-lg">Home</p>
          <p className="text-lg">About Us</p>
          <p className="text-lg">Recipe</p>
          <p className="text-lg">Docs</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-0.5">
            <Image src="/phone.png" height={20} width={20} alt="phone" />
            <span className="text-xl">+1(909) 235-9814</span>
          </div>
          <Button variant="solid">Sign In</Button>
          <Button variant="soft">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}
