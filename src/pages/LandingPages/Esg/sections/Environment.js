import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "../../../../components/MKTypography";
import MKBox from "../../../../components/MKBox";
import * as React from "react";
import routes from "../../../../routes";
import DefaultNavbar from "../../../../examples/Navbars/DefaultNavbar";
import bgImage from "../../../../assets/images/about_bg.png";
import DefaultFooter from "../../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../../footer.routes";
import environImage from "assets/images/environ.png";
import Card from "@mui/material/Card";

function Environment() {
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
                    backgroundImage: ({functions: {linearGradient, rgba}, palette: {gradients}}) =>
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
                        sx={{mx: "auto", textAlign: "center"}}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({breakpoints, typography: {size}}) => ({
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
                    mx: {xs: 2, lg: 3},
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({palette: {white}, functions: {rgba}}) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({boxShadows: {xxl}}) => xxl,
                }}
            >
                <MKBox component="section" py={5}>
                    <Container>
                        <Grid container spacing={3} alignItems="center" mx="auto">
                            <Grid item xs={12} lg={12}>
                                <MKBox component="img" src={environImage} width="100%"/>
                            </Grid>
                        </Grid>
                    </Container>
                </MKBox>
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes}/>
            </MKBox>
        </>
    );
}

export default Environment;