import { useReduxSelector } from "../../hooks/userRedux";
import AuthoriztionModal from "./authorization";

const Modals = () => {
  const { authorizationModalVisibltiy } = useReduxSelector(
    (state) => state.modalSlice
  );
  return <>{authorizationModalVisibltiy && <AuthoriztionModal />}</>;
};

export default Modals;
