import Link from "next/link";
import React from "react";
import { TbError404Off } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 text-4xl">
      <p className="flex items-center justify-center">
        Page not found: <TbError404Off size={80} />
      </p>
      <Link className="btn btn-primary" href={"/"}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
