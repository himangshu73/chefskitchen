import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-tertiary-15">
      <h1 className="text-primary">Himangshu Nath Barmon</h1>
      <h2 className="text-primary">Himangshu Nath Barmon</h2>
      <h3 className="text-primary">Himangshu Nath Barmon</h3>
      <h4 className="text-primary">Himangshu Nath Barmon</h4>
      <h5 className="text-primary">Himangshu Nath Barmon</h5>
      <h6 className="text-primary">Himangshu Nath Barmon</h6>
      <div className="space-y-4">
        <Button variant="solid">Sign Up</Button>
        <Button variant="soft">Sign Up</Button>
        <Button variant="outline">Sign Up</Button>
        <Button variant="text" className="bg-blue-500 text-white">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
