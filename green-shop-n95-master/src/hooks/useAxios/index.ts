import axios from "axios";
import Cookies from "js-cookie";
interface AxiosProps {
  url: string;
  method?: "PUT" | "POST" | "DELETE" | "GET";
  body?: object;
  header?: object;
  params?: object;
}
export const useAxios = () => {
  const request = ({
    url,
    method = "GET",
    body,
    params,
    header,
  }: AxiosProps) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
        ...header,
      },
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
        ...params,
      },
    });
  };

  return request;
};
