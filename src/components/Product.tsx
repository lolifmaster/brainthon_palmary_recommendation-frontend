import { FC, useState } from "react";
import { FetchedProduct } from "../types/fetch-data";
import { useProductContext } from "@/contect/productsProvider";
import { cn } from "@/lib/utils";

const Product: FC<FetchedProduct> = ({ category, id, image, name }) => {
  const { addProduct, removeProduct, isProductSelected } = useProductContext();
  const [selected, setSelected] = useState<boolean>(isProductSelected(id));
  console.log(selected);

  return (
    <div
      className={cn("cursor-pointer rounded-lg border p-4 shadow-md", {
        "border-primary": selected,
        "border-gray-200": !selected,
      })}
      onClick={() => {
        if (selected) {
          removeProduct(id);
        } else {
          addProduct(id);
        }
        setSelected(!selected);
      }}
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
      <div className="mb-1 text-xl font-semibold">{name}</div>
      <div className="mt-2 text-gray-500">Category: {category}</div>
    </div>
  );
};

export default Product;
