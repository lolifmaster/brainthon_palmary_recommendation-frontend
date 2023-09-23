import axiosInstance from "@/axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProductContext } from "@/context/productsProvider";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import categories from "../data/catogories";
import Category from "./Category";
import ProductsList from "./ProductsList";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "./ui/use-toast";
import { FetchedProduct } from "@/types/fetch-data";
import RecommendedList from "./RecommendedList";

const Catogories = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].queryName,
  );

  const [recommendedProducts, setRecommendedProducts] = useState<
    FetchedProduct[]
  >([]);

  const { selectedProducts, reset } = useProductContext();

  const { mutate, isLoading } = useMutation<AxiosResponse, AxiosError>(
    () =>
      axiosInstance.post("product/recommendation/", {
        products: selectedProducts,
      }),
    {
      onSuccess: (response) => {
        setOpen(true);
        reset();
        setRecommendedProducts(response.data);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (err: any) => {
        toast({
          title: "Error",
          description: err.response?.data?.message,
          variant: "destructive",
        });
      },
    },
  );

  return (
    <section className="container flex max-w-7xl flex-col items-center gap-12">
      <h1 className="text-center text-5xl">
        Please Select you most 3 favorite products
      </h1>
      <div className="flex flex-col items-center gap-6">
        <RadioGroup
          defaultValue={categories[0].queryName}
          className="flex items-center gap-6 border-b pb-6 lg:gap-16"
        >
          {categories.map((category) => (
            <Label
              className="cursor-pointer"
              key={category.name}
              htmlFor={category.queryName}
              onClick={() => {
                setSelectedCategory(category.queryName);
              }}
            >
              <RadioGroupItem
                value={category.queryName}
                id={category.queryName}
                className="peer pointer-events-none opacity-0"
              />
              <Category {...category} />
            </Label>
          ))}
        </RadioGroup>
        <ProductsList category={selectedCategory} />
        <Button
          isLoading={isLoading}
          onClick={() => {
            if (selectedProducts.length < 3) {
              toast({
                title: "Error",
                description: "Please select atleast 3 products",
                variant: "destructive",
              });
              return;
            }
            mutate();
          }}
          variant="outline"
        >
          Submit
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="h-[43rem] max-w-3xl gap-12 text-center">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              Thanks for using our service !!!
            </DialogTitle>
            <DialogDescription className="text-center">
              Looking at the product you like, here's some similar products we
              believe you'll like aswell
            </DialogDescription>
          </DialogHeader>
          <RecommendedList products={recommendedProducts} />
        </DialogContent>
        <DialogFooter></DialogFooter>
      </Dialog>
    </section>
  );
};

export default Catogories;
