import { InfiniteData } from "@tanstack/react-query";
import React from "react";
import earphones from "../../public/earphones.jpeg";
import Image from "next/image";

interface PagesData {
  pages: SellingItem[][];
  pageParams: (undefined | number)[];
}

export default function BasketItem({ pagesData }: any) {
  return (
    <>
      <div className="display: flex flex-col items-center mr-40">
        {pagesData?.pages.map((group: [SellingItem], i: number) => (
          <div key={i} className="">
            {group.map((item: SellingItem) => {
              return (
                <div key={item.id} className="display: flex flex-row flex-wrap items-center">
                  <Image src={earphones} width={300} height={300} alt="img"></Image>
                  <div>
                    <div className="text-xl font-bold w-80">{item.title}</div>
                    <div className="text-zinc-600 text-sm w-80">{item.description}</div>
                    <div className="text-lg mt-8">{item.price}원</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
