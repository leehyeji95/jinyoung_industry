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
        { name: "회사 연혁", href: "/pages/landing-pages/about-us" },
        { name: "기업 이념", href: "/pages/landing-pages/about-us" },
        { name: "조직도", href: "/pages/landing-pages/about-us" },
        { name: "오시는 길", href: "/pages/landing-pages/about-us" },
      ],
    },
    {
      name: "설비현황",
      items: [
        { name: "시험측정기 및 설비", href: "/pages/landing-pages/facilities" },
        { name: "공정 흐름도", href: "/pages/landing-pages/facilities" },
        { name: "주요 생산품", href: "/pages/landing-pages/facilities" },
        { name: "고객사 및 적용차종", href: "/pages/landing-pages/facilities" },
        { name: "인증현황", href: "/pages/landing-pages/facilities" },
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
