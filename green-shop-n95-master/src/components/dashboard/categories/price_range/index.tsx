import { Slider } from "antd";
import { useState } from "react";
import useSearchParam from "../../../../generic/searchParams";

type RangeType = number[];
const PriceRange = () => {
  const [value, setValue] = useState<RangeType>([0, 1000]);
  const { setParam, paramValue } = useSearchParam();
  const category = paramValue("category") || "house-plants";
  const type = paramValue("type") || "all-plants";
  const sort = paramValue("sort") || "default-sorting";
  const range = (e: RangeType) => {
    // setValue(e);
    setValue(e);
    console.log(value);
  };
  return (
    <div>
      <h3 className="text-[#3d3d3d] font-bold">Price Range</h3>

      <Slider range max={1000} min={0} defaultValue={value} onChange={range} />

      <h2>
        Price:{" "}
        <span className="text-[#46a358] text-[15px] font-bold ml-4">
          {value[0]}$ - {value[1]}$
        </span>
      </h2>

      <button
        onClick={() =>
          setParam({
            category,
            range_min: value[0],
            range_max: value[1],
            type,
            sort,
          })
        }
        className="bg-[#46a358] rounded-lg font-medium text-white p-[7px_25px] mt-3 w-full cursor-pointer"
      >
        Filter
      </button>
    </div>
  );
};

export default PriceRange;
