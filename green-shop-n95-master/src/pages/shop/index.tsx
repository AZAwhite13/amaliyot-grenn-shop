import Header from "../../components/header";
import ProductCardItem from "../../components/product-card-item";
import CartTotal from "../../components/product-card-item/card-total";

const Shop = () => {
  return (
    <>
      <Header />

      <div className="grid grid-cols-[2fr_1fr] gap-10 my-[50px] max-lg:grid-cols-1 w-[90%] m-auto">
        <ProductCardItem />
        <CartTotal />
      </div>
    </>
  );
};

export default Shop;
