// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/about-us";
import Facility from "layouts/pages/facilities";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Ethic from "./pages/LandingPages/Esg/sections/Ethic";
import Environment from "./pages/LandingPages/Esg/sections/Environment";
import Report from "layouts/pages/esg/report";
import She from "./pages/LandingPages/Esg/sections/She";
import Safety from "./pages/LandingPages/Esg/sections/Safety";
import FileBoard from "./pages/LandingPages/Esg/sections/FilesBoard";

const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    href: "/",
  },
  {
    name: "회사소개",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "기업 개요",
        route: "/pages/about-us",
        component: <AboutUs />
      },
      {
        name: "기업이념 및 경영방침",
        route: "/pages/about-us",
        component: <AboutUs />
      },
      {
        name: "오시는 길",
        route: "/pages/about-us",
        component: <AboutUs />
      },
    ],
  },
  {
    name: "ESG",
    icon: <AutorenewIcon/>,
    collapse: [
      {
        name: "SHE 방침",
        route: "/pages/esg/She",
        component: <She />
      },
      {
        name: "안전보건경영",
        route: "/pages/esg/safety",
        component: <Safety />
      },
      {
        name: "환경경영",
        route: "/pages/esg/environment",
        component: <Environment />
      },
      {
        name: "윤리경영",
        route: "/pages/esg/ethic",
        component: <Ethic />
      },
      {
        name: "사이버신문고",
        route: "/pages/esg/report",
        component: <Report />
      },
      {
        name: "시행규칙",
        route: "/pages/esg/board",
        component: <FileBoard />
      },
    ],
  },
  {
    name: "설비현황",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "설비 보유 현황",
        route: "/pages/facilities",
        component: <Facility />
      },
      {
        name: "주요 생산품",
        route: "/pages/facilities",
        component: <Facility />
      },
      {
        name: "고객사 및 적용차종",
        route: "/pages/facilities",
        component: <Facility />
      },
      {
        name: "인증현황",
        route: "/pages/facilities",
        component: <Facility />
      },

    ],
  },
];

export default routes;
