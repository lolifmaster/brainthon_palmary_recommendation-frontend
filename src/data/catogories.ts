import Kool from "../assets/Kool.png";
import Palmary from "../assets/Palmary.png";
import Maxon from "../assets/logo-maxon.png";
import Moment from "../assets/moment.png";
import Regalo from "../assets/regalo-logo.png";

interface Category {
  name: string;
  image: string;
  queryName: string;
}

const categories: Category[] = [
  {
    name: "Kool Range",
    image: Kool,
    queryName: "kool",
  },
  {
    name: "Palmary Range",
    image: Palmary,
    queryName: "palmary",
  },
  {
    name: "Maxon Range",
    image: Maxon,
    queryName: "maxon",
  },
  {
    name: "Moment Range",
    image: Moment,
    queryName: "moment",
  },
  {
    name: "Regalo Range",
    image: Regalo,
    queryName: "regalo",
  },
];

export default categories;
