import Categories from "./categories";
import Product from "./product";

const Dashboard = () => {
  return (
    <section className="flex items-start gap-2 mt-5">
      <Categories />
      <Product />
    </section>
  );
};

export default Dashboard;
