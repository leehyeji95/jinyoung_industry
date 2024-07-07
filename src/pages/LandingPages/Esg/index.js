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
import Card from "@mui/material/Card";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Profile from "pages/LandingPages/AboutUs/sections/Profile";
import Footer from "pages/LandingPages/AboutUs/sections/Footer";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/about_bg.png";
import FilledInfoCard from "../../../examples/Cards/InfoCards/FilledInfoCard";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import IconTabs from "./sections/IconTab";
import TransparentModalCard from "../../../examples/Cards/BlogCards/TransparentModalCard";
import product1 from "../../../assets/images/product1.png";
import product3 from "../../../assets/images/product_main.png";

function ESG() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center"
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={3}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"]
                }
              })}
            >
              지속 가능 경영
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        <Grid container spacing={3} mt={3}>
            <Grid item xs={12} lg={12} sx={{my: 6, mx: "auto", px: 0.75}}>
                <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>
                    ESG 전략
                </MKTypography>
                <Grid container item xs={12} lg={12}>
                    <IconTabs/>
                </Grid>
            </Grid>

            <Grid item xs={12} lg={12}></Grid>
        </Grid>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes}/>
      </MKBox>
    </>
  );
}

export default ESG;
