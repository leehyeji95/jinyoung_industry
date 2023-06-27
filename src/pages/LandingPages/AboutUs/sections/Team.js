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
import {Map, MapMarker} from "react-kakao-maps-sdk";

function Location() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              오시는 길
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>

            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Map center={{lat:37.13278733758951, lng:127.40413767729119}} style={{width: "100%", height: "360px"}}>
            <MapMarker position={{ lat: 37.13278733758951, lng: 127.40413767729119}}></MapMarker>
          </Map>
          <MKTypography sx={{fontSize: "1rem"}} color={"white"}> 경기도 용인시 처인구 백암면 고안로 53</MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Location;
