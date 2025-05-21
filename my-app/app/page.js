import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div>
      <h1 className="text-3xl font-bold mt-4 ml-4">3 DS</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
