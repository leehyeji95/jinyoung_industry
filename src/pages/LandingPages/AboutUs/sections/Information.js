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

// Images
import groups from "assets/images/groups.jpg";
import MKTypography from "../../../../components/MKTypography";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/*<Grid item xs={12} lg={12}>*/}
          {/*  <Grid container justifyContent="flex-start">*/}
          {/*    <Grid item xs={12} md={12}>*/}
          {/*      <MKBox mb={{ xs: 5, md: 0 }}>*/}
          {/*        <DefaultInfoCard*/}
          {/*          icon="public"*/}
          {/*          title="기업개요"*/}
          {/*          description="기업명 : 진영공업(주)*/}
          {/*          대표이사 : 이영웅*/}
          {/*          "*/}
          {/*        />*/}
          {/*      </MKBox>*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={12} md={12}>*/}
          {/*      <MKBox mb={{ xs: 5, md: 0 }}>*/}
          {/*        <DefaultInfoCard*/}
          {/*          icon="public"*/}
          {/*          title="기업개요"*/}
          {/*          description="기업명 : 진영공업(주)*/}
          {/*          대표이사 : 이영웅*/}
          {/*          "*/}
          {/*        />*/}
          {/*      </MKBox>*/}
          {/*    </Grid>*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
          <Grid item xs={12} lg={12} flexDirection="column" sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h2" color="gray" fontWeight="bold">
              조직도
            </MKTypography>
            <MKBox component="img" src={groups} alt="groups" width="90%"/>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
