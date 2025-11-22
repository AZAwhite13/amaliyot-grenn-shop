import { Link, useNavigate } from "react-router-dom";
import {
  BellOutlined,
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../hooks/userRedux";
import { authorizationModalVisibltiyConf } from "../../redux/modal-slice";
import Cookies from "js-cookie";
import { Badge } from "antd";
import { useState } from "react";

const Header = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const { data } = useReduxSelector((state) => state.product_slice);

  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;

  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#00800043] py-3">
      <div className="w-[90%] m-auto flex items-center justify-between">
       
        <div>
          <Link to={"/"}>
            <img
              src="https://green-shop-otabek.vercel.app/assets/logo-nyVMFuKc.svg"
              alt="logo"
            />
          </Link>
        </div>

      
        <div className="hidden md:flex gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={""}>Blog</Link>
        </div>

       
        <div className="flex items-center gap-5">

          <SearchOutlined className="text-[20px]" />
          <BellOutlined className="text-[20px]" />

          <Badge count={data.length}>
            <ShoppingCartOutlined
              onClick={() => navigate("/shop")}
              className="text-[20px] cursor-pointer"
            />
          </Badge>

         
          <button
            onClick={() => dispatch(authorizationModalVisibltiyConf())}
            className="text-white w-[100px] h-[35px] bg-[#46A358] flex items-center gap-1 justify-center rounded-md max-md:hidden cursor-pointer"
          >
            {user ? (
              user?.name
            ) : (
              <>
                <LoginOutlined /> Login
              </>
            )}
          </button>

          <button
            className="md:hidden text-[24px]"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

    
      {open && (
        <div className="md:hidden bg-white border-t mt-3 px-5 pb-4 animate-fadeIn">
          <div className="flex flex-col gap-4 text-[17px]">

            <Link to={"/"} onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link to={""} onClick={() => setOpen(false)}>
              Blog
            </Link>

            <button
              onClick={() => {
                dispatch(authorizationModalVisibltiyConf());
                setOpen(false);
              }}
              className="text-white w-full h-[40px] bg-[#46A358] flex items-center gap-1 justify-center rounded-md"
            >
              {user ? user?.name : <><LoginOutlined /> Login</>}
            </button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
