import { QueryClient, dehydrate, useInfiniteQuery } from "@tanstack/react-query";
import { getBasketItem } from "@/apis/axios";
import React, { useEffect } from "react";
import BasketItem from "@/components/common/BasketItem";
import { useInView } from "react-intersection-observer";

export default function MyShoppingBasket() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["basketItem"],
    queryFn: getBasketItem,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="pt-32">
        <BasketItem pagesData={data} />
        <div ref={ref}></div>
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
