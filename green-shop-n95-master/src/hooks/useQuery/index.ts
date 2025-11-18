import { useAxios } from "../useAxios";
import { useQuery } from "@tanstack/react-query";

interface QueryType {
  pathname: string;
  url: string;
  params?: object;
}
export const useQueryHendler = (props: QueryType) => {
  const axios = useAxios();
  const { pathname, url, params } = props;
  return useQuery({
    queryKey: [pathname, url],
    queryFn: () => axios({ url, params }).then((res) => res.data.data),
  });
};
