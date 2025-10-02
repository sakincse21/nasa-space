import Image from "next/image";
import Link from "next/link";
import astronaut from "@/assets/img/astro.png";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import { TextRevealButton } from "@/components/ui/shadcn-io/text-reveal-button"

export default function HomePage() {
  return (
    <div className="w-full h-full grow-1 flex flex-col justify-center items-center gap-5">
      {/* gif of astranaut roaming */}
      <div className="">
        <Magnetic>
          <Image src={astronaut} alt="astronaught" width={500} height={500} />
        </Magnetic>
      </div>
      {/* cupola images and co ord btns */}
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center">
        <Link href={"/cupola"}>
          <TextRevealButton text="Cupola Images" />
        </Link>
        {/* <Link href={"/quiz"}>
            <TextRevealButton text="Solve Quizs" />
        </Link> */}
        <Link href={"/game"}>
          <TextRevealButton text="Play Game" />
        </Link>
      </div>
      {/* game redirect link */}
      <div className="w-full flex justify-center items-center">
      </div>
    </div>
  );
}
