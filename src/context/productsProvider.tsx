import { ReactNode, createContext, useContext, useState } from "react";
import { useCustonToast } from "@/hook/useCutsomToast";

interface ProductContextType {
  selectedProducts: number[];
  addProduct: (Product: number) => void;
  removeProduct: (Product: number) => void;
  toggleProduct: (Product: number) => void;
  isProductSelected: (ProductId: number) => boolean;
  reset: () => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);
interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const addProduct = (ProductId: number) => {
    setSelectedProducts((prev) => [...prev, ProductId]);
  };
  const reset = () => setSelectedProducts([]);
  const { resetToast } = useCustonToast({ reset });

  const removeProduct = (ProductId: number) => {
    setSelectedProducts((prev) => prev.filter((id) => id !== ProductId));
  };

  const toggleProduct = (productId: number) => {
    if (isProductSelected(productId)) {
      removeProduct(productId);
    } else {
      if (selectedProducts.length > 2) {
        resetToast();
        return;
      }
      addProduct(productId);
    }
  };

  const isProductSelected = (ProductId: number) => {
    return selectedProducts.some(
      (id) => id.toString() === ProductId.toString(),
    );
  };

  const contextValue: ProductContextType = {
    toggleProduct,
    selectedProducts,
    addProduct,
    removeProduct,
    isProductSelected,
    reset,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within an ProductProvider");
  }
  return context;
};
