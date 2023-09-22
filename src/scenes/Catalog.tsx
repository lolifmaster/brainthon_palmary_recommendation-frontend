import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { BounceLoader } from "react-spinners";
import { Products } from "../types/fetch-data";

const Catalog = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axiosInstance.get("product/").then((res) => res.data as Products),
  });

  if (isLoading) return <BounceLoader />;
  console.log(data);
  return (
    <div>
      {data?.results.map((product) => <p key={product.id}>{product.name}</p>)}
    </div>
  );
};

export default Catalog;
