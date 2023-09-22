import { ReactNode, createContext, useContext, useState } from "react";
import { Toast } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
interface ProductContextType {
  selectedProducts: number[];
  addProduct: (Product: number) => void;
  removeProduct: (Product: number) => void;
  toggleProduct: (Product: number) => void;
  isProductSelected: (ProductId: number) => boolean;
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

  const removeProduct = (ProductId: number) => {
    setSelectedProducts((prev) => prev.filter((id) => id !== ProductId));
  };

  const toggleProduct = (productId: number) => {
    if (isProductSelected(productId)) {
      removeProduct(productId);
    } else {
      if (selectedProducts.length > 2) {
        toast({
          title: "You can only select 3 products",
          description: "Please unselect one of the products to select another",
          variant: "destructive",
        });
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
