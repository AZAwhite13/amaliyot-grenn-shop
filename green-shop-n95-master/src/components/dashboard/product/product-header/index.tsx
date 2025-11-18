import { Select } from "antd";
import { plants_type } from "../../../../utils";
import useSearchParam from "../../../../generic/searchParams";

const ProductHeader = () => {
  const { setParam, paramValue } = useSearchParam();
  const category = paramValue("category") || "house-plants";
  const range_min = paramValue("range_min") || 0;
  const range_max = paramValue("range_max") || 1000;
  const type = paramValue("type") || "all-plants";
  const sort = paramValue("sort") || "default-sorting";
  const change = (e: string) => {
    setParam({ category, range_min, range_max, type, sort: e });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between gap-5">
        {plants_type.map((value) => (
          <div
            onClick={() =>
              setParam({ category, range_min, range_max, type: value.path })
            }
            key={value.id}
            className={`false text-[#3D3D3D] text-[16px] cursor-pointer font-[600] transition-colors ${
              type === value.path && "text-[#46a358]"
            }`}
          >
            {value.title}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <h3>Sort by:</h3>
        <Select
          onChange={change}
          className="!w-[150px]"
          defaultValue={sort}
          style={{ width: 120 }}
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expansive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductHeader;
