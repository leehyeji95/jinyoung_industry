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
// Images
import cert1 from "assets/images/cert1.png";
import cert2 from "assets/images/cert2.png";
import cert3 from "assets/images/cert3.png";

import sales from "assets/images/saleschart.png";

export default [
  {
    title: "인증현황",
    description: "",
    items: [
      {
        image: cert1,
        name: "",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: cert2,
        name: "",
        route: "/sections/page-sections/features",
      },
      {
        image: cert3,
        name: "",
        route: "/sections/page-sections/features",
      },
    ],
  },
  {
    title: "매출현황",
    description: "",
    items: [
      {
        image: sales,
        name: "매출현황",
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
];
