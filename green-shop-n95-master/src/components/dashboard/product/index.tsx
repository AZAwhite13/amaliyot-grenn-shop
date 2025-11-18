import type { DataType, ProductType } from "../../../@types";
import { useQueryHendler } from "../../../hooks/useQuery";
import Card from "./card";
import ProductHeader from "./product-header";
import useSearchParam from "../../../generic/searchParams";
import useLoader from "../../../generic/loader";

const Product = () => {
  const { paramValue } = useSearchParam();
  const category = paramValue("category") || "house-plants";
  const range_min = paramValue("range_min") || 0;
  const range_max = paramValue("range_max") || 1000;
  const type = paramValue("type") || "all-plants";
  const sort = paramValue("sort") || "default-sorting";

  const { data, isLoading, isError }: DataType<ProductType[]> = useQueryHendler(
    {
      url: `flower/category/${category}`,
      pathname: `flower-product-${category}-range_max-${range_max}-range_min-${range_min}-type-${type}-${sort}`,
      params: {
        range_max,
        range_min,
        type,
        sort,
      },
    }
  );
  const { product_loader } = useLoader();
  return (
    <section className="w-full">
      <ProductHeader />

      <div className="grid grid-cols-3 gap-4 mt-5">
        {isLoading || isError
          ? product_loader()
          : data?.map((value) => <Card {...value} key={value._id} />)}
      </div>
    </section>
  );
};

export default Product;
