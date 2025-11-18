import { Empty } from "antd";
import { Link } from "react-router-dom";
import { useReduxSelector } from "../../hooks/userRedux";
import ProductCard from "./product-card";

const ProductCardItem = () => {
  const titel_style = "text-[#3D3D3D] text-[16px] font-medium pb-[10px]";
  const { data } = useReduxSelector((state) => state.product_slice);
  return (
    <div>
      <div className="flex border-b-[1px] items-start border-[#46A358] max-sm:hidden">
        <h2 className={`${titel_style} w-[40%]`}>Products</h2>
        <h2 className={`${titel_style} w-[20%]`}>Price</h2>
        <h2 className={`${titel_style} w-[20%]`}>Quantity</h2>
        <h2 className={`${titel_style} w-[20%]`}>Total</h2>
      </div>
      <div className="flex items-center justify-center flex-col mt-3">
        {data.length === 0 ? (
          <>
            <Empty />
            <Link to={"/"}>
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[10px]">
                LET`S SHOP
              </button>
            </Link>
          </>
        ) : (
          data.map((value) => <ProductCard key={value._id} {...value} />)
        )}
      </div>
    </div>
  );
};

export default ProductCardItem;
