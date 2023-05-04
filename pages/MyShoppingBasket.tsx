import { QueryClient, dehydrate, useInfiniteQuery } from "@tanstack/react-query";
import { getBasketItem } from "@/apis/axios";
import React from "react";

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
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((project: SellingItem) => (
              <p key={project.id}>{project.title}</p>
            ))}
          </React.Fragment>
        ))}
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
