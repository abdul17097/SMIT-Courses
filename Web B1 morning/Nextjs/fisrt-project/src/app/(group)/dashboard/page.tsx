import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href={"/about"}>About</Link>
      <p>dashboard</p>
    </div>
  );
};

export default page;
