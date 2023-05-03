import { getSellingItem } from "@/apis/axios";
import SellingItem from "@/components/common/SellingItem";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isPreviousData } = useQuery({ queryKey: ["selledItem", page], queryFn: () => getSellingItem(page), keepPreviousData: true });

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
          disabled={page === 1}
          className={page === 1 ? "mr-10 w-28 h-10 rounded-xl bg-slate-600" : "mr-10 w-28 h-10 bg-orange-200 rounded-xl hover:bg-orange-300"}
        >
          이전페이지
        </button>
        <button
          onClick={() => {
            setPage((presentPage) => presentPage + 1);
          }}
          disabled={page === 3}
          className={page === 3 ? "mr-10 w-28 h-10 rounded-xl bg-slate-600" : "w-28 h-10 bg-orange-200  hover:bg-orange-300 rounded-xl"}
        >
          다음페이지
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["selledItem"], () => getSellingItem(1));
  return {
    props: {
      dehydrateedState: dehydrate(queryClient),
    },
  };
}
