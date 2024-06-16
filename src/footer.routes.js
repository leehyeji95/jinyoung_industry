// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images (진영공업 로고)
import logoCT from "assets/images/icon-jy-bg.png";

const date = new Date().getFullYear();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  brand: {
    name: "진영공업",
    image: logoCT,
    route: "/",
  },
  menus: [
    {
      name: "회사소개",
      items: [
        { name: "회사 연혁", route: "/pages/about-us" },
        { name: "기업 이념", route: "/pages/about-us" },
        { name: "오시는 길", route: "/pages/about-us" },
      ],
    },
    {
      name: "ESG",
      items: [
        { name: "SHE 방침", route: "/pages/esg/she" },
        { name: "안전보건경영", route: "/pages/esg/safety" },
        { name: "환경경영", route: "/pages/esg/environment" },
        { name: "윤리경영", route: "/pages/esg/ethic" },
        { name: "사이버신문고", route: "/pages/esg/report" },
      ],
    },
    {
      name: "설비현황",
      items: [
        { name: "설비 보유 현황", route: "/pages/facilities" },
        { name: "주요 생산품", route: "/pages/facilities" },
        { name: "고객사 및 적용차종", route: "/pages/facilities" },
        { name: "인증현황", route: "/pages/facilities" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
