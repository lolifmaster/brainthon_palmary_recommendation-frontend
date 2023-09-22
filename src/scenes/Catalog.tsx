import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { BounceLoader } from "react-spinners";
import { Products } from "../types/fetch-data";
import HeroImg from "../assets/kool-hero.png";
import Catogories from "../components/Categories";
import { ProductProvider } from "@/contect/productsProvider";

const Catalog = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axiosInstance.get("product/").then((res) => res.data as Products),
  });

  if (isLoading) return <BounceLoader />;
  return (
    <main className="min-h-screen space-y-12 pb-12 pt-32">
      <div className="h-full">
        <img src={HeroImg} alt="kool" className="mx-auto h-full object-cover" />
      </div>
      <ProductProvider>
        <Catogories />
      </ProductProvider>
    </main>
  );
};

export default Catalog;
