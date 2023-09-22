import { FC } from "react";
import { FetchedProduct } from "../types/fetch-data";

const Product: FC<FetchedProduct> = ({
  category,
  description,
  id,
  image,
  name,
  price,
}) => {
  return <div>Product</div>;
};

export default Product;
