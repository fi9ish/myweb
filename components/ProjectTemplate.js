import Image from "next/image";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb"

export function ProjectTemplate({ name, imgSrc, link, text }) {
  return (
    <div className="divide-y-2">
      <Link href={link} className="flex gap-2 items-center mb-2">
        <p className="font-bold text-xl">{name}</p><button className="bg-emerald-900 text rounded-lg p-2 hover:text-yellow-400"><TbBrandGithub size={20}></TbBrandGithub></button>
      </Link>
      <div className=" pt-4 flex flex-col gap-4">
        <Link href={link} className="self-center">
          <Image
            src={imgSrc}
            alt="alt"
            className="rounded-xl border-2 border-yellow-400"
            height={400}
            placeholder="blur"
          ></Image>
        </Link>
        <div>
            <p className="font-bold text-xl">Description</p>
            <p className="indent-4">{text}</p>
        </div>
      </div>
    </div>
  );
}
