// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images (진영공업 로고)
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

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
        { name: "기업 이념", href: "https://www.creative-tim.com/presentation" },
        { name: "회사 연혁", href: "https://www.creative-tim.com/presentation" },
        { name: "조직도", href: "https://www.creative-tim.com/presentation" },
        { name: "오시는 길", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "설비",
      items: [
        { name: "시험측정기 및 설비", href: "https://www.creative-tim.com/contact-us" },
        { name: "공정 흐름도", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "주요 생산품", href: "https://services.creative-tim.com/" },
        { name: "고객사 및 적용차종", href: "https://www.creative-tim.com/sponsorships" },
        { name: "인증현황", href: "https://www.creative-tim.com/sponsorships" },
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
