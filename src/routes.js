// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import Location from "layouts/pages/landing-pages/location";

const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    href: "/#",
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
        description: "",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "공정 흐름도",
        description: "",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "주요 생산품",
        description: "",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "고객사 및 적용차종",
        description: "",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "인증현황",
        description: "",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
    ],
  },
];

export default routes;
