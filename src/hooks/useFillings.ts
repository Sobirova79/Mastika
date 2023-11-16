import { useQuery } from "@tanstack/react-query";
import apiClient from "src/main";
import { FillingTypes } from "src/utils/types";

export const useFillings = ({
  enabled = true,
  id,
  name,
  ptype,
  status,
  category_id,
}: {
  enabled?: boolean;
  id?: number;
  name?: string;
  ptype?: number;
  status?: number;
  category_id?: number;
}) => {
  return useQuery({
    queryKey: ["fillings", id, name, ptype, status, category_id],
    queryFn: () =>
      apiClient
        .get("/v1/fillings", { id, name, ptype, status, category_id })
        .then(({ data: response }) => {
          return response as FillingTypes[];
        }),
    refetchOnMount: true,
    enabled,
  });
};

export default useFillings;
