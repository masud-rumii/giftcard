import { Health, Setting } from "iconsax-react";

const main = [
  {
    header: "ADMIN PANEL",
  },
  {
    id: "operators",
    title: "Operators",
    icon: <Health size={18} />,
    navLink: "/edit-product",
  },
  {
    id: "add-images",
    title: "Add Images",
    icon: <Setting size={18} />,
    navLink: "/add-image",
  },
];

export default main;
