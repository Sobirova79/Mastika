import apiClient from "src/main";
import { useQuery } from "@tanstack/react-query";
import { orderType } from "src/utils/types";

export const useOrder = ({
  enabled = true,
  id,
}: {
  enabled?: boolean;
  id?: number;
}) => {
  // console.log(id, "id");
  return useQuery({
    queryKey: ["get_order", id],
    queryFn: () =>
      apiClient
        .get("/v1/orders", { id })
        .then(({ data: response }) => (response as orderType) || null),
    enabled,
    // refetchOnMount: true,
  });
};

export default useOrder;
