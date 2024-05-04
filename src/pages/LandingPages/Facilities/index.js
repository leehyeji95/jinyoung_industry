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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Facilities page sections
import Information from "pages/LandingPages/Facilities/sections/Information";

// Routes
import routes from "routes";

// Images
// import bgImage from "assets/images/city-profile.jpg";
import bgImage from "assets/images/facility_bg.png";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "../../../components/MKTypography";

function Facility() {
    return (
        <>
            <DefaultNavbar
                routes={routes}
                transparent
                light
            />
            <MKBox
                minHeight="25rem"
                width="100%"
                sx={{
                    backgroundImage: ({functions: {linearGradient, rgba}, palette: {gradients}}) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.8),
                            rgba(gradients.dark.state, 0.8)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={8}
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
                            설비현황
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: {xs: 2, lg: 3},
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({palette: {white}, functions: {rgba}}) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({boxShadows: {xxl}}) => xxl,
                }}
            >
                <Information/>
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes}/>
            </MKBox>
        </>
    );
}

export default Facility;
