// import { useQuery } from "@tanstack/react-query";
// import { getProducts } from "./apiFetching";
// import { useParams } from "react-router-dom";

// export function useProducts() {
//   const { productDataId } = useParams();
//   const { data: productdatas, error } = useQuery({
//     queryKey: ["productsdatas", productDataId],
//     queryFn: getProducts(productDataId),
//   });
//   return { error, productdatas };
// }
