import Image from "next/image";
import styles from "../styles/Home.module.css";
import bg2 from "../styles/img/b6.jpg";

export default function Home() {
  return (
    <div className="">
      <div className="bg-white nav-top z-30 absolute">nav</div>
      <div className="absolute z-20 grid grid-cols-8 grid-rows-3 gap-1 w-full h-full mt-6 pb-12 ">
        <div className="bg-white/30 row-span-3 col-span-1">
          <div className="grid grid-cols-1 grid-rows-3 w-full h-full gap-1">
            <div className="bg-pink-300/30 row-span-1">sdfdsfdsfsdf</div>
            <div className="bg-pink-300/30 row-span-1"></div>
            <div className="bg-pink-300/30 row-span-1"></div>
          </div>
        </div>
        <div className="bg-white/30 row-span-3 col-span-5 grid grid-cols-5 grid-rows-3 gap-1">
          <div className="bg-pink-300/30 row-span-2 col-span-3">sfdsfds</div>
          <div className="bg-pink-300/30 row-span-2 col-span-1">fdsfdsfs</div>
          <div className="bg-pink-300/30 row-span-2 col-span-1">dsfsdfdfds</div>
          <div className="bg-pink-300/30 row-span-1 col-span-1">aaaaa</div>
          <div className="bg-pink-300/30 row-span-1 col-span-1">bbbbb</div>
          <div className="bg-pink-300/30 row-span-1 col-span-1">hhhhhh</div>
          <div className="bg-pink-300/30 row-span-1 col-span-1">rrrrrrr</div>
          <div className="bg-pink-300/30 row-span-1 col-span-1">iiiiii</div>
        </div>
        <div className="bg-white/30 row-span-3 col-span-2 grid grid-cols-1 grid-rows-3 gap-1">
          <div className="bg-pink-300/30 row-span-1 col-span-1"></div>
          <div className="bg-pink-300/30 row-span-1 col-span-1"></div>
          <div className="bg-pink-300/30 row-span-1 col-span-1"></div>
        </div>
      </div>
      <div className="absolute bottom-0 z-30 footer bg-red-500/40">fsffsd</div>
      <div className=" w-full h-full z-10">
        <Image
          src={bg2}
          alt="Picture of the future of trading"
          // width={100}
          // height={500}
          layout="fill" // required
          objectFit="cover"
        />
      </div>
    </div>
  );
}
