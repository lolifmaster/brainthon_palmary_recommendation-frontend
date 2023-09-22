import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/axios";
import { Products } from "@/types/fetch-data";
import { motion, AnimatePresence } from "framer-motion";
import Product from "./Product";
import { BounceLoader } from "react-spinners";

interface ProductsListProps {
  category: string;
}

const ProductsList: FC<ProductsListProps> = ({ category }) => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", category], async () => {
    const { data } = await axiosInstance.get(`/product`, {
      params: {
        category__name: category,
      },
    });
    return data as Products;
  });

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div className="grid h-32 items-center">
          <BounceLoader color="#ed212f" />
        </motion.div>
      ) : (
        <motion.div
          key={category}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid min-h-[20rem] w-full grid-cols-4 justify-between gap-2 text-center"
        >
          {products?.results.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Product {...product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductsList;
