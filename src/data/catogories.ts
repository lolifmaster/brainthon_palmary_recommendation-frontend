import Kool from "../assets/Kool.png";
import Palmary from "../assets/Palmary.png";
import Maxon from "../assets/logo-maxon.png";
import Moment from "../assets/moment.png";
import Legalo from "../assets/regalo-logo.png";

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    name: "Kool Range",
    image: Kool,
  },
  {
    name: "Palmary Range",
    image: Palmary,
  },
  {
    name: "Maxon Range",
    image: Maxon,
  },
  {
    name: "Moment Range",
    image: Moment,
  },
  {
    name: "Legalo Range",
    image: Legalo,
  },
];

export default categories;
