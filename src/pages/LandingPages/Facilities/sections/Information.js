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

// Material Kit 2 React examples

// Images
import car from "assets/images/car.png";
import certification from "assets/images/certification.png";
import product1 from "assets/images/product1.png";
import product3 from "assets/images/product_main.png";
import TransparentModalCard from "examples/Cards/BlogCards/TransparentModalCard";
import Team from "../../AboutUs/sections/Team";

function Information() {
  return (
    <MKBox component="section" py={5}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            {/*<ImageSlider/>*/}
              <MKBox >
                  {/*<MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>*/}
                  {/*    설비 보유 현황*/}
                  {/*</MKTypography>*/}
                  <Team></Team>
              </MKBox>
          </Grid>

            <Grid item xs={12} lg={12} flexDirection="column" sx={{my: 6, mx: "auto", px: 0.75}}>
                <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>
                    주요 생산품
                </MKTypography>
                <Grid container item xs={12} lg={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} lg={6} >
                            <TransparentModalCard
                                image={product1}
                                title="카니발"
                                type="1"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TransparentModalCard
                                image={product3}
                                title="그랜져"
                                type="2"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>
             적용차종
            </MKTypography>
            <MKBox component="img" src={car} alt="" width="100%" pl={3}/>
          </Grid>

          {/*<Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>*/}
          {/*  <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>*/}
          {/*    공정흐름도*/}
          {/*  </MKTypography>*/}
          {/*  <MKBox component="img" src={flowchart} alt="" width="100%" pl={3}/>*/}
          {/*</Grid>*/}

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>
             인증현황 
            </MKTypography>
            <MKBox component="img" src={certification} alt="" width="100%" pl={3}/>
          </Grid>

          {/*<Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>*/}
          {/*  <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>*/}
          {/*   매출현황*/}
          {/*  </MKTypography>*/}
          {/*  <MKBox component="img" src={salechart} alt="saleschart" width="100%" pl={3}/>*/}
          {/*</Grid>*/}

        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
