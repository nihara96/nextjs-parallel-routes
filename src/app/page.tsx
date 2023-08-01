import Image from "next/image";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  const value = Math.random();

  return <div className="bg-black h-screen text-white">Main: {value}</div>;
}
