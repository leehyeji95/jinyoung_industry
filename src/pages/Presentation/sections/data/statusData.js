/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import cert1 from "assets/images/cert1.png";
import cert2 from "assets/images/cert2.png";
import cert3 from "assets/images/cert3.png";

import post1 from "assets/images/machine_main1.png";
import post2 from "assets/images/car_main.jpg";
import post3 from "assets/images/image21.png";
import post4 from "assets/images/flowchart.png";

export default [
  {
    title: "주요 현황",
    description: "",
    items: [
      {
        image: post1,
        name: "시험측정기 보유현황",
        count: 4,
        route: "/sections/navigation/navbars",
      },
      {
        image: post1,
        name: "설비현황",
        count: 4,
        route: "/sections/navigation/navbars",
      },
      {
        image: post2,
        name: "적용차종",
        count: 2,
        route: "/sections/navigation/nav-tabs",
      },
      {
        image: post3,
        name: "주요 고객사",
        count: 3,
        route: "/sections/navigation/pagination",
      },
      {
        image: post3,
        name: "매출현황",
        count: 3,
        route: "/sections/navigation/pagination",
      },
    ],
  },
  {
    title: "인증현황",
    description: "",
    items: [
      {
        image: cert1,
        name: "SQ 인증서",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: cert2,
        name: "IAFTF16949:2016",
        count: 14,
        route: "/sections/page-sections/features",
      },
      {
        image: cert3,
        name: "ISO14001:2004",
        count: 8,
        route: "/sections/page-sections/features",
      },
    ],
  },
];
