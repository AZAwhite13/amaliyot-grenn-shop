import { Skeleton } from "antd";
import type { DataType, DiscountType } from "../../../../@types";
import { useQueryHendler } from "../../../../hooks/useQuery";

const Discount = () => {
  const { data, isLoading, isError }: DataType<DiscountType> = useQueryHendler({
    url: "features/discount",
    pathname: "discount",
  });

  return (
    <div className="flex flex-col justify-between items-center gap-[10px] text-center mt-4">
      <h3 className="text-[#46a358] text-[20px] font-normal leading-[120%]">
        {data?.title}
      </h3>
      <h3 className="text-[#3d3d3d] font-bold text-[20px]">
        UP TO {data?.discoount_up_to}% OFF
      </h3>

      {isLoading || isError ? (
        <Skeleton.Image active />
      ) : (
        <img src={data?.poster_image_url} alt="" />
      )}
    </div>
  );
};

export default Discount;
