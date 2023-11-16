import { useQuery } from "@tanstack/react-query";
import apiClient from "src/main";
import { TypesRole } from "src/utils/types";

export const useRoles = ({
  enabled = true,
  name,
  id,
}: {
  enabled?: boolean;
  name?: string;
  id?: number;
}) => {
  return useQuery({
    queryKey: ["roles", name, id],
    queryFn: () =>
      apiClient.get("/roles", { name, id }).then(({ data: response }) => {
        return response as TypesRole[];
      }),
    enabled,
    refetchOnMount: true,
  });
};

export default useRoles;
