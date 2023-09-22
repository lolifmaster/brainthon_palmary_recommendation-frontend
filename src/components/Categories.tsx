import categories from "../data/catogories";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const Catogories = () => {
  return (
    <section className="container flex max-w-7xl flex-col items-center gap-12">
      <h1 className="text-center text-3xl">Select Products that you like</h1>
      <RadioGroup
        defaultValue="option-one"
        className="flex items-center gap-6 lg:gap-16"
      >
        {categories.map((category) => (
          <Label htmlFor={category.name}>
            <RadioGroupItem
              value={category.name}
              id={category.name}
              className="peer opacity-0"
            />
            <div className="flex flex-col items-center gap-2 outline-offset-8 peer-data-[state=checked]:outline">
              <img
                src={category.image}
                alt={category.name}
                className="h-20 w-32 object-cover"
              />
              <p>{category.name}</p>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </section>
  );
};

export default Catogories;
