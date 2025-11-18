import { Provider } from "react-redux";
import type { PropTypes } from "../../@types";
import Modals from "../../components/modals";
import { store } from "../../redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ProviderConf = ({ children }: PropTypes) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {children}
          <Modals />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default ProviderConf;
