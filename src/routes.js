// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import Facility from "layouts/pages/landing-pages/facilities";

const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    href: "/",
  },
  {
    name: "회사 소개",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "기업 개요",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />
      },
      {
        name: "기업이념 및 경영방침",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />
      },
      {
        name: "회사 연혁",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />
      },
      {
        name: "조직 구성",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />
      },
      {
        name: "오시는 길",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />
      },
    ],
  },
  {
    name: "설비",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "시험 측정기 및 설비",
        route: "/pages/landing-pages/facilities",
        component: <Facility />
      },
      {
        name: "주요 생산품",
        route: "/pages/landing-pages/facilities",
        component: <Facility />
      },
      {
        name: "공정 흐름도",
        route: "/pages/landing-pages/facilities",
        component: <Facility />
      },
      {
        name: "고객사 및 적용차종",
        route: "/pages/landing-pages/facilities",
        component: <Facility />
      },
      {
        name: "인증현황",
        route: "/pages/landing-pages/facilities",
        component: <Facility />
      },
      {
        name: "매출현황",
        route: "/pages/landing-pages/facilities",
        component: <Facility />
      },
    ],
  },
];

export default routes;
