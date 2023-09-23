import { FetchedProduct } from "@/types/fetch-data";
import { FC } from "react";
import RecommendedProduct from "./RecommendedProduct";

interface RecommendedListProps {
  products: FetchedProduct[];
}

const RecommendedList: FC<RecommendedListProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div>
        <h2 className="text-3xl font-bold">No recommended products</h2>
      </div>
    );
  }
  return (
    <section className="container flex h-[33rem] max-w-7xl flex-col items-center gap-12 overflow-auto">
      <h2 className="text-3xl font-bold">Recommended Products</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <RecommendedProduct {...product} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedList;
