import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./apiFetchig";

export function useProducts() {
  const { data: products, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return { error, products };
}
