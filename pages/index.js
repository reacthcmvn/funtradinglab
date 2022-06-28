import Image from "next/image";
import styles from "../styles/Home.module.css";
import bg2 from "../styles/img/b6.jpg";

export default function Home() {
  return (
    <div className="fixed w-full h-full">
      <div className="flex flex-col justify-between ">
        <ul className="table absolute h-36 z-20">
          <li className="table-cell align-middle hover:text-[100px] ">
            text pink nha
          </li>
          <li></li>
          <li></li>
        </ul>
        <div className="absolute w-full h-full z-10">
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
    </div>
  );
}
