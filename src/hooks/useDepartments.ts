import { useQuery } from "@tanstack/react-query";
import apiClient from "src/main";
import { DepartmentsTypes } from "src/utils/types";

export const useDepartments = ({
  enabled = true,
  id,
  page,
  size,
}: {
  enabled?: boolean;
  id?: number;
  page?: number;
  size?: string;
}) => {
  return useQuery({
    queryKey: ["departments", id, page, size],
    queryFn: () =>
      apiClient
        .get("/v1/departments", { id, page, size })
        .then(({ data: response }) => {
          return response as DepartmentsTypes;
        }),
    enabled,
    refetchOnMount: true,
  });
};

export default useDepartments;
