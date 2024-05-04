"use client";
import { Pagineted } from "@/@core/domain/entities/pagineted";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Props<T> {
  queryKeys: Array<string>;
  queryFn: (context: {
    page: number;
    pageSize: number;
    signal?: AbortSignal;
  }) => Promise<Pagineted<T>>;
}

export default function usePaginated<T>({ queryKeys, queryFn }: Props<T>) {
  const query = useInfiniteQuery({
    queryKey: [...queryKeys],
    queryFn: ({ pageParam = 1 }) => queryFn({ page: pageParam, pageSize: 10 }),
    getNextPageParam: ({ count }, _, lastPageParam) =>
      count > 10 ? lastPageParam + 1 : undefined,
    initialPageParam: 1,
  });
  const data = query.data?.pages.flatMap((data) => data.data) || [];

  return { ...query, data };
}
