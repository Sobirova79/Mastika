import { useQuery } from "@tanstack/react-query";
import apiClient from "src/main";
import { usersType } from "src/utils/types";

export const useUsers = ({
  enabled = true,
  is_client,
  id,
  page,
  size,
}: {
  enabled?: boolean;
  is_client?: number;
  id?: number;
  page?: number;
  size?: number;
}) => {
  return useQuery({
    queryKey: ["users", is_client, id, page, size],
    queryFn: () =>
      apiClient
        .get("/user", { is_client, id, page, size })
        .then(({ data: respone }) => {
          return respone as usersType;
        }),
    enabled,
    refetchOnMount: true,
  });
};

export default useUsers;
