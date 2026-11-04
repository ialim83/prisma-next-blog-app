import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen flex flex-col items-center justify-center px-5">
        <p className="">Home page</p>

        <Button>Click me</Button>
      </div>
    </div>
  );
}
