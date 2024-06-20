import { motionCards } from "../config/animations/index";

import code from "../public/images/icons/code.png";
import web from "../public/images/icons/web.png";
import responsive from "../public/images/icons/responsive.png";

export const VALUES_DATA = [
  {
    id: 0,
    icon: code,
    title: "Innovation",
    description:
      "We embrace creativity and seek out new ideas and approaches to stay ahead in the industry.",
    ...motionCards.cardOne,
  },
  {
    id: 1,
    icon: web,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and partnership, both within our agency and with our clients.",
    ...motionCards.cardTwo,
  },
  {
    id: 2,
    icon: responsive,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality of work and exceeding client expectations.",
    ...motionCards.cardThree,
  },
];
