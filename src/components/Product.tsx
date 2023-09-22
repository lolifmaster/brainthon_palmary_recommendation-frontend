import { useProductContext } from "@/context/productsProvider";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { FetchedProduct } from "../types/fetch-data";

const Product: FC<FetchedProduct> = ({ category, id, image, name }) => {
  const { toggleProduct, isProductSelected } = useProductContext();

  return (
    <div
      className={cn(
        "cursor-pointer rounded-lg border p-4 shadow-md transition-all",
        {
          "border-4 border-primary": isProductSelected(id),
          "border-gray-200": !isProductSelected(id),
        },
      )}
      onClick={() => toggleProduct(id)}
    >
      <div className="mb-2">
        <img
          src={image}
          height={600}
          width={600}
          alt={name}
          className="h-auto w-full rounded-lg"
        />
      </div>
      <div className="mb-1 line-clamp-1 text-xl font-semibold">{name}</div>
      <div className="mt-2 text-gray-500">Category: {category}</div>
    </div>
  );
};

export default Product;
