"use client";
import { ArrowLeftSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 w-full py-5 px-5 h-auto z-10">
      <Button
        className={
          "text-4xl flex flex-row gap-3 justify-center items-center bg-[#ff3737] hover:bg-[#ff3740] hover:drop-shadow-2xl"
        }
        onClick={() => router.back()}
      >
        <ArrowLeftSquare size={30} />
        Back
      </Button>
    </div>
  );
};

export default GoBack;
