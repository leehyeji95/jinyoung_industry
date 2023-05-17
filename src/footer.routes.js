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
      name: "",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
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
