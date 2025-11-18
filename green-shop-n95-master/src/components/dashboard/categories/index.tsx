import type { CategoryType, DataType } from "../../../@types";
import useLoader from "../../../generic/loader";
import useSearchParam from "../../../generic/searchParams";
import { useQueryHendler } from "../../../hooks/useQuery";
import Discount from "./discount";
import PriceRange from "./price_range";

const Categories = () => {
  const { data, isLoading, isError }: DataType<CategoryType[]> =
    useQueryHendler({
      url: "flower/category",
      pathname: "category",
    });
  const { paramValue } = useSearchParam();
  const category = paramValue("category") || "house-plants";
  const range_min = paramValue("range_min") || 0;
  const range_max = paramValue("range_max") || 1000;

  const { category_loader } = useLoader();

  const { setParam } = useSearchParam();

  return (
    <div className="w-[300px] bg-[#f2f2f2] p-5 rounded-[5px]">
      <h3 className="text-[#3d3d3d] font-bold">Categories</h3>

      <div className="ml-1 mt-4 ">
        {isLoading || isError
          ? category_loader()
          : data?.map((value) => (
              <div
                onClick={() =>
                  setParam({ category: value.route_path, range_min, range_max })
                }
                key={value._id}
                className={`flex items-center justify-between mb-3 hover:text-[#46a358] cursor-pointer ${
                  category === value.route_path && "text-[#46a358]"
                }`}
              >
                <h3>{value.title}</h3>
                <h3>({value.count})</h3>
              </div>
            ))}
      </div>
      <PriceRange />
      <Discount />
    </div>
  );
};

export default Categories;
// postman
// swagger
