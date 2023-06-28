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
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Contact from "pages/LandingPages/AboutUs/sections/Contact";

// Images
import facility1 from "assets/images/flowchart.png";
import facility2 from "assets/images/flowchart.png";
import product from "assets/images/flowchart.png";
import flowchart from "assets/images/flowchart.png";
import customer from "assets/images/flowchart.png";
import car from "assets/images/flowchart.png";
import certification from "assets/images/flowchart.png";
import saleschart from "assets/images/saleschart.png";

function Information() {
  return (
    <MKBox component="section" py={5}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            {/*<MKTypography variant="h2" color="gray" fontWeight="bold">*/}
            {/*  시험측정기 */}
            {/*</MKTypography>*/}
            <MKBox component="img" src={facility1} alt="" width="100%" pl={3}/>
          </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            {/*<MKTypography variant="h2" color="gray" fontWeight="bold">*/}
            {/*  설비 */}
            {/*</MKTypography>*/}
            <MKBox component="img" src={facility2} alt="" width="100%" pl={3}/>
          </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            {/*<MKTypography variant="h2" color="gray" fontWeight="bold">*/}
            {/* 주요 생산품 */}
            {/*</MKTypography>*/}
            <MKBox component="img" src={product} alt="" width="100%" pl={3}/>
          </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            {/*<MKTypography variant="h2" color="gray" fontWeight="bold">*/}
            {/* 적용차종 */}
            {/*</MKTypography>*/}
            <MKBox component="img" src={car} alt="" width="100%" pl={3}/>
          </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            {/*<MKTypography variant="h2" color="gray" fontWeight="bold">*/}
            {/*  공정흐름도 */}
            {/*</MKTypography>*/}
            <MKBox component="img" src={flowchart} alt="" width="100%" pl={3}/>
          </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            {/*<MKTypography variant="h2" color="gray" fontWeight="bold">*/}
            {/* 주요 고객사 */}
            {/*</MKTypography>*/}
            <MKBox component="img" src={customer} alt="" width="100%" pl={3}/>
          </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            {/*<MKTypography variant="h2" color="gray" fontWeight="bold">*/}
            {/* 인증현황 */}
            {/*</MKTypography>*/}
            <MKBox component="img" src={certification} alt="" width="100%" pl={3}/>
          </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            {/*<MKTypography variant="h2" color="gray" fontWeight="bold">*/}
            {/* 매출현황 */}
            {/*</MKTypography>*/}
            <MKBox component="img" src={saleschart} alt="saleschart" width="100%" pl={3}/>
          </Grid>

        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
