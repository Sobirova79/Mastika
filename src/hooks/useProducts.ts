import { useQuery } from "@tanstack/react-query";
import apiClient from "src/main";
import { ProductTypes } from "src/utils/types";

export const useProducts = ({
  enabled = true,
  id,
  group_id,
  name,
  status,
}: {
  enabled?: boolean;
  id?: string;
  group_id?: string;
  name?: string;
  status?: number;
}) => {
  return useQuery({
    queryKey: ["products", id, name, group_id, status],
    queryFn: () =>
      apiClient
        .get("/v1/products", { id, name, group_id, status })
        .then(({ data: response }) => {
          return response as ProductTypes[];
        }),
    refetchOnMount: true,
    enabled,
  });
};

export default useProducts;
