import { QueryClient, dehydrate, useInfiniteQuery } from "@tanstack/react-query";
import { getBasketItem } from "@/apis/axios";
import React from "react";
import BasketItem from "@/components/common/BasketItem";

export default function MyShoppingBasket() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["basketItem"],
    queryFn: getBasketItem,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });

  return (
    <>
      <div className="pt-32">
        <BasketItem pagesData={data} />
      </div>
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          버튼
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["basketItem"], getBasketItem);
  return {
    props: {
      dehydrateedState: dehydrate(queryClient),
    },
  };
}
