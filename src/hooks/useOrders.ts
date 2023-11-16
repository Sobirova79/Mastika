import apiClient from "src/main";
import { useQuery } from "@tanstack/react-query";
import { OrderType, orderTypes } from "src/utils/types";

export const useOrders = ({
  enabled = true,
  size,
  page,
  id,
}: {
  enabled?: boolean;
  size?: number;
  page?: number;
  id?: number;
}) => {
  return useQuery({
    queryKey: ["orders", page, size, id],
    queryFn: () =>
      apiClient
        .get("/v1/orders/all", { size, page, id })
        .then(({ data: response }) => {
          return response as orderTypes;
        }),
    enabled,
    refetchOnMount: true,
  });
};

export default useOrders;
