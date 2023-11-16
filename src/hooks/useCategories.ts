import { useQuery } from "@tanstack/react-query";
import apiClient from "src/main";
import { CategoryTypes } from "src/utils/types";

export const useCategories = ({
  enabled = true,
  name,
  id,
  status,
}: {
  enabled?: boolean;
  name?: string;
  id?: number;
  status?: number;
}) => {
  return useQuery({
    queryKey: ["categories", name, id, status],
    queryFn: () =>
      apiClient
        .get("/v1/category", { name, id, status })
        .then(({ data: response }) => {
          return response as CategoryTypes[];
        }),
    enabled,
    refetchOnMount: true,
  });
};

export default useCategories;
