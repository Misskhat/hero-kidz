import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-1">
      <Image
        alt="hero-kidz-logo"
        src={"/assets/logo.png"}
        width={50}
        height={50}
      />
      <p className="font-bold">
        Hero <span className="text-primary">Kidz</span>
      </p>
    </Link>
  );
}

export default Logo;
