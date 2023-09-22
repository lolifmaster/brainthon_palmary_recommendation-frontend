import axiosInstance from "@/axios";
import { useProductContext } from "@/context/productsProvider";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import categories from "../data/catogories";
import ProductsList from "./ProductsList";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";

const Catogories = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].queryName,
  );
  const navigate = useNavigate();

  const { selectedProducts } = useProductContext();

  const { mutate, isLoading } = useMutation<AxiosResponse, AxiosError>(
    () =>
      axiosInstance.post("product/recommendation/", {
        products: selectedProducts,
      }),
    {
      onSuccess: (response) => {
        toast({
          title: "Success",
          description: response.statusText,
        });
        navigate("/recommendations");
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
      <h1 className="text-center text-3xl">Select Products that you like</h1>
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
              <div className="flex flex-col items-center gap-2 rounded outline-offset-8 outline-primary transition-[outline] peer-data-[state=checked]:outline">
                <img
                  src={category.image}
                  alt={category.queryName}
                  className="h-20 w-32 object-cover"
                />
                <p>{category.name}</p>
              </div>
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
    </section>
  );
};

export default Catogories;
