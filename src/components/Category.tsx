import { FC } from "react";

interface CategoryProps {
  name: string;
  image: string;
  queryName: string;
}

const Category: FC<CategoryProps> = ({ image, name, queryName }) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded outline-offset-8 outline-primary transition-[outline] peer-data-[state=checked]:outline">
      <img src={image} alt={queryName} className="h-20 w-32 object-cover" />
      <p>{name}</p>
    </div>
  );
};

export default Category;
