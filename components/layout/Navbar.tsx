import Image from "next/image";
import sirenlogo from "../../public/sirenlogo.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className="fixed top-0 display: flex flex-nowrap justify-between items-center bg-gray-900 h-20 opacity-90 w-full">
        <Image src={sirenlogo} alt="Header logo" width={130} height={50} className="ml-5 cursor-pointer" onClick={() => router.push("/")}></Image>
        <div className="display: flex items-center">
          <Link href="/" className="text-white mr-7">
            홈
          </Link>
          <Link href="/MyShoppingBasket" className="text-white mr-10">
            장바구니
          </Link>
        </div>
      </div>
    </>
  );
}
