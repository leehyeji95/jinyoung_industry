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
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoImgCard from "examples/Cards/InfoCards/DefaultInfoImgCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import cert1 from "assets/images/cert1.png";
import cert2 from "assets/images/cert2.png";
import cert3 from "assets/images/cert3.png";
import MKTypography from "../../../components/MKTypography";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <MKTypography variant="h3" mb={3}>
          인증 현황
        </MKTypography>
        <Grid container item xs={11} spacing={2} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={12} sx={{ mx: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <DefaultInfoImgCard
                  certification={cert1}
                  title="SQ 인증서"
                  date={"2003년 09월 01일"}
                  cert={"대원산업주식회사"}
                  valid={"2023년 4월 30일"}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DefaultInfoImgCard
                  certification={cert2}
                  title="IAFTF16949:2016"
                  date={"2018년 08월 16일"}
                  cert={"KMR"}
                  valid={"2024년 07월 01일"}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DefaultInfoImgCard
                    certification={cert3}
                    title="ISO14001:2004"
                    date={"2010년 03월 15일"}
                    cert={"KMR"}
                    valid={"2025년 03월 14일"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
