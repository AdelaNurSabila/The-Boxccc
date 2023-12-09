import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className=" bg-white sticky top-0 left-0 z-50 shadow-md">
        <div className=" m-auto max-w-[1260px] h-[100px] flex items-center justify-between">
          <div className="flex gap-[8px] font-bold">
           <Link href="/"><Image className="cursor-pointer" src="/Group.png" alt="logo" width={24} height={0} /></Link>
           <Link href="/"><p className="text-sky-700 text-[20px]">The Box</p></Link>
          </div>
          <ul className="flex gap-10 font-bold md:text-[20px] sm:text-[15px] text-[12px] me-1 text-sky-700 sm:mr-1">
            <Link href="/">
              {" "}
              <li className="cursor-pointer">Home</li>{" "}
            </Link>
            <Link href="/about" className="cursor-pointer">
              <li>About Us</li>
            </Link>
            <Link href="/servis">
              <li className="cursor-pointer">Services</li>
            </Link>
            <Link href="/team">
              {" "}
              <li className="cursor-pointer">Team</li>{" "}
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
