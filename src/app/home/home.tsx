"use client";

import { ShimmerLoading } from "@/components/shimmer-loading";
import { HomeContainer } from "./home.styles";
import { ListProducts } from "./products";
import useProducts from "@/main/hooks/products/use-products";

export function Home() {
  const { data, isLoading } = useProducts();
  const a = Array(8).fill(0);

  return (
    <HomeContainer>
      {isLoading && a.map((_, index) => <ShimmerLoading key={`id=${index}`} />)}
      {!isLoading &&
        data.map((product) => (
          <ListProducts key={product.id} product={product.toJson()} />
        ))}
    </HomeContainer>
  );
}
