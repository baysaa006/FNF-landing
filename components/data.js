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
import photo1 from "../public/img/company/03.jpg";
import photo2 from "../public/img/company/05.jpg";
import photo3 from "../public/img/company/07.jpg";
import photo5 from "../public/img/company/01.jpg";

import { BsTelephoneOutbound } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export const benefitOne = {
  title: "Бидний тухай",
  desc: [
    {
      title:
        "ЭФ ЭНД ЭФ КАТЕРИНГ  ХХК нь  анх  2016 онд 2  хүний бүрэлдэхүүнтэй байгуулагдав.",
      photo: photo1,
    },
    {
      title:
        "2022оноос  бид үйл ажиллагаагаа улам өргөжүүлж олон улсын чанарын шаардлага хангасан ногооны агуулах,бэлтгэх цех зэргийг ашиглалтанд оруулав.",
      photo: photo2,
    },
    {
      title: "Шинэ ургацын нарийн ногоог  харилцагч нартаа тогтмол нийлүүлдэг.",
      photo: photo3,
    },
    {
      title:
        "Өнөөдрийн байдлаар 50 харилцагч, 10 гаруй ажилчинтайгаар үйл ажиллагаа явуулж байна.",
      photo: photo5,
    },
  ],

  image: benefitOneImg,
  bullets: [
    {
      title: "Олон жилийн туршлага",
      desc: "Туршлага дээр суурьлан  тууштай ажилдаг",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Итгэл даах түнш",
      desc: "Олон харилцагчийн итгэлийг даан ажилдаг",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Найдвартай бүтээгдэхүүн",
      desc: "Олон улсын стандартыг  мөрдөн ажилдаг",
      icon: <CursorClickIcon />,
    },
  ],
};

export const products = {
  title: "Бүтээгдэхүүн",
  desc: "Стандартын дагуу хадгалж бэлтгэсэн хүнсний ногоо, жимс жимсгэнийг найдвартай нийлүүлдэг ",
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
      desc: "+97688886840",
      icon: <BsTelephoneOutbound />,
    },
    {
      title: "И-майл",
      desc: "FandF@gmail.com",
      icon: <AiOutlineMail />,
    },
    {
      title: "Хаяг",
      desc: "БЗД, 10-хороо, Гацууртын гудамж, 90 ",
      icon: <FiMapPin />,
    },
  ],
};
