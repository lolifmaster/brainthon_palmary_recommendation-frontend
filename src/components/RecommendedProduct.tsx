import { FetchedProduct } from "@/types/fetch-data";
import { FC } from "react";

const RecommendedProduct: FC<FetchedProduct> = ({ category, image, name }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white ">
      <div className="relative h-40">
        <img
          src={image}
          alt={`${name} product`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
    </div>
  );
};

export default RecommendedProduct;
