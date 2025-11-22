import { Link, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { useReduxSelector } from "../../../hooks/userRedux";
import { useRef, useState } from "react";
import { useAxios } from "../../../hooks/useAxios";
import { useDispatch } from "react-redux";
import { getCouponCode, clearCart } from "../../../redux/product-slice";
import Cookies from "js-cookie";
import { authorizationModalVisibltiyConf } from "../../../redux/modal-slice";
import { Form } from "antd";

const BOT_TOKEN = "8344958378:AAFZRgfSDUee-96TMxx-_Kv6T8nymr3DVDY";
const CHAT_ID = "-1003038719479";

const CartTotal = () => {
  const [loader, setLoader] = useState(false);

  const { data, coupon } = useReduxSelector((state) => state.product_slice);
  const couponRef = useRef<HTMLInputElement>(null);

  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axios = useAxios();

  const SHIPPING = 16;
  const subtotal = data.reduce(
    (acc, item) =>
      acc + (item.userPrice ?? 0) * (item.count ?? 1),
    0
  );

  const discountAmount = coupon ? (subtotal * coupon) / 100 : 0;

  const finalTotal = (subtotal - discountAmount + SHIPPING).toFixed(2);
  const getCoupon = () => {
    setLoader(true);
    axios({
      url: "features/coupon",
      params: {
        coupon_code: couponRef.current?.value,
      },
    })
      .then((res) =>
        dispatch(getCouponCode(res.data.data.discount_for))
      )
      .finally(() => setLoader(false));
  };
  const sendToTelegram = async () => {
    const productsText = data
      .map(
        (item) => `
📦 *${item.title}*
   • Цена: ${(item.userPrice ?? 0)}$
   • Количество: ${item.count ?? 1}
   • Сумма: ${((item.userPrice ?? 0) * (item.count ?? 1)).toFixed(2)}$
`
      )
      .join("\n");

    const message = `
🛒 *Новый заказ!*

👤 *Пользователь:* ${user?.name || "Не авторизован"}

${productsText}

------------------------------------
💵 *Подытог:* ${subtotal.toFixed(2)}$
🎟 *Скидка:* ${coupon ? coupon + "%" : "нет"}
➖ *Размер скидки:* ${discountAmount.toFixed(2)}$
🚚 *Доставка:* ${SHIPPING}$
💰 *ИТОГО:* *${finalTotal}$*
`;

    await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );
  };
  const handleCheckout = async () => {
    if (!user) {
      return dispatch(authorizationModalVisibltiyConf());
    }

    await sendToTelegram();
    dispatch(clearCart());
    navigate("/");
  };
  const cuponTitle = "text-[#3D3D3D] text-[15px] font-normal";

  return (
    <div className="top-[100px] sticky">
      <div className="flex border-b border-[#46A358]">
        <h2 className="pb-[9px] text-[#3D3D3D] font-bold text-[18px]">
          Card total
        </h2>
      </div>

      <Form className="flex h-[40px] mt-[35px]">
        <input
          ref={couponRef}
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border w-4/5 border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg outline-none text-[18px]"
        />

        <button
          onClick={getCoupon}
          disabled={loader}
          className="bg-[#46A358] flex items-center justify-center gap-1 text-white w-1/5 rounded-r-lg"
        >
          {loader ? <LoadingOutlined /> : "Apply"}
        </button>
      </Form>

      <div className="mt-[20px]">
        <div className="flex justify-between pt-3">
          <h3 className={cuponTitle}>Coupon Discount</h3>
          <h2 className="text-[15px]">{coupon ?? 0} %</h2>
        </div>

        <div className="flex justify-between pt-3">
          <h3 className={cuponTitle}>Shipping</h3>
          <h2 className="text-[18px] font-medium">${SHIPPING}</h2>
        </div>
      </div>

      <div className="mt-[20px]">
        <div className="flex justify-between">
          <h2 className="text-[16px] font-bold">Total:</h2>

          <h1 className="text-[#46A358] text-[18px] font-bold">
            {finalTotal} $
            {coupon ? (
              <p className="line-through text-[17px] text-gray-500">
                {(subtotal + SHIPPING).toFixed(2)}
              </p>
            ) : null}
          </h1>
        </div>

        <button
          onClick={handleCheckout}
          className="bg-[#46A358] w-full h-[40px] mt-[30px] text-white text-base rounded-md"
        >
          Proceed To Checkout
        </button>

        <Link to="/" className="flex justify-center">
          <button className="mt-[14px] text-[#46A358] cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
