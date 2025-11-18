import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/userRedux";
import Login from "./login";
import Register from "./register";
import { useState } from "react";
import { authorizationModalVisibltiyConf } from "../../../redux/modal-slice";
const AuthoriztionModal = () => {
  const { authorizationModalVisibltiy } = useReduxSelector(
    (state) => state.modalSlice
  );
  const dispatch = useReduxDispatch();
  const [showLogin, setShowLogin] = useState("login");

  return (
    <Modal
      open={authorizationModalVisibltiy}
      footer={false}
      onCancel={() => dispatch(authorizationModalVisibltiyConf())}
    >
      <div className="mt-8 flex items-center justify-center flex-col gap-4">
        <div className="flex items-center gap-5">
          <div
            onClick={() => setShowLogin("login")}
            className={`text-[#3D3D3D] text-[19px] cursor-pointer font-medium ${
              showLogin === "login" && "text-[#46A358]"
            }`}
          >
            Login
          </div>
          <div className="bg-[#3D3D3D] w-px h-5"></div>
          <div
            onClick={() => setShowLogin("register")}
            className={`text-[#3D3D3D] text-[19px] cursor-pointer font-medium ${
              showLogin === "register" && "text-[#46A358]"
            }`}
          >
            Register
          </div>
        </div>

        {showLogin === "login" ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default AuthoriztionModal;
