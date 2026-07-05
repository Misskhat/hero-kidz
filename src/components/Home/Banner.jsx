import React from "react";
import { myBanglaFont } from "../../app/layout";
import Image from "next/image";

function Banner() {
  return (
    <div className="container box-border flex items-center justify-between py-10">
      <div className="flex-1 space-y-4">
        <h1 className={`${myBanglaFont.className} text-6xl font-bold`}>
          আপনার সন্তানকে ভবিষ্যতের একজন উদ্ভাবনী মানুষ হিসেবে গড়ে তুলুন
        </h1>
        <p>All kids provides have 15% discount. Exploring the future.</p>
        <button className="btn btn-primary btn-outline">Brows Products</button>
      </div>
      <div className="flex-1 flex justify-end">
        <Image
          alt="banner-image"
          src={"/assets/hero.png"}
          width={600}
          height={500}
        ></Image>
      </div>
    </div>
  );
}

export default Banner;
