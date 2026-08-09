import Image from "next/image";
import Welcome from "./components/Welcome";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">hello world</div>
      <Welcome />
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
