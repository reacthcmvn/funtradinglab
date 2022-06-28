import Image from "next/image";
import styles from "../styles/Home.module.css";
import bg2 from "../styles/img/b6.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src={bg2}
        alt="Picture of the future of trading"
        // width={100%}
        height="100vh"
        layout="fill"
      />
    </div>
  );
}
