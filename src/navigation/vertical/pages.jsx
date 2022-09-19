import { Health, Setting } from "iconsax-react";

const main = [
  {
    header: "ADMIN PANEL",
  },
  {
    id: "operators",
    title: "Operators",
    icon: <Health size={18} />,
    navLink: "/operators",
  },
  {
    id: "slider-images",
    title: "Slider Images",
    icon: <Setting size={18} />,
    navLink: "/slider-images",
  },
];

export default main;
