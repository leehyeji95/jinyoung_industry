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
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import facility1 from "assets/images/facility1.png";
import facility2 from "assets/images/facility2.png";
import facility3 from "assets/images/facility3.png";
import facility4 from "assets/images/facility4.png";
import facility5 from "assets/images/facility5.png";

function Team() {
  return (
      <MKBox
          component="section"
          variant="gradient"
          bgColor="light"
          position="relative"
          py={6}
          px={{ xs: 2, lg: 0 }}
          mx={-2}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h3" color="black">
                설비 보유 현황
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                    image={facility1}
                    name="사출기 1050T"
                    // position={{ color: "info", label: "" }}
                    // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                    image={facility2}
                    name="사출기 680T"
                    // position={{ color: "info", label: "" }}
                    // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                    image={facility3}
                    name="사출기 480T"
                    // position={{ color: "info", label: "" }}
                    // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                    image={facility4}
                    name="사출기 280T"
                    // position={{ color: "info", label: "" }}
                    // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                    image={facility5}
                    name="취출로보트"
                    // position={{ color: "info", label: "" }}
                    // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                />
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
  );
}

export default Team;