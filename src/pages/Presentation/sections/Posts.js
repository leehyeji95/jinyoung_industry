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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import post1 from "assets/images/machine_main1.png";
import post2 from "assets/images/product_main.png";
import post3 from "assets/images/car_main.png";
import post4 from "assets/images/customer.png";

function Posts() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            주요 현황
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="설비현황"
              description="수분 측정기, 3차원 스캐너기, 분광 색차계 등 시험측정기와 사출기 및 로보트 등 설비현황 목록"
              action={{
                type: "internal",
                route: "/pages/landing-pages/facilities",
                color: "info",
                label: "더 알아보기",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="주요 생산품"
              description="대원산업 SG2 차종, 엠시트 GN7 차종에 들어간 SHIELD COVER PWR 등 생산품 목록"
              action={{
                type: "internal",
                route: "/pages/landing-pages/facilities",
                color: "info",
                label: "더 알아보기",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="적용차종"
              description="그랜져, 프라이드, 니로 등 진영공업 제품이 적용된 차종 목록"

              action={{
                type: "internal",
                route: "/pages/landing-pages/facilities",
                color: "info",
                label: "더 알아보기",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
              <RotatingCard>
                  <RotatingCardFront
                      image={post4}
                      icon="touch_app"
                      title={
                          <>
                          </>
                      }
                      description=""
                  />
                  <RotatingCardBack
                      // image={}
                      title="주 고객사"
                      description="대성금형,
                      대원산업(안산, 평택 공장),
                      현대 엠시트"
                  />
              </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Posts;
