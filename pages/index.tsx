import { getSellingItem } from "@/apis/axios";
import SellingItem from "@/components/common/SellingItem";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  const { data, isPreviousData } = useQuery({ queryKey: ["selledItem", page], queryFn: () => getSellingItem(page), keepPreviousData: true });
  console.log(page);

  return (
    <>
      <div className="display: flex flex-wrap pt-32 justify-center">
        {data?.map((item: SellingItem) => {
          return (
            <div key={item.id} className="box-border w-64 h-72 mx-20 mb-20">
              <SellingItem individualValue={item} page={page} />
            </div>
          );
        })}
      </div>
      <div className="display: flex flex-row my-20 justify-center">
        <button
          onClick={() => {
            setPage((presentPage) => Math.max(presentPage - 1, 0));
          }}
          disabled={page === 0}
          className="mr-10"
        >
          이전페이지
        </button>
        <button
          onClick={() => {
            setPage((presentPage) => presentPage + 1);
          }}
          disabled={page === 2}
        >
          다음페이지
        </button>
      </div>
    </>
  );
}
