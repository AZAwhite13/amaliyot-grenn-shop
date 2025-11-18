import { Skeleton } from "antd";

const useLoader = () => {
  const category_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <Skeleton.Input active className="!w-full mb-2" key={idx} />
    ));
  };

  const product_loader = () => {
    return Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx}>
        <Skeleton.Image className="!w-full !h-[300px]" active />
        <br />
        <Skeleton.Input className="!w-full !h-[30px]" active />
      </div>
    ));
  };
  return { category_loader, product_loader };
};

export default useLoader;
