import Category from "@/components/Category";
import categories from "@/data/catogories";

const Recommendations = () => {
  return (
    <section className="container max-w-7xl">
      <div className="flex flex-col items-center gap-12">
        <div className="flex w-full items-center justify-around gap-6 border-b pb-6">
          {categories.map((category) => (
            <Category {...category} />
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Recommendations;
