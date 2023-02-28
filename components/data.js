import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import product1 from "../public/img/procli.jpg";
import product2 from "../public/img/potato.jpg";
import product3 from "../public/img/tomato.jpg";
import product4 from "../public/img/carrot.jpg";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export const benefitOne = {
  title: "Бидний тухай",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Олон жилийн туршлага",
      desc: "Then explain the first point breifly in one ",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Итгэл даах түнш",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Найдвартай бүтээгдэхүүн",
      desc: "This will be your last bullet benefit point ",
      icon: <CursorClickIcon />,
    },
  ],
};
export const products = {
  title: "Бүтээгдэхүүн",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  product: [
    {
      title: "Брокли",
      desc: "Then explain the first point breifly in one or two lines.",
      image: product1,
    },
    {
      title: "Төмс",
      desc: "Here you can add the next benefit point.",
      image: product2,
    },
    {
      title: "Улаан лооль",
      desc: "This will be your last bullet point in this section.",
      image: product3,
    },
    {
      title: "Лууван",
      desc: "This will be your last bullet point in this section.",
      image: product4,
    },
  ],
};
export const contacts = {
  title: "Холбоо барих",
  contact: [
    {
      title: "Утас",
      desc: "+97988888888",
      icon: <BsTelephoneOutbound />,
    },
    {
      title: "И-майл",
      desc: "FandF@gmail.com",
      icon: <AiOutlineMail />,
    },
    {
      title: "Хаяг",
      desc: "БЗД, 3-хороо, ХХХ гудамж, 18-12 ",
      icon: <FiMapPin />,
    },
  ],
};
