import Categories from "./categories";
import Product from "./product";

const Dashboard = () => {
  return (
   <section
  className="
    flex flex-col md:flex-row  justify-center
    items-start gap-4 mt-5
  "
>
  <Categories />
  <Product />
</section>

  );
};

export default Dashboard;
