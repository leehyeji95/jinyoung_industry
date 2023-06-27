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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Posts from "pages/LandingPages/Author/sections/Posts";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/bg-main.png";
import bgImage from "assets/images/bg-ball.png";

function Presentation() {
    return (
        <>
            <DefaultNavbar
                routes={routes}
                sticky
            />
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
                        <MKTypography
                            variant="h1"
                            color="white"
                            mt={-20}
                            mb={1}
                            sx={({breakpoints, typography: {size}}) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        > 진영공업 (주)
                        </MKTypography>
                        <MKTypography
                            sx={{fontSize: "1rem"}}
                            color="white"
                            textAlign="center"
                            px={{xs: 6, lg: 12}}
                            mt={-10}
                        >
                            진영공업은 지난 2002년 9월 출범 이후 '인격도약', '기업번영', '국가초석'을 사훈으로 삼아 고품질의 자동차 SEAT 조립용 플라스틱 사출품 생산을 궁극적인 목표로 삼고 있습니다.
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
                <Counters/>
                {/*<Posts/>*/}
                <br/>
                <DesignBlocks />
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes}/>
            </MKBox>
        </>
    );
}

export default Presentation;
