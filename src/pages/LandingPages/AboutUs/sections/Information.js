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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import Profile from "pages/LandingPages/Author/sections/Profile";
import Contact from "pages/LandingPages/Author/sections/Contact";

// Images
import groups from "assets/images/groups.png";
import MKTypography from "../../../../components/MKTypography";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import bgImage from "../../../../assets/images/examples/blog2.jpg";

function Information() {
  return (
    <MKBox component="section" py={5}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <MKTypography variant="h3" color="gray" fontWeight="bold" mt={5} mb={2}>
            기업이념 및 경영방침
          </MKTypography>
          <Grid item xs={12} lg={12}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                      icon="public"
                      title="주인의식, 자주적인 능력"
                      description="임직원 모두 하나되어 남의 것이 아닌 나의 것이라 생각하며 개인의 능력을 향상하여 고객에게 한 발 더 다가서기 위해 노력합니다."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                      icon="payments"
                      title="경영방침"
                      description="고객사 다변화에 따른 손실의 최소화 및 품질 시스템의 정착화를 위해 노력합니다."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                      icon="apps"
                      title="기술개발"
                      description="사출 기술과 금형 개발 기술로 어떤 제품이라도 최상의 제품을 공급하도록 언제든 준비된 자세로 임하겠습니다."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                      icon="3p"
                      title="품질방침"
                      description="품질읜 회사의 명예와 자존심 이며 고객을 위한 품질로 승부하겠습니다."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                      icon="3p"
                      title="고객중심"
                      description="축적된 기술과 경험으로 수출 산업의 중심이 되어 고객만족에 최선을 다하며 최상의 서비스로 승부하겠습니다."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h2" color="gray" fontWeight="bold">
              조직도
            </MKTypography>
            <MKBox component="img" src={groups} alt="groups" width="100%" pl={3}/>
          </Grid>
          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            <Contact/>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
