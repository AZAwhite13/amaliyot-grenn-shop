import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { useReduxSelector } from "../../../hooks/userRedux";
import { useEffect, useRef, useState } from "react";
import { useQueryHendler } from "../../../hooks/useQuery";
import { useAxios } from "../../../hooks/useAxios";
import { useDispatch } from "react-redux";
import { getCouponCode } from "../../../redux/product-slice";
import Cookies from "js-cookie";
import { authorizationModalVisibltiyConf } from "../../../redux/modal-slice";

const CartTotal = () => {
  const [loader,setLoader] = useState(false)
  const cupon_title_style = "text-[#3D3D3D] text-[15px] font-normal";
  const { data, coupon } = useReduxSelector((state) => state.product_slice);
  const couponRef = useRef<HTMLInputElement>(null);
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const navigate = useNavigate()

  console.log(coupon);
  const totalPrice = data.reduce(
    (acc, value) => (acc += value.userPrice as number),
    16
  );
  const dispatch = useDispatch();

  const axios = useAxios();

  const getCoupon = () => {
    setLoader(true);
    axios({
      url: "features/coupon",
      params: {
        coupon_code: couponRef.current?.value,
      },
    }).then((res) => dispatch(getCouponCode(res.data.data.discount_for))).finally(()=>setLoader(false))
  };

  return (
    <div className="top-[100px] sticky">
      <div className="flex border-b-[1px] border-[#46A358]">
        <h2 className="pb-[9px] text-[#3D3D3D] font-bold text-[18px]">
          Card total
        </h2>
      </div>  
      <Form className="flex h-[40px] mt-[35px]">
        <input
          ref={couponRef}
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border w-4/5  border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg rounded-r-none outline-none text-[18px] text-black font-normal"
        />
        <button
          onClick={getCoupon} disabled={loader}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none "
        >
          <span>{loader ? <LoadingOutlined/> : "Apply"}</span>
        </button>
      </Form>
      <div className="mt-[20px]">
        
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px]">{coupon} %</h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shiping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-[20px]">
          <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
          <h1 className="text-[#46A358] text-[18px] font-bold">
          
           {coupon ? (totalPrice-(totalPrice*coupon/100))?.toFixed(2): totalPrice?.toFixed(2)} $
         
            {coupon ? (  <p className="line-through text-[17px]">{coupon && totalPrice?.toFixed(2)}</p>): null}
          </h1>
        </div>
        <button onClick={()=> user ? navigate("/") : dispatch(authorizationModalVisibltiyConf()) } className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px]">
          Proceed To Checkout
        </button>
        <Link to={"/"} className="flex justify-center">
          <button className="mt-[14px] text-[#46A358] cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
